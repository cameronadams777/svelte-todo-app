import { get, writable } from 'svelte/store'

export const theme = writable('dark')
export const error = writable('')

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