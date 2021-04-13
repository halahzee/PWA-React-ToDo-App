//we need to get what ever we type in the input and save it in to a state.


import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //useState for the textInput value to set it in a state. and the function setInputText that allow change the inputText value and update it. and this state will reset every time we hit submit. 


//state 
  const [inputText, setInputText] = useState ("");
  //store todos in another state. will be an array.
  const [todos, setTodos]= useState([]);
  const [status, setStatus] = useState ("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  //Run Once when the app start
useEffect (()=> {

getLocalTodos();
}, []);


//use Effect
  useEffect (()=> {

    filterHandler();
    saveLocalTodos();

  }, [todos, status]);



//functions
const filterHandler = () => {
  switch(status) {
  case "completed":
    setFilteredTodos(todos.filter(todo => todo.completed === true));
  break;

  case "uncompleted":
    setFilteredTodos(todos.filter(todo => todo.completed === false));
    break;
    default:
      setFilteredTodos(todos);
      break;
  }
};

//save to local 

const saveLocalTodos = () => {
  
    localStorage.setItem("todos", JSON.stringify(todos));


};

const getLocalTodos = () => {
  if (localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));

  }else {
   let todoLocal =  JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  
  }


};

  return (
    <div className="App">
      <header>
     <h1>Todo List</h1>
     </header>
     <Form 
     inputText={inputText} 
     todos={todos} 
     setTodos={setTodos} 
     setInputText={setInputText}
     setStatus ={setStatus}
     />
     <TodoList 
     
     setTodos={setTodos} 
     todos={todos}
     filteredTodos={filteredTodos}
     
     />
    </div>
  );
}

export default App;
