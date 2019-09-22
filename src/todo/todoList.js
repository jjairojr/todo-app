import React from "react";
import { Grid, Description, Date } from "./stylesTodoList";
import { Button } from "./stylesTodoForm";
import axios from 'axios'

const TodoList = props => {
  const formatDate = (date, separator) => {
    const total = date.split(separator, 3)
    return total[0];
  }
  let separator = "T";

  let deleteTodo = async () => {
    let idDeleted = props.id
    const res = await axios.delete(`http://localhost:3001/api/todos/${idDeleted}`);
  }

  return (
    <>
      <Grid>
        <Description>{props.description}
        <Date>{formatDate(props.date, separator)}</Date>
        </Description>
        <Button onClick={deleteTodo} color="#ff7675">x</Button>
      </Grid>
      </>
  );
};

export default TodoList;
