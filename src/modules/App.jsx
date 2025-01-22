import React, { useState } from 'react';
import '../../public/css/App.css';

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
      if (history.length >= maxNum - minNum + 1) {
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

  const resetHistory = () => {
    setHistory([]);
    setResult(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Sorteador de números</h1>
        <p>IASD de Araçás</p>
      </header>
      <main>
        <div className="inputs-container">
          <label>
            <span>Sortear entre:</span>
            <input
              type="number"
              placeholder="Mín"
              value={min}
              onChange={handleMinChange}
            />
            <input
              type="number"
              placeholder="Máx"
              value={max}
              onChange={handleMaxChange}
            />
          </label>
        </div>
        {result !== null && (
  <div className="result-container">
    <span className="result">{result}</span>
  </div>
        )}
        <div className="buttons-container">
          <button className="sort-button" onClick={sortearNumero}>
            Sortear
          </button>
          <button className="reset-button" onClick={resetHistory}>
            ⟳
          </button>
        </div>
        {history.length > 0 && (
          <div className="history-container">
            {history.map((num, index) => (
              <span key={index} className="history-item">
                {num}
              </span>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
