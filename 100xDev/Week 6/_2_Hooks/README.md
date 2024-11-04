# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Side Effect
In React, the concept of side effects refers to any operation or action that occurs outside the scope of a component's rendering process. These side effects can include tasks such as making API calls, updating the DOM, or interacting with external systems.
- setTimeout
- setInterval
- fetch
- document.getElementById("").innerHTML = "Hello World"

# Hooks
Hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class. Hooks are functions that let you "hook into" React state and lifecycle features from function components.
useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue

### useState
`useState` is a hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. 
this hook describes the state of your component and it triggers a re-render when the state changes which finally updates the DOM.

### useEffect
The `useEffect` hook is a features in React, a popular JavaScript library for building user interfaces. It allows you to perform side effects in your components, such as fetching data from an API, subscribing to events, or updating the DOM.
The `useEffect` hooks serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class-based components.

### useMemo
The `useMemo` hook is a feature in React that allows you to memoize a value so that it only gets recomputed when one of its dependencies changes. This can be useful when you have a computationally expensive calculation that you don't want to perform on every render.

### useCallback
The `useCallback` hook is a feature in React that allows you to memoize a function so that it only changes if one of its dependencies changes. This can be useful when you want to pass a function as a prop to a child component and you want to avoid unnecessary re-renders of the child component.
