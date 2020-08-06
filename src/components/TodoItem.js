import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { BsFillSquareFill } from 'react-icons/bs';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: #212529;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  width: 100%;
  background: none;
  margin: 0 auto 5px;
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const CheckCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 1px solid #212529;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 15px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #20c997;
      color: #20c997;
    `}
`;
const TextForm = styled.form`
  flex: 1;
`;

const Text = styled.input`
  width: 100%;
  flex: 1;
  font-size: 1rem;
  font-weight: bold;
  color: #212529;
  outline-style: none;
  border: none;
  ${(props) =>
    props.done &&
    css`
      color: #adb5bd;
    `}
`;

function TodoItem({ id, done, text }) {
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);
  const [isChange, setIsChange] = useState(false);
  const editMode = (e) => {
    e.preventDefault();
    setIsChange(true);
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'EDIT',
      id,
      value,
    });
    setIsChange(false);
    setValue('');
  };

  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <BsFillSquareFill />}
      </CheckCircle>
      {isChange === false ? (
        <Text done={done} value={text} onClick={editMode}></Text>
      ) : (
        <TextForm onSubmit={onSubmit}>
          <Text autoFocus done={done} value={value} onChange={onChange}></Text>
        </TextForm>
      )}
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
