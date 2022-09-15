// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#000000')
  const [intervalo, setIntervalo] = useState(0);

  const obtenerColorAleatorio = () => {   
    const hex = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    return setColor(hex)    
  }

  const cambiarColor = () => {
    return setIntervalo(setInterval(obtenerColorAleatorio, 500))

  }

  const detenerCambio = () => {
    return clearInterval(intervalo);
  }

  const cambiarConClick = () => {
    return clearInterval(intervalo);

  }
  return (
    <div className="App">
      <div style={{ width: '255px', height: '255px', backgroundColor: color }} id='cuadrado' onMouseOver={cambiarColor} onMouseLeave={detenerCambio} onDoubleClick={cambiarConClick}>
        <p style={{color:'white', fontWeight:'bold' }}>{color}</p>
      </div>
    </div>
  );
}

export default App;
