import React from "react";

export const ItemsLeft = (props) => {
	return (
		<div>
			<h6 className="text-black-50 border bg-light p-2 m-0"
				style={{ fontSize: "0.6rem" }}>
				{props.number == 0 ? "No tasks, add a task" : props.number == 1 ? `${props.number} item left` : `${props.number} items left`}
			</h6>
		</div>
	);
};