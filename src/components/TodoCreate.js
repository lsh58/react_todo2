import React from 'react';
import styled from 'styled-components';

const InsertFormPositioner = styled.div`
  width: 60%;
  min-width: 500px;
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
  return (
    <>
      <InsertFormPositioner>
        <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
      </InsertFormPositioner>
    </>
  );
}

export default TodoCreate;
