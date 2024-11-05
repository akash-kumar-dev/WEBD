# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Problem with context API?
Doesn't fix re-rendering, only fixes prop drilling

### State Management using Recoil

#### State Management
- A cleaner way to manage state in React.
- Until now, the cleanest thing for this is Context API.
- But there are better solutions that get rid of the problems that Context API has (unnecessary re-renders).

#### Recoil
- A state management library for React written by some ex Reacts folks.
- other popular ones - Redux, Zustand
- has a concept of an atom to store the state.
- An Atom can be define outside the component.
- can be teleported to any component.

```
npm i recoil
```

RecoilRoot, atom, useRecoilState, useRecoilValue, useSetRecoilState, selector

- selector: A selector represents a piece of derieved state. It can compute derived state based on other atoms/selectors.