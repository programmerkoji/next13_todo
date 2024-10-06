"use client";
import { addTodo } from "@/api";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
	const [taskTitle, setTaskTitle] = useState<string>("");
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault;
		await addTodo({
			id: uuidv4(),
			text: taskTitle,
		});
		setTaskTitle("");
	};
	return (
		<form className="mb-4 space-y-3" onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setTaskTitle(e.target.value)
				}
				className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
				value={taskTitle}
			/>
			<button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform transition-transform duration-200 hover:bg-blue-400 hover:scale-95">
				Add task
			</button>
		</form>
	);
};

export default AddTask;
