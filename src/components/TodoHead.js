import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3.5rem;
    color: #20c997;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 100;
  }
  .day {
    color: #20c997;
    font-size: 1rem;
    font-weight: 400;
    margin-top: -40px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  .tasks-left {
    color: #20c997;
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 10px;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadBlock>
      <h1>Todo</h1>
      <div className="day">
        {dateString} {dayName}
      </div>
      <div className="tasks-left">
        " 할 일이 {undoneTasks.length} 개 남았습니다. "
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
