import logo from './logo.svg';
import './App.css';
import React from 'react';
import Table from './Table';


class App extends React.Component {
  state = {
    characters : [
      {
        name: 'jonh',
        job: 'Smithery'
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
    ],
  };
  removerCharacter = i => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((char, j) => {
        return i !== j;
      }),
    });
  };
  
  addCharacter = character => {
    this.setState({
      characters: [...this.state.characters, character],
    })
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <Table
          characters={characters}
          removerCharacter={this.removerCharacter}
        />
        <Form addCharacter={ this.addCharacter  }/>
      </div>
    )
  }

}
   
export default App;
