import React from 'react';



const Form = ({setInputText, setTodos, todos, inputText, setStatus}) => {
// Here we will write javascript function.

const inputTextHandler = (e) => {
  console.log(e.target.value);
  setInputText(e.target.value);
};


//this event (e) will give info about what been enter in the input. 
const submitTodoHandler = (e) => { 
//this will prevent the page form refreshing. to keep the input value.
  e.preventDefault();
  setTodos([
    ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
  ]);
  setInputText(" ");
};

const statusHandler = (e) => {
  setStatus(e.target.value);

}

return(
  //add onChange function to the input will fire the event that we create in the const. and gives update about whats been input
    <form>
  
      <input value={inputText} placeholder="add tasks....." onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler}  className="todo-button aria-label=left Align" type="submit" name="button" >
        <i className="fas fa-plus-circle"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
);

}

export default Form; 


//1. after create a onChange function now we need to go to the useState and pass the setInputText function in the form thats mean this function will update what ever been there in the inputText (the data we need to put inside the Set Func.).
//2. now after we add the setInputText sate function in the form, we can access it from the form app, by passing it inside the form {setInputText}. Now we can pass the information of the setInputText in the e target.
//3. now we have teh setInputText the piece of state that we can use it in any place in the app.
//4. now we will pass the state to do list that we can show whats inside the input.
//5. Heading to the App, we need to create another state that will store the todos. 