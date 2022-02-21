import React from 'react'
import TableBody from './TableBody';
import TableHeader from './TableHeader';



class Table extends React.Component {
    render() {
        const { characters } = this.props
    
        return (
            <div>
                <table>
                    <TableHeader></TableHeader>
                    <TableBody characters={characters}/>
                </table>
                <hr />
                <table>
                    <TableHeader></TableHeader>
                    <TableBody characters={characters}></TableBody>
                </table>
            </div>
        )
                
    }
                
}
export default Table;