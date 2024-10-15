import React from "react";

import { Title } from "./Title.jsx";
import { Input } from "./Input.jsx";
import { List } from "./List.jsx";
import { ItemsLeft } from "./ItemsLeft.jsx";
import { Bottom } from "./Bottom.jsx";

const Home = () => {

	return (
		<div>
			<Title />
			<div className="border shadow-lg" style={{ width: "500px" }} >
				<Input />
				<List />
				<ItemsLeft />
			</div>
			<Bottom />
		</div>

	);
};

export default Home;
