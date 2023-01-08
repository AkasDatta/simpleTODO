import { useState } from "react";


const Todo = () => {
    // //data bind .. useState ///hook

    // //array destructure


    const defoultTodos = [
        {
            id: 1,
            title: 'Setup development environment',
            completed: true
        },
        {
            id: 2,
            title: 'Learn React Js',
            completed: true
        },
        {
            id: 3,
            title: 'Learn express js',
            completed: true
        },
    ];

    const [todos, setTodos] = useState(defoultTodos);

    const [todo, setTodo] =useState(''); 
    // how to set value to usestate 2

    const handleTodoChange = (event) => {
        setTodo(event.target.value);
    };

    const handleSaveTodo = () => {
        const newTodo = {
            id: 4,
            title: todo,
            completed: true
        };
        
        setTodos([...todos, newTodo]);
        setTodo('');
      
    };

    const handleEnterKey = (event) => {
        if(event.key === 'Enter'){
            handleSaveTodo();
        }
    }
    
	const handleSwitch = (id) => {
		const currentTodoIndex = todos.findIndex((todo) => {
			return todo.id === id;
		});

		let currentTodo = todos[currentTodoIndex];
		currentTodo.completed = !currentTodo.completed;
		todos[currentTodoIndex] = currentTodo;

		setTodos([...todos]);
	};

    return(
        <>
            <br />
            <div className="fixed">
                <h1>Type anything:</h1>
                <input onKeyDown={handleEnterKey} type="text" value={todo} onChange={(event) => handleTodoChange(event)}></input>
                {/* how to take value from input 1 */}
                <button className='button' onClick={handleSaveTodo}>Save Todo</button>
            </div>
            <table border="2">
                <tbody >
                    <tr>
                        <th>SI No</th>
                        <th>TITLE</th>
                        <th>STATUS</th>
                    </tr>
                {todos.map((value, index) => {
                    return (
                        <div>
                            key={index}
                            onClick={() => handleSwitch(value, index)};
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.completed.toString()}</td>
                            </tr>
                        </div>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
export default Todo;