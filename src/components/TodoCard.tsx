import { useDeleteTodoMutation, useUpdateStatusMutation } from "../services/todo";
import { TodoCardProps } from "../types";

const TodoCard = ({ item, refetch }: TodoCardProps) => {

  const [deleteTodo, { isLoading }] = useDeleteTodoMutation()
  const [updateStatus, { isLoading: updateLoading }] = useUpdateStatusMutation()

  // Update the Status When user click on checkbox
  const handleUpdateStatus = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked;
    await updateStatus({ id: item._id, status: status })
    refetch()
  }


  // Delete the TodoCard when user click on Delete_Button
  const handleDelete = async () => {
    await deleteTodo(item._id)
    refetch()
  }

  return (
    <div className="px-4 py-6 rounded-md bg-white shadow-md">
      <div className="flex gap-3 justify-between items-center">
        <h5 className={`${item.status && 'line-through text-gray-400'} truncate`}>{item.title}</h5>
        <input type="checkbox" checked={item.status} className="cursor-pointer"
          onChange={handleUpdateStatus}
          disabled={isLoading || updateLoading}
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          disabled={isLoading || updateLoading}
          onClick={handleDelete}
          className={`bg-red-600 rounded-md px-3 py-2 text-xs text-white ${updateLoading && "bg-teal-600"}`}>
          {isLoading ? "Deleting" : updateLoading ? "Updating" : "Delete"}
        </button>
      </div>
    </div>
  )
}

export default TodoCard