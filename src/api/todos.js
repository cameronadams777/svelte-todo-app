import { get, post, del, put } from './utils/http.js';

export const getProjects = ({ guid }) => {
  return get({ endpoint: `todos/${guid}` })
}

export const createNewProject = ({ guid, payload }) => {
  return post({ endpoint: `todos/${guid}`, payload })
}

export const updateProjects = ({ guid, payload }) => {
  return put({ endpoint: `todos/${guid}`, payload })
}

export const deleteProject = ({ guid, itemId }) => {
  return del({ endpoint: `todos/${guid}/${itemId}` })
}