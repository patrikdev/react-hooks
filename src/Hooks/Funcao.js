import React, {useState, useEffect} from 'react';

export default function Funcao() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, []);

  function onCountClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Você clicou {count} times</p>
      <button onClick={onCountClick}>
        Clicke me
      </button>
    </div>
  );
}

