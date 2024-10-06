import { useMemo } from 'react';
import { Todo } from '../../../../types/Todo';
import TodoItem from '../TodoItem/TodoItem';

interface ITodoLists {
  todos: Todo[];
  loading: boolean;
}

// Test cases
// 1. skeleton is shown while loading
// 2. should show no todos if no todos

const TodoLists: React.FC<ITodoLists> = ({ todos }) => {
  const pendingTodos = useMemo(() => todos.filter(todo => !todo.isCompleted), [todos]);

  const completedTodos = useMemo(() => todos.filter(todo => todo.isCompleted), [todos]);
  // TODO:- show a skeleton while loading
  return (
    <>
      <h1 className='font-bold text-gray-700 text-xl self-start my-4'>Pending</h1>
      {pendingTodos.length === 0 ? (
        <p>No Pending tasks 🥳</p>
      ) : (
        pendingTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}

      <h1 className='font-bold text-gray-700 text-xl self-start my-4'>Completed</h1>

      {completedTodos.length === 0 ? (
        <p>No Completed tasks </p>
      ) : (
        completedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
    </>
  );
};

export default TodoLists;
