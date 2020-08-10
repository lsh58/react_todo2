import React, { useRef } from 'react';
import styled from 'styled-components';
import { useTodoSelect } from '../TodoContext';

const TodoSelectBlock = styled.div`
  width: 100%;
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

  const [mode, setMode] = useTodoSelect();

  function selectToggle(e) {
    e.preventDefault();
    for (var i = 0; i < selectBox.current.children.length; i++) {
      selectBox.current.children[i].classList.remove('select');
    }
    e.target.classList.add('select');
    console.log(mode);
  }

  const selectALL = (e) => {
    setMode('ALL');
    selectToggle(e);
  };
  const selectTODO = (e) => {
    setMode('TODO');
    selectToggle(e);
  };
  const selectDONE = (e) => {
    setMode('DONE');
    selectToggle(e);
  };

  return (
    <TodoSelectBlock ref={selectBox}>
      <span className="select" onClick={selectALL}>
        전체목록
      </span>
      <span onClick={selectTODO}>남은목록</span>
      <span onClick={selectDONE}>완료목록</span>
    </TodoSelectBlock>
  );
}

export default TodoSelect;
