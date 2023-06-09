import { useState } from 'react'
import { useAddTodoMutation } from '../services/todo';
import { AddTodoPropsIF } from '../types';

const AddTodo = ({ refetch }: AddTodoPropsIF) => {

  const [todo, setTodo] = useState("");

  const [addTodo, { isLoading }] = useAddTodoMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await addTodo(todo)
    refetch()
    setTodo("")
  }

  return (
    <div className="px-6 py-8 shadow-lg rounded-xl w-full max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <input type="text" className="block outline-none border border-gray-400 rounded h-9 w-full px-2"
          onChange={(e) => setTodo(e.target.value)}
          required
          value={todo}
        />
        <button type="submit" disabled={isLoading}
          className="mt-4 px-4 py-2 block mx-auto w-fit rounded font-semibold text-base leading-5 text-white bg-teal-600">
          {isLoading ? " Loading..." : "Add Todo"}
        </button>
      </form>
    </div>
  )
}

export default AddTodo
