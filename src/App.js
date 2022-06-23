import Headers from "./components/header";
import Form from "./components/form";
import List from "./components/list";
import React, {useState} from "react";

function App() {
  const [todo, setTodo] = useState([{id:0, todo:"this is a simple task"}]);

  return (
    <div className="App">
      <Headers />
      <Form setTodo={setTodo} Len={todo.length} />
      <List todoList={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
