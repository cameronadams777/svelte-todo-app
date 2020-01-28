# Svelte Todo-App

This is a simple application built with [SvelteJS]('https://svelte.dev') for learning purposes.

## Todos 

This application is meant to be used with the todo service that I have created [here]('https://gitlab.com/cameronadams777/todo-service'). 

All logic pertaining to the todos should stay confined to the todos svelte store which makes the functionality easier to test and makes the functionality usable across the app.

## Styling

Our application utilizes SCSS which ultimately compiles down to standard CSS. For code cleanliness, please make sure that all variables that are specific to a component (i.e. `color`, `background-color`, etc.) are defined as SCSS variables rather than just utilizing standard CSS. This makes understanding somethings purpose much easier and makes things more usable across the app 🙂

### Global CSS

Nothing other than the things that are already defined in the `global.css` file should be place there. If you have CSS that needs to be defined globally across the app, it can be defined in the `app.svelte` file as part of the `.app` class.

## Theme Support

This was my first real attempt at theming an app. Other than not utilizing "dark" and "light" theme variables, I think it worked out pretty nice. Need to explore options that don't require defining different classes for every component.