import React, {useState, useEffect} from "react";
import { Grid, TodoForm, TodoList, Button } from "./stylesTodoForm";
import axios from 'axios';

// import { Container } from './styles';

const Todo = () => {
  const [input, setInput] = useState("");
  
  let postTodo = async () => {
    const res = await axios.post('http://localhost:3001/api/todos/', {description: input});
  }


  return (
  <>
    <Grid>
      <TodoForm>
       <h1 style={{textAlign: "center"}}>TodoList</h1>
        <TodoList>

          {input !== "" ? <input
            onInput={(e) => setInput(e.target.value)}
            style={{
              justifyContent: "center",
              width: "80%",
              height: "40px",
              background: "#f5f6fa",
              border: "none",
              borderRadius: "15px",
              color: "#9c88ff",
              paddingLeft: "15px"
            }}
            type="text"
            /> : <input
            onInput={(e) => setInput(e.target.value)}
            style={{
              width: "80%",
              height: "40px",
              background: "#f5f6fa",
              border: "2px solid #ff7979",
              borderRadius: "15px",
              color: "#9c88ff",
              paddingLeft: "15px"

            }}
            type="text"
          />
          }
          <Button onClick={postTodo} color="#81ecec">+</Button>
        </TodoList>
      </TodoForm>
    </Grid>
  </>
  )};

export default Todo;
