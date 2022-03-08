import React from 'react'
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = props => {
    const { characters, removeCharacter } = props;

    return (
        <table>
            <TableHeader />
            <TableBody />
            characters={characters}
            removeCharacter={characters}
      </table>  
    );
}


export default Table;