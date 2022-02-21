import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App>,document.getElementById('root')</App>)//Renderiza este compponente en este elemento de HTML.