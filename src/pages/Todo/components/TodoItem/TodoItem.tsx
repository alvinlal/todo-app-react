import { Todo } from '../../../../types/Todo';
import { useTodo } from '../../hooks/useTodo';

interface ITodoItem {
  todo: Todo;
}

// unit test cases for this component
// 1. pending todos
// 1.1 pending todos shouldn't be striked
// 1.2 pending todos should contain a mark as completed button and delete button
// 2. completed todos
// 2.1 completed todos should be striked
// 2.2 completed todos should only contain a delete button

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const { deleteTodo, markAsCompleted } = useTodo();

  return (
    <div className='border-2 border-gray-400 py-2 px-4 font-bold rounded-md shadow-md mb-4 flex items-center justify-between w-full'>
      {todo.isCompleted ? (
        <p className='w-4/5 text-gray-500 '>
          {' '}
          <s className='decoration-2'>
            <i>{todo.title}</i>
          </s>
        </p>
      ) : (
        <p className='w-4/5'>{todo.title}</p>
      )}

      <button
        className='rounded-full bg-red-500   w-6 h-6 flex items-start justify-center hover:scale-105 '
        onClick={() => deleteTodo(todo.id)}
      >
        <span className=' text-white font-extrabold '>{<>&#xd7;</>}</span>
      </button>
      {!todo.isCompleted ? (
        <button
          className='rounded-full bg-green-500 ml-3  w-6 h-6 flex items-start justify-center hover:scale-105 '
          onClick={() => {
            markAsCompleted(todo.id);
          }}
        >
          <span className=' text-white font-extrabold '>{<>&#10003;</>}</span>
        </button>
      ) : null}
    </div>
  );
};

export default TodoItem;
