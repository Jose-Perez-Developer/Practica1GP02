import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo] = useState({})
    const [cant, setCantidad] = useState({})
    const [todos, setTodos] = useState([

    ])

    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleChangeCantidad = e => setCantidad({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
            alert('el campo no puede estar vacio')
            return
        }

        
        else if(Object.keys(cant).length === 0 || cant.cant.trim() === ''){
            alert('el campo no puede estar vacio')
            return
        }


        var unidos = cant . todo;

        setTodos([...todos, todo])

    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>                
                <label htmlFor="">Agregar compra</label><br />
                <input type="text" name="todo" onChange={handleChange} />
                <br />
                <input type="text" name="cantidad" onChange={handleChangeCantidad}/>
                <button onClick={handleClick}>agregar</button>
            </form>

            {
                todos.map((value, index)=> (<Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} />))
            }
        </>
    )
}
export default Form