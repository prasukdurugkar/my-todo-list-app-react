import { useState } from 'react';
import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoListData from './data/TodoListData'
function App() {
  const [todos, setTodos] = useState(TodoListData);
  return (
     
        <>
          <Header />  
          <TodoList todo={todos} />
        </>
    )
}

export default App
