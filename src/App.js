
import React from 'react';
import { Container, List, TextField, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, selectTasks } from './features/tasks/tasksSlice';
import Task from './components/Task';


function App() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const [newTaskTitle, setNewTaskTitle] = React.useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      dispatch(addTask({ id: Date.now(), title: newTaskTitle, completed: false }));
      setNewTaskTitle('');
    }
  };

  return (
    <Container maxWidth="sm">
      <TextField
        label="New Task"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
      <List>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </List>
    </Container>
  );
}

export default App;
