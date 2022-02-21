import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    const characters = [
      {
        name: jonh,
        job: Smithery
      },
      {
        name: 'Clyde',
        job: 'Carpenter'
      },
      {
        name: 'Wanda',
        job: 'Engineer'
      },
      {
        name: 'Claudia',
        job: 'Manager'
      }
    ];

    return (
      <div className = "container" >
        <Table characters={characters}/>
      </div>
    )
  }
}
   
export default App;
