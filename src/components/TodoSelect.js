import React, { useRef } from 'react';
import styled from 'styled-components';
import { useTodoSelect } from '../TodoContext';

const TodoSelectBlock = styled.div`
  width: 60%;
  margin: 15px auto; /* 페이지 중앙에 나타나도록 설정 */
  display: flex;
  align-items: center;
  padding-left: 10px;
  span {
    padding: 1px 7px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    margin-right: 10px;
    color: white;
    cursor: pointer;
    letter-spacing: 0.02rem;
  }
  span.select {
    background: #20c997;
    border-radius: 5px;
    color: #333333;
    font-weight: bold;
  }
`;

function TodoSelect() {
  const selectBox = useRef(null);

  // const onclick = (e) => {
  //   e.preventDefault();
  //   for (var i = 0; i < selectBox.current.children.length; i++) {
  //     selectBox.current.children[i].classList.remove('select');
  //   }
  //   e.target.classList.add('select');
  // };

  const [mode, setMode] = useTodoSelect();
  const selectALL = () => setMode('ALL');
  const selectTODO = () => setMode('TODO');
  const selectDONE = () => setMode('DONE');

  return (
    <TodoSelectBlock ref={selectBox}>
      <span className="select" onClick={selectALL}>
        ALL
      </span>
      <span onClick={selectTODO}>TODO</span>
      <span onClick={selectDONE}>DONE</span>
    </TodoSelectBlock>
  );
}

export default TodoSelect;
