import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';
import { useTodoSelect } from '../TodoContext';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '960px',
  smTablet: '740px',
  mobile: '600px',
});

const TodoListBlock = styled.div`
  width: 60%;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  overflow-y: auto;
  ${customMedia.lessThan('tablet')`
   width: 90%;
  `}
`;

function TodoList() {
  const todos = useTodoState();
  const [mode] = useTodoSelect();
  switch (mode) {
    case 'ALL':
      return (
        <TodoListBlock>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
            />
          ))}
        </TodoListBlock>
      );
    case 'TODO':
      return (
        <TodoListBlock>
          {todos.map((todo) => {
            if (todo.done === false) {
              return (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  done={todo.done}
                />
              );
            } else {
              return '';
            }
          })}
        </TodoListBlock>
      );
    case 'DONE':
      return (
        <TodoListBlock>
          {todos.map((todo) => {
            if (todo.done === true) {
              return (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  done={todo.done}
                />
              );
            } else {
              return '';
            }
          })}
        </TodoListBlock>
      );
    default:
      throw new Error(`Unhandled mode: ${mode}`);
  }
}

export default TodoList;
