import './App.css';
import Title from './Title.jsx';
import ProductTab from './ProductTab.jsx';
import Button from './Button.jsx';

function Description() {
  return <h3>hi i am Description</h3>;
}

function App() {
  return (
    <div>
      <Title />
      <Description></Description>
      <ProductTab />
      <Button />
    </div>
  );
}

export default App
