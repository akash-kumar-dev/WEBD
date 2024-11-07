import { atomFamily } from "recoil";
import { TODOS } from "./todos";

// Atom Family
// Creates a family of atoms that share similar behavior but have unique states based on parameters

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});
