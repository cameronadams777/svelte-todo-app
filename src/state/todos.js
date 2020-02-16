import { get, writable } from 'svelte/store';
import { getProjects, createNewProject } from "../api/todos.js";
import { getGuidFromCookies } from '../utils/index.js';
import { updateError } from './interface.js';

export const projects = writable([]);
export const activeProjectIndex = writable(0);
export const totalTasks = writable(0);
export const tasks = writable([]);
export const members = writable([]);
export const todoItems = writable([]);
export const todoText = writable("");

export const retrieveProjects = async () => {
  try {
    const guid = getGuidFromCookies();
    const { data } = await getProjects({ guid });
    return data;
  } catch (error) {
    updateError(error);
    return;
  }
}

export const initializeProjects = (items) => projects.set(items);

export const addProject = async (item) => {
  if (!item) {
    updateError("Please enter a task before adding...");
    return;
  }
  try {
    const guid = getGuidFromCookies();
    const payload = {
      newProject: item
    };
    await createNewProject({ guid, payload });
  } catch (error) {
    updateError(error);
  }
  todoItems.update(currentValue => currentValue.concat({ value: item }));
  todoText.set("");
}

export const updateActiveProjectIndex = (newIndex) => activeProjectIndex.set(newIndex)

projects.subscribe(value => {
  if (value && value[get(activeProjectIndex)]) {
    const tempMembers = value[get(activeProjectIndex)].members;
    const tempTasks = value[get(activeProjectIndex)].tasks;
    const nonCompletedTasks = tempTasks ? tempTasks.filter(task => !task.completed) : 0;
    tasks.set(nonCompletedTasks.length ? tempTasks : []);
    members.set(tempMembers.length ? tempMembers : []);
    totalTasks.set(nonCompletedTasks.length || 0);
  }
})

activeProjectIndex.subscribe(newIndex => {
  const projectsValue = get(projects)
  if (projectsValue && projectsValue[newIndex]) {
    const tempMembers = value[get(activeProjectIndex)].members;
    const tempTasks = projectsValue[newIndex].tasks;
    const nonCompletedTasks = tempTasks ? tempTasks.filter(task => !task.completed) : 0;
    tasks.set(nonCompletedTasks.length ? tempTasks : []);
    members.set(tempMembers.length ? tempMembers : []);
    totalTasks.set(nonCompletedTasks.length || 0);
  }
})