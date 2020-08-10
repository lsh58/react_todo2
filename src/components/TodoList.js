import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';
import { useTodoSelect } from '../TodoContext';

const TodoListBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 50vh;
  background: white;
  border-radius: 5px;
  overflow-y: auto;
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
