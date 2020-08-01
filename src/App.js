import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoSelect from './components/TodoSelect';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #333333;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoCreate />
        <TodoSelect />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
