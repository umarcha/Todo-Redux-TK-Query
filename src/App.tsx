import AddTodo from "./components/AddTodo";
import TodoCard from "./components/TodoCard";
import { Todo } from "./types";
import Loader from "./components/Loader";
import { useGetTodoQuery } from "./services/todo";

function App() {

  const { data, isLoading: isLoadingData, refetch } = useGetTodoQuery();

  return (
    <main className="max-w-4xl mx-auto px-5">
      <AddTodo refetch={refetch} />
      <div className="relative">
        <div className="grid grid-cols-2 gap-4 mt-12 place-content-start h-[424px] overflow-y-auto p-2" id="scrollbar">
          {data?.todos?.map((item: Todo, index: number) => <TodoCard key={index} item={item} refetch={refetch} />)}
          {isLoadingData && <Loader />}
        </div>
      </div>
    </main>
  )
}

export default App
