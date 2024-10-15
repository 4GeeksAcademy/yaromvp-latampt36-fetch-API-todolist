import React, { Component } from "react";

export class InputText extends Component {
	state = {
		message: ""
	};
	render() {
		return (
			<input
				className="bg-light text-black-50 border w-100 px-5 py-2 m-0"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						this.setState({ message: e.target.value },
							() => {
								alert(this.state.message);
							});
					}
				}}
				type="text"
				placeholder="What needs to be done?"
			/>
		);
	}
}

/*
export const Input = () => {

	return (
		<form>
			<input
				className="bg-light text-black-50 border w-100 px-5 py-2 m-0"
				type="text"
				placeholder="What needs to be done?"
			/>
		</form>
	);
};
*/