import React from "react";
import "./App.css";
import BreedImageList from "./BreedImageList";
import Footer from "./Footer";
import Header from "./Header";
import SearchSelect from "./SearchSelect";

class App extends React.Component {
	state = { allDog: [], exactBreed: [] };
	componentDidMount() {
		this.searchDog();
	}

	searchDog = async () => {
		//func to get breed names
		try {
			const response = await fetch("https://dog.ceo/api/breeds/list/all");
			const data = await response.json();
			const arrData = Object.keys(data.message); // using object.keys extranct the keys of the object into an array
			this.setState({ allDog: arrData });
		} catch (e) {
			console.log("there was  problem fetching data du", e);
		}
	};

	searchBreed = async (e) => {
		//Func to search exact breed
		try {
			if (e.target.value !== "Choose dog by breed to search") {
				const breedValue = e.target.value;
				const response = await fetch(`https://dog.ceo/api/breed/${breedValue}/images`);
				const data = await response.json();
				this.setState({ exactBreed: data.message });
			}
		} catch (e) {
			console.log("error fetching data");
		}
	};

	render() {
		return (
			<div className="app">
				<Header>
					<SearchSelect generalDogBreed={this.state.allDog} searchDogBreed={this.searchBreed} />
				</Header>
				<BreedImageList exactDogBreed={this.state.exactBreed} />
				<Footer />
			</div>
		);
	}
}

export default App;
