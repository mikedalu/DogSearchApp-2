import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function BreedImageList(props) {
	useEffect(() => {
		Aos.init({
			duration: 500,
		});
	}, []);
	const breedImage = props.exactDogBreed.map((Url, index) => {
		return (
			<div key={index} className=" image-items-Container">
				<img data-aos="fade-left" src={Url} alt="dog" />
			</div>
		);
	});
	return <div className="content">{breedImage}</div>;
}

export default BreedImageList;
