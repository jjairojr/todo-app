import React, {
  useState,
  useEffect
} from "react";
import Todo from "./todoForm";
import TodoList from "./todoList";
import axios from "axios";

// import { Container } from './styles';

const TodoMain = () => {
   const [todoList, setTodoList] = useState([]);

   useEffect(() => {
    ShowTodo();
  }, []);

    const ShowTodo = async () => {
    const res = await axios.get("http://localhost:3001/api/todos/");
    setTodoList(res.data);
  };

  console.log(todoList);
  return (
    <>
    <Todo/>
    {todoList.map((t) => <TodoList key={t._id.toString()} description={t.description} date={t.createdAt} />)}
    </>
  )
};


export default TodoMain;