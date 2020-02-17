import { get, writable } from 'svelte/store'

export const theme = writable('light')
export const error = writable('')
export const activeProjectDetailTab = writable('tasks')
export const displayAddProjectModal = writable(false)
export const displayAddTaskModal = writable(false)


export const updateTheme = () => {
  const themeVar = get(theme)
  if (themeVar === 'light') theme.set('dark')
  else theme.set('light')
}

export const updateError = (errorMessage) => {
  setTimeout(() => {
    error.set({
      visible: true,
      value: errorMessage
    })
    setTimeout(() => {
      error.set({
        visible: false,
        value: ''
      })
    }, 2500);
  }, 10);
}

export const clearError = () => {
  error.set({
    visible: false,
    value: ''
  })
}

export const updateActiveProjectDetailTab = (newValue) => activeProjectDetailTab.set(newValue)
export const updateDisplayAddProjectModal = (newValue) => displayAddProjectModal.set(newValue)
export const updateDisplayAddTaskModal = (newValue) => displayAddTaskModal.set(newValue)