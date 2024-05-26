import { useState } from 'react';
import './App.css';
import Content from './components/content/content';
import { Menu } from './components/header/menu';

function App() {
  const [numero, setNumero] = useState(0);

  const handleNumeroChange = (value: number) => {
    console.log(value);
    setNumero(value);
  };

  return (
    <div className='container_app'>
      <Menu onNumeroChange={handleNumeroChange} />
      <Content escolha ={numero}/>
    </div>
  );
}

export default App;
