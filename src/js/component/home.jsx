import React, { useState } from "react";

import { Title } from "./Title.jsx";
import { ToDoList } from "./ToDoList.jsx";
import { Bottom } from "./Bottom.jsx";

const Home = () => {
	return (
		<div>
			<Title />
			<div className="border border-bottom-0 shadow-lg" style={{ width: "500px" }} >
				<ToDoList />
			</div>
			<Bottom />
		</div>

	);
};

export default Home;
