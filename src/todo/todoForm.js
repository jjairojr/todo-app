import React, {useState, useEffect} from "react";
import { Grid, TodoForm, TodoList, Button } from "./stylesTodoForm";

// import { Container } from './styles';

const Todo = () => {
  const [input, setInput] = useState("");

  console.log(input);
  

  return (
  <>
    <Grid>
      <TodoForm>
        <h1>TodoList</h1>
        <TodoList>
          <input
            onInput={(e) => setInput(e.target.value)}
            style={{
              width: "80%",
              height: "40px",
              background: "#f5f6fa",
              border: "none",
              borderRadius: "15px",
              color: "#9c88ff"
            }}
            type="text"
          />
          <Button color="#81ecec">+</Button>
          <Button color="#ff7675">x</Button>
        </TodoList>
      </TodoForm>
    </Grid>
  </>
  )};

export default Todo;
