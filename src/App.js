import React from 'react';

function App() {
  const getSms = () => {
    fetch('https://twilio-quote-generator-node.herokuapp.com/quote');
  };

  return (
    <div className="App">
      <button onClick={getSms}>SEND TEXT!!!</button>
    </div>
  );
}

export default App;
