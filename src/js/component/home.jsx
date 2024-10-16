import React, { useState } from "react";

import { Title } from "./Title.jsx";
import { InputText } from "./InputText.jsx";
import { List } from "./List.jsx";
import { ItemsLeft } from "./ItemsLeft.jsx";
import { Bottom } from "./Bottom.jsx";

const Home = () => {



	return (
		<div>
			<Title />
			<div className="border border-bottom-0 shadow-lg" style={{ width: "500px" }} >
				{/*<InputText />*/}
				<List />
				{/*<ItemsLeft />*/}
			</div>
			<Bottom />
		</div>

	);
};

export default Home;
