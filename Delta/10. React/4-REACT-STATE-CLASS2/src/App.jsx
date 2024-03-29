import './App.css'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import Lottery from './Lottery.jsx'
import { sum } from './LotetryHelper.js'

function App() {

  let winCondition = (ticket) => {
    // return sum(ticket) === 15;
    return ticket.every((num) => num === ticket[0]);
  };

  return (
    <>
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
