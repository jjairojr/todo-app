import styled, { css } from "styled-components";

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* background: red; */
`;

export const TodoForm = styled.div`

  margin: 50px 0px;
  color: white;
  text-align: left;
  width: 70%;
  /* background: blue; */
`;

export const TodoList = styled.div`
  /* background: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  text-align: left;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background: transparent;
  border: 2px solid white;
  border-radius: 100%;
  color: white;
  margin: 0px 20px;
  font-size: 20px;
  cursor: pointer;

  /* ${props =>
    props.remove &&
    css`
      &:hover {
        color: #ff7675;
        border: 2px solid #ff7675;
      }
    `} */

  &:hover {
    color: ${props => props.color};
    border: 2px solid ${props => props.color};
    font-weight: bolder;
    height: 35px;
    width: 35px;
    transition: 200ms ease-in-out;
    font-size: 30px;
  }
`;
