import React from "react";
import Header from "../Header/Header";
import * as Form from "@radix-ui/react-form";
import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn() {
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
				<LoginForm />
			</div>
		</div>
	);
}

const LoginForm = () => {
	const onSubmit = (event: any) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<Form.Root onSubmit={onSubmit} className="FormRoot">
			<Form.Field className="FormField" name="email">
				<div
					style={{
						display: "flex",
						alignItems: "baseline",
						justifyContent: "space-between",
					}}
				>
					<Form.Label className="FormLabel">Email</Form.Label>
					<Form.Message className="FormMessage" match="valueMissing">
						Por favor, preencha seu email
					</Form.Message>
					<Form.Message className="FormMessage" match="typeMismatch">
						Por favor, coloque um email válido
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input className="Input" type="email" required />
				</Form.Control>
			</Form.Field>
			<Form.Field className="FormField" name="password">
				<div
					style={{
						display: "flex",
						alignItems: "baseline",
						justifyContent: "space-between",
					}}
				>
					<Form.Label className="FormLabel">Senha</Form.Label>
					<Form.Message className="FormMessage" match="valueMissing">
						Por favor, preencha sua senha
					</Form.Message>
				</div>
				<Form.Control asChild>
					<input className="Input" type="password" required />
				</Form.Control>
			</Form.Field>
			<Form.Submit asChild>
				<button className="Button primary" style={{ marginTop: 10 }}>
					Entrar
				</button>
			</Form.Submit>
			<Link
                to="/signUp"
				className="Button secundary"
				style={{
					marginTop: 10,
                    textDecoration: "none"
				}}
			>
				Criar conta
			</Link>
		</Form.Root>
	);
};

export default SignIn;
