import { ADD_TASK } from '../constants/constants';

export const addTast = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});