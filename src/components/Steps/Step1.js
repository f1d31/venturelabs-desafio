import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const Step1 = ({ formData, onTextChange, nextStep }) => {
  const [error, setError] = useState("");

  const checkOnNext = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, phoneNumber } = formData;
    if (!firstName || !lastName || !email || !phoneNumber) {
      setError("Por favor, preencha todos os campos para continuar");
      return;
    }
    const pattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!pattern.test(email)) {
      setError("Por favor insira um e-mail válido");
      return;
    }
    setError("");
    nextStep();
  };
  return (
    <Form className="card p-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onTextChange}
            placeholder="Insira o seu nome"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onTextChange}
            placeholder="Insira o seu sobrenome"
          />
        </Form.Group>

        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={onTextChange}
          placeholder="Insira o seu email"
        />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onTextChange}
          placeholder="Insira o seu telefone"
        />
      </Form.Group>
      {error ? <p className="text-danger m-1">{error}</p> : null}
      <Button
        onClick={checkOnNext}
        className="w-100"
        variant="primary"
        type="submit"
      >
        Próximo
      </Button>
    </Form>
  );
};
