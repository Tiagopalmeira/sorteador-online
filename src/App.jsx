import React, { useState } from 'react';
import './App.css';

function App() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleMinChange = (e) => setMin(e.target.value);
  const handleMaxChange = (e) => setMax(e.target.value);

  const sortearNumero = () => {
    const minNum = parseInt(min, 10);
    const maxNum = parseInt(max, 10);

    if (minNum <= maxNum) {
      if (history.length >= (maxNum - minNum + 1)) {
        alert("Todos os números do intervalo já foram sorteados.");
        return;
      }

      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      } while (history.includes(randomNum));

      setHistory([...history, randomNum]);
      setResult(randomNum);
    } else {
      alert("O valor mínimo deve ser menor ou igual ao valor máximo.");
    }
  };

  return (
    <div className="App">
      <h1>Sorteio de Números</h1>
      <div>
        <label>
          Número Mínimo:
          <input type="number" value={min} onChange={handleMinChange} />
        </label>
      </div>
      <div>
        <label>
          Número Máximo:
          <input type="number" value={max} onChange={handleMaxChange} />
        </label>
      </div>
      <button onClick={sortearNumero}>Sortear</button>
      {result !== null && <h2 className="resultado">{result}</h2>}
      {history.length > 0 && (
        <div>
          <h3>Histórico de Números Sorteados:</h3>
          <p>{history.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;
