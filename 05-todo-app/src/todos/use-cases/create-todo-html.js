import { Todo } from "../models/todo.model";

export const createTodoHtml = (todo) => {
    if (!todo) throw new Error("Todo is required");

    const html =
        `<li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li>`;
    
};