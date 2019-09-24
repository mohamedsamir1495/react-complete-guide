import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
	state = {
		persons: [
			{
				name: "Max",
				age: 28,
			},
			{
				name: "Manu",
				age: 29,
			},
			{
				name: "Stephanie",
				age: 26,
			},
		],
		otherState: "some other value",
	};

	switchNameHandler = newName => {
		// console.log("Was clicked!");
		// this.state.persons[0].name = 'Maximilian' Dont change the state directly like this
		this.setState({
			persons: [
				{
					name: "Maximilian",
					age: 28,
				},
				{
					name: "Manu",
					age: 29,
				},
				{
					name: "Stephanie",
					age: 27,
				},
			],
		});
	};

	nameChangedHandler = event => {
		// console.log("Was clicked!");
		// this.state.persons[0].name = 'Maximilian' Dont change the state directly like this
		this.setState({
			persons: [
				{
					name: "Maximilian",
					age: 28,
				},
				{
					name: event.target.value,
					age: 29,
				},
				{
					name: "Stephanie",
					age: 27,
				},
			],
		});
	};

	render() {
		const style = {
			backgroundColor: "white",
			font: "inherit",
			border: "1x solid blue",
			padding: "8px",
		};
		return (
			<div className='App'>
				<h1>Hi, i'm a react App</h1>
				<button style={style} onClick={() => this.switchNameHandler("Maximilian!!")}>
					Switch Name
				</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Max!!")} changed={this.nameChangedHandler}>
					My Hobbies: Racing
				</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
		);
		// return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi react app"));
	}
}

export default App;
