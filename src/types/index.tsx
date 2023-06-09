
export interface Todo {
  title: string;
  status: boolean;
  _id: string;
}

export interface TodoIF {
  todos: Todo[]
}

export interface AddTodoPropsIF {
  refetch: () => Promise<unknown>;
}

export interface StatusIF {
  id: string,
  status: boolean
}

export interface TodoCardProps {
  item: Todo;
  refetch: () => Promise<unknown>;
}