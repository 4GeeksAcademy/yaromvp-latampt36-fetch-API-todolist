import React, { useState, useEffect } from "react";

export const ItemsLeft = (props) => {

	const createUser = async () => {
		try {
			const response = await fetch('https://playground.4geeks.com/todo/users/yaromvp', {
				method: "POST",
				header: { 'Content-type': 'Application/json' }
			}
			)
			if (response.status !== 201) {
				throw new Error(`Error en la solicitud: status code ${response.status}`)
			}
			return true
		} catch (error) {
			console.log(error)
			return false
		}
	}

	const deleteAllTasks = async () => {
		try {//Primero se borra el usuario 'yaromvp'
			const response = await fetch(`https://playground.4geeks.com/todo/users/yaromvp`, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify() //No se necesita body pero lo dejamos de muestra
			})
			if (response.status !== 204) {
				console.log('Algo salió mal con el DELETE...');
				return
			}
			await createUser() //Se espera para crear el usuario "yarovp"
			props.getTareas() //Se obtiene las tareas del usuario
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="d-flex justify-content-between bg-light border">
			<h6 className="text-black-50 p-2 m-0"
				style={{ fontSize: "0.6rem" }}>
				{props.number == 0 ? "No tasks, add a task" : props.number == 1 ? `${props.number} item left` : `${props.number} items left`}
			</h6>
			<button className={`btn btn-sm btn-danger ${props.number == 0 ? "disabled" : ""}`} onClick={() => { deleteAllTasks() }}>Clean all tasks</button>
		</div>
	);
};