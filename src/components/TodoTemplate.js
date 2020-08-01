import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 80%;
  min-width: 512px;
  height: 90vh;
  min-height: 638px;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
