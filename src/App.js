import React from 'react';
var data = require('./db.json');

function App() {
  let jsonstr = JSON.stringify(data);
  console.log(jsonstr);
  return (
    <div className="App">
           {jsonstr}
    </div>
  );
}

export default App;
