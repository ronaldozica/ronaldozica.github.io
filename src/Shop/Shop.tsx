import React from "react";
import Header from "../Header/Header";
import "./Shop.css";

function Shop() {
	return (
		<div>
			<div>
				<Header />
			</div>

			<div
				style={{
					display: "grid",
					placeContent: "center",
					color: "black",
				}}
			>
				<>Itens da loja</>
			</div>
		</div>
	);
}

export default Shop;