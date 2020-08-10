import React from 'react';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px',
  mobile: '600px',
});

const TodoTemplateBlock = styled.div`
  width: 40%;
  height: 90vh;
  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  ${customMedia.lessThan('tablet')`
   width: 90%;
  `}
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
