import React, {useState, useEffect} from 'react';

export default function Funcao() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Clicke me
      </button>
    </div>
  );
}

