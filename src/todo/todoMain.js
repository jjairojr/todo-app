import React, {
  useState,
  useEffect
} from "react";
import Todo from "./todoForm";
import TodoList from "./todoList";
import axios from "axios";

import { Loading } from './styles.TodoMain'

const TodoMain = () => {
   const [todoList, setTodoList] = useState([]);

   useEffect(() => {
    ShowTodo();
  }, [todoList]);

  const ShowTodo = async () => {
  const res = await axios.get("http://localhost:3001/api/todos/");
  setTodoList(res.data);
   };
   
  return (
    <>
    <Todo/>
    {todoList.length === 0 ? <Loading></Loading> : <div>
      {todoList.map((t) => <TodoList key={t._id.toString()} description={t.description} date={t.createdAt} id={t._id} />)}
    </div>}
    </>
  )
};


export default TodoMain;