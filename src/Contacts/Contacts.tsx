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
					paddingTop: "70px"
				}}
			>
				<div>
					<h1>Entre em contato</h1>
					<div className="contact-info">
						<p>WhatsApp: <a href="https://wa.me/5531998648448">(31) 99864-8448</a></p>
						<p>Instagram: <a href="https://www.instagram.com/artesdajackeline">@artesdajackeline</a></p>
						<p>Email: <a href="mailto:artesdajackeline@gmail.com">artesdajackeline@gmail.com</a></p>
						<p>Endereço: Rua Iraci Carneiro 130, Caiçara</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contacts;
