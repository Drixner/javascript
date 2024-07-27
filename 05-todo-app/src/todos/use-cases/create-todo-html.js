import { Todo } from "../models/todo.model";

export const createTodoHtml = (todo) => {
    if (!todo) throw new Error("Todo is required");
}