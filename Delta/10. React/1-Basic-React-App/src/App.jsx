import './App.css';
import Title from './Title.jsx';
import ProductTab from './ProductTab.jsx';

function Description() {
  return <h3>hi i am Description</h3>;
}

function App() {
  return (
    <div>
      <Title />
      <Description></Description>
      <ProductTab />
    </div>
  );
}

export default App
