import React,{useState} from 'react';
import TodoList from  './TodoList'

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])

  function handleAddTodo(e){
    
  }

  return(
    
  <>
  <TodoList todos={todos} />
  <input type="text" />
  <button onClick={handleAddTodo}>Add Task</button>
  <button>Clear Complete</button>
  <div>0 left to do</div>

  </>
    
  ) 
  
}


export default App;
