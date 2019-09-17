import React from "react";
import { Grid, Description, Date } from "./stylesTodoList";
import { Button } from "./stylesTodoForm";

const TodoList = props => {
  const formatDate = (date, separator) => {
    const total = date.split(separator, 3)
    return total[0];
  }
  let separator = "T";

  return (
    <>
      <Grid>
        <Description>{props.description}
        <Date>{formatDate(props.date, separator)}</Date>
        </Description>
        <Button color="#81ecec">+</Button>
        <Button color="#ff7675">x</Button>
        <Button color="#FFC312">-</Button>
      </Grid>
      </>
  );
};

export default TodoList;
