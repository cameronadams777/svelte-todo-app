import { get, post, del } from './utils/http.js';

export const getTodos = ({ guid }) => {
  return get({ endpoint: `todos/${guid}` })
}

export const createNewTodoItem = ({ guid, payload }) => {
  return post({ endpoint: `todos/${guid}`, payload })
}

export const deleteTodoItem = ({ guid, itemId }) => {
  return del({ endpoint: `todos/${guid}/${itemId}` })
}