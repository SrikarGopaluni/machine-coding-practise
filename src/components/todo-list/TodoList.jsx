import { useState } from "react";

function TodoList() {
	const [text, setText] = useState("");
	const [todos, setTodos] = useState([]);

	const addTodo = () => {
		if (!text.trim()) return;

		setTodos((prev) => [
			...prev,
			{
				id: crypto.randomUUID(),
				text: text.trim(),
				completed: false,
			},
		]);

		setText("");
	};

	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const toggle = (id) => {
		setTodos((prev) =>
			prev.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			}),
		);
	};

	return (
		<div>
			{/* write code here */}
			<h1>Todo List</h1>

			<div>
				<input
					type="text"
					placeholder="Enter todo"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<button onClick={addTodo}>Add</button>
			</div>

			<ul>
				{todos.map((todo) => {
					return (
						<li key={todo.id}>
							<input
								type="checkbox"
								checked={todo.completed}
								onChange={() => toggle(todo.id)}
							/>
							{todo.completed ? <del>{todo.text}</del> : todo.text}
							<button onClick={() => deleteTodo(todo.id)}>Delete</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoList;
