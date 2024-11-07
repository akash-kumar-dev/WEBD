
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';

function App() {
  return <RecoilRoot>
    <Suspense fallback="loading...">
      <Todo id={1} />
      <Todo id={2} />
    </Suspense>
  </RecoilRoot>
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  // const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  // // now todo is a object with content and state
  // // todo = {content: '...', state: '...'}

  // if(todo.state === 'loading') {
  //   return 'loading...'
  // } else if(todo.state === 'hasValue') {
  //   // todo.contents is an object
  //   // todo.contents = {title: '...', description: '...'}
  //   return (
  //     <>
  //       {todo.contents.title}
  //       {todo.contents.description}
  //       <br />
  //     </>
  //   )
  // } else if(todo.state === 'hasError') {
  //   // todo.state === 'hasError'
  //   return 'error'

  // }

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
