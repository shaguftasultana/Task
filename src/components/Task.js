// src/components/Task.js

import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../features/tasks/tasksSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <ListItem key={task.id} dense button>
      <Checkbox
        checked={task.completed}
        onChange={handleToggle}
      />
      <ListItemText primary={task.title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Task;