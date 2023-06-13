import React from "react";
import Header from "../Header/Header";
import "./Contacts.css";

function Contacts() {
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
				<>Contatos</>
			</div>
		</div>
	);
}

export default Contacts;
