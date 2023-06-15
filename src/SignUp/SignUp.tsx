import React, { useState } from "react";
import Header from "../Header/Header";
import * as Form from "@radix-ui/react-form";
import "./SignUp.css";

function SignUp() {
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

    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [progress, setProgress] = useState("");

    const [hidePassword, setHidePassword] = useState(true);

    const handlePassword = (passwordValue: string) => {
        const strengthChecks = {
            length: false,
            hasUpperCase: false,
            hasLowerCase: false,
            hasDigit: false,
            hasSpecialChar: false,
        };

        strengthChecks.length = passwordValue.length >= 8 ? true : false;
        strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
        strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
        strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
        strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

        let verifiedList = Object.values(strengthChecks).filter(
            (value) => value
        );

        let strength =
            verifiedList.length === 5
                ? "Forte"
                : verifiedList.length >= 2
                ? "Média"
                : "Fraca";

        setPassword(passwordValue);
        setProgress(`${(verifiedList.length / 5) * 100}%`);
        setMessage(strength);

        console.log("verifiedList: ", `${(verifiedList.length / 5) * 100}%`);
    };

    const getActiveColor = (type: string) => {
        if (type === "Forte") return "#8BC926";
        if (type === "Média") return "#FEBD01";
        return "#FF0054";
    };

    return (
        <Form.Root onSubmit={onSubmit} className="FormRoot">
            <Form.Field className="FormField" name="name">
                <div
                    style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                    }}
                >
                    <Form.Label className="FormLabel">Nome</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                        Por favor, preencha seu nome
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input className="Input" type="email" required />
                </Form.Control>
            </Form.Field>
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
                <div>
                    <Form.Control asChild>
                        <input
                            className="Input"
                            type={hidePassword ? "password" : "text"}
                            required
                            value={password}
                            onChange={(ev) => {
                                handlePassword(ev.target.value);
                            }}
                        />
                    </Form.Control>
                    <div
                        style={{
                            transform: "translate(87.5%,-107.5%)",
                        }}
                        onClick={() => setHidePassword((prev) => !prev)}
                    >
                        {hidePassword ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="3"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M2 2L22 22"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        )}
                    </div>
                </div>
            </Form.Field>

            <div className="Pass-teste">
                <div className="Pass-progress-bg">
                    <div
                        className="Pass-progress"
                        style={{
                            width: progress,
                            backgroundColor: getActiveColor(message),
                        }}
                    ></div>
                </div>
                <p
                    className="Pass-message"
                    style={{
                        color: getActiveColor(message),
                        visibility:
                            password.length !== 0 ? "visible" : "hidden",
                    }}
                >
                    Sua senha é {message}
                </p>
                <Form.Submit asChild>
                    <button
                        className="Button primary"
                        style={{ marginTop: 10 }}
                    >
                        Registrar
                    </button>
                </Form.Submit>
            </div>
        </Form.Root>
    );
};

export default SignUp;
