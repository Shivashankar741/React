import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = (prop) => {
	console.log(prop.inputValue);

	return (
		<ul className="cards">
			{prop.inputValue.map((el, ind) => (
				<li className="cards_item" key={ind}>
					<div className="card">
						<div className="card_image">
							<img className="card_imageIn" src={el.recipe.image} alt="" />
						</div>
						<div className="card_details">
							<h4 className="card_recipeName">
								{el.recipe.label.length <= 38
									? el.recipe.label
									: el.recipe.label.slice(0, 38) + "...."}
							</h4>
							<div className="card_btn">
								<Link to={{ pathname: "/ingredients", data: el.recipe }}>
									<button>View More</button>
								</Link>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Cards;
