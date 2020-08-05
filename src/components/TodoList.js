import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';
import { useTodoSelect } from '../TodoContext';

const TodoListBlock = styled.div`
  width: 60%;
  min-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  padding-bottom: 18px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  const [mode, setMode] = useTodoSelect();
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
            }
          })}
        </TodoListBlock>
      );
    default:
      throw new Error(`Unhandled mode: ${mode}`);
  }
}

export default TodoList;
