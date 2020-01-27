import { get, writable } from 'svelte/store';
import { getTodos, createNewTodoItem, deleteTodoItem } from "../api/todos.js";
import { getGuidFromCookies } from '../utils/index.js';
import { updateError } from './interface.js';

export const todoItems = writable([]);
export const todoText = writable("");

export const getTodoItems = async () => {
  try {
    const guid = getGuidFromCookies();
    const { data } = await getTodos({ guid });
    return data;
  } catch (error) {
    updateError(error);
    return;
  }
}

export const initializeTodoItems = (items) => todoItems.set(items);

export const addItemToList = async () => {
  const item = get(todoText)
  if (!item) {
    updateError("Please enter a task before adding...");
    return;
  }
  try {
    const guid = getGuidFromCookies();
    const payload = {
      todoItem: item
    };
    await createNewTodoItem({ guid, payload });
  } catch (error) {
    updateError(error);
  }
  todoItems.update(currentValue => currentValue.concat({ value: item }));
  todoText.set("");
}

export const deleteItemFromList = async (event) => {
  let itemToDelete;
  const guid = getGuidFromCookies();
  const filteredTodoItems = get(todoItems).filter((item, index) => {
    if (index === event.detail.index) itemToDelete = item;
    return index !== event.detail.index;
  });
  todoItems.set(filteredTodoItems)
  await deleteTodoItem({ guid, itemId: itemToDelete.id });
}