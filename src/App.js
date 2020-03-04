import React, {useState, useEffect} from 'react';

function App() {
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

export default App;
