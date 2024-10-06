import { useState } from 'react';
import Spinner from '../../../../components/Spinner/Spinner';
import { useTodo } from '../../hooks/useTodo';

// unit test cases for this component
// 1. when add button is clicked,
// 1.1 textarea should be disabled and be enabled after adding
// 1.2 button should be disabled and be enabled after adding
// 1.3 a spinner should be shown and it should dissappear after adding
// 1.4 a success message should be shown if the operation is success
// 1.5 an error message should be shown if the operation is failure

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState('');
  const { isAdding, addTodo } = useTodo();

  return (
    <>
      <textarea
        disabled={isAdding}
        onChange={e => setTitle(e.target.value)}
        value={title}
        className='w-full border-2 border-gray-400 rounded-md p-3 font-bold mb-4 shadow-md'
      ></textarea>
      <div className='flex items-start w-full justify-between'>
        {/* <p className={`${statusMsg.type == 'error' ? 'text-red-600' : 'text-green-500'} font-bold`}>
          {!statusMsg.empty && statusMsg.msg}
        </p> */}
        <button
          onClick={() => addTodo({ title, isCompleted: false, id: Date.now().toString() })}
          disabled={isAdding}
          className='bg-green-500 h-[50px] font-bold text-white rounded-md shadow-md hover:scale-105 mb-4 text-base disabled:cursor-not-allowed w-[100px] flex items-center justify-center hover:shadow-lg'
        >
          <span className='text-lg'>ADD</span>
          {isAdding ? (
            <span className='text-4xl ml-3 '>
              <Spinner />
            </span>
          ) : (
            <span className='text-4xl ml-3 pb-2'>&#43;</span>
          )}
        </button>
      </div>
    </>
  );
};

export default AddTodo;
