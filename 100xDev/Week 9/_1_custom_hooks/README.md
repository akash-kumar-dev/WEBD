# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## custom Hooks

*Hooks:* Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

### custom Hooks
- `Hooks` that you create yourself, so other people can use them are called `custom Hooks`.
- A `custom Hook` is a JavaScript function whose name starts with `use` and that may call other `Hooks` (`useState`, `useEffect`, another `custom Hook`).

A few good examples of `custom Hooks` are:
1. data fetching hooks
2. Browser functionality related hooks - useOnlineStatus, useWindowSize, useMousePosition
3. performance/Timer based - useInterval, useDebounce

#### useIsOnline hook
`Window.navigator.onLine` returns true or false based on whether the user is online or offline

#### useMousePosition hook
`window.addEventListener('mousemove', handleMouseMove)` will trigger the `handleMouseMove` function every time the mouse moves.

#### Performance/Timer based custom Hooks
- `useInterval` - executes a function at a given interval
- `useDebounce` - delays the execution of a function until a certain amount of time has passed