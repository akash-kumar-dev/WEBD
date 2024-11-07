# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## SelectorFamily
Returs a functions that returs a read-only `RecoilValueReadOnly` or writetable `RecoilState` selector.
A `SelectorFamily` is a powerful pattern that is similar to a `selector`, but allows you to pass parameters to the `get` and `set` callbacks of a `selector`.

## useRecoilStateLoadable
A hook that returns the current state of a `RecoilValue` and a function to set it.
we can use it to load data from an API and in wait for it to load, we can show a loading indicator.
for this we can also use `<Suspense>` component.
