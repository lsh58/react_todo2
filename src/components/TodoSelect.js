import React from 'react';
import styled from 'styled-components';

const TodoSelectBlock = styled.div`
  width: 60%;
  margin: 15px auto; /* 페이지 중앙에 나타나도록 설정 */
  display: flex;
  align-items: center;
  padding-left: 10px;
  span {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    font-weight: 100;
    margin-right: 10px;
    color: white;
  }
`;

function TodoSelect() {
  return (
    <TodoSelectBlock>
      <span>ALL</span>
      <span>Todo</span>
      <span>Done</span>
    </TodoSelectBlock>
  );
}

export default TodoSelect;
