import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const InsertFormPositioner = styled.form`
  width: 100%;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  margin-top: 20px;
  outline: none;
  font-size: 1rem;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

function TodoCreate() {
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue('');
    nextId.current += 1;
  };

  return (
    <>
      <InsertFormPositioner onSubmit={onSubmit}>
        <Input
          autoFocus
          placeholder="할 일을 입력 후, Enter 를 누르세요"
          onChange={onChange}
          value={value}
        />
      </InsertFormPositioner>
    </>
  );
}

export default React.memo(TodoCreate);
