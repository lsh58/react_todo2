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
    cursor: pointer;
    letter-spacing: 0.02rem;
  }
  span.select {
    padding: 1px 7px;
    background: #20c997;
    border-radius: 5px;
    color: #333333;
    font-weight: 400;
  }
`;

function TodoSelect() {
  return (
    <TodoSelectBlock>
      <span className="select">ALL</span>
      <span>TODO</span>
      <span>DONE</span>
    </TodoSelectBlock>
  );
}

export default TodoSelect;
