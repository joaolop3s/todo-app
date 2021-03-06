import React,{Component} from 'react'
import IconButton from '../template/iconButton'


export default props =>{

    const renderRows = () => {
        const list= props.list || []

        return list.map(todo =>(
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <IconButton style='danger' icon='trash-o' hide={!todo.done}
                    onClick={() => props.handleRemove(todo)}>

                </IconButton>

                <IconButton style='success' icon='check'  hide = {todo.done}
                    onClick={() => props.handleMarkAsDone(todo)}>

                </IconButton>

                <IconButton style='warning' icon='undo' hide = {!todo.done}
                    onClick={() => props.handleMarkAsPending(todo)}>

                </IconButton>
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descriçao</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>

        </table>


    )
    }