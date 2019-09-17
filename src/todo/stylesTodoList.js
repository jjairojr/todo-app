import styled from "styled-components";

export const Grid = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Description = styled.div`
  border: 2px solid white;
  height: 100%;
  min-height: 70px;
  width: 50%;
  margin: 0px 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: bolder;
  padding: 5px;
  transition: 2s ease-in-out;
  justify-content: space-between;
  position: relative;
`;

export const Date = styled.div`
  position: absolute;
  top: 7px;
  right: 10px;
  font-size: 12px;
  color: whitesmoke;
  font-weight: bolder;
`