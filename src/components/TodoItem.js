import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBox, MdDelete } from 'react-icons/md';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: #495057;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  width: 100%;
  background: none;
  margin: 0 auto 5px;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 3px;
  border: 1px solid #495057;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 15px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 1rem;
  font-weight: bold;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdCheckBox />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
