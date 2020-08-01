import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3.5rem;
    color: #20c997;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 100;
  }
  .tasks-left {
    color: #20c997;
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: -30px;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>Todo</h1>
      <div className="tasks-left">" You have 2 todos more! "</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
