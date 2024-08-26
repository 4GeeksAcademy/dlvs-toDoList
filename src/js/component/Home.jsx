import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ExampleInputController } from "./ExampleInputController";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">To Do List</h1>
			<ExampleInputController />
			
		</div>
	);
};

export default Home;
