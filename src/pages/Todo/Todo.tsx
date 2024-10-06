import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoLists from './components/TodoLists/TodoList';
import { useTodo } from './hooks/useTodo';

// unit test cases for this component
// 1. form should be visible when clicking on the plus button
// 2. form should disappear when clicking on the close button

// integration test cases for this component
// 1. when a todo is added, it should appear in the pending list
// 2. when a todo is deleted, it should be removed from the completed list
// 3. when a todo is completed, it should be moved to the completed list

const Todo: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { todos } = useTodo();
  return (
    <div className='p-5 h-auto w-11/12 md:w-[450px]  shadow-md rounded-md m-auto border-2 border-gray-400 flex flex-col items-center justify-start mt-[100px] mb-20'>
      <div className='flex justify-between items-center mb-7 w-full'>
        <h1 className='font-bold text-gray-700 text-2xl'>Your todos</h1>
        <button
          className={`rounded-full ${
            isFormVisible ? 'bg-red-500' : 'bg-green-500'
          }  w-12 h-12 flex items-start justify-center hover:scale-105 shadow-md hover:shadow-lg`}
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <span className='text-4xl text-white font-bold '>
            {isFormVisible ? <>&#xd7;</> : <>&#43;</>}
          </span>
        </button>
      </div>
      {isFormVisible ? <AddTodo /> : null}
      <TodoLists todos={todos} />
    </div>
  );
};

export default Todo;
