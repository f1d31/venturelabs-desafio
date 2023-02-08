import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

// Zip code, Address 1, Address 2

export const Step2 = ({ formData, onTextChange, nextStep, prevStep }) => {
  const [error, setError] = useState("");

  const checkOnNext = (event) => {
    event.preventDefault();
    const pattern = /^[0-9]{8}$/;
    const { CEP, addressOne, addressTwo } = formData;
    if (!CEP || !addressOne || !addressTwo) {
      setError("Por favor, preencha todos os campos para continuar");
      return;
    }
    if (!pattern.test(CEP)) {
      setError("Insira um CEP correto de 8 dígitos");
      return;
    }
    setError("");
    nextStep();
  };
  return (
    <Form className="card p-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type="text"
            name="CEP"
            value={formData.CEP}
            onChange={onTextChange}
            placeholder="Insira o seu CEP"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Endereço 1</Form.Label>
          <Form.Control
            type="text"
            name="addressOne"
            value={formData.addressOne}
            onChange={onTextChange}
            placeholder="Insira o seu endereço"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Endereço 2</Form.Label>
          <Form.Control
            type="text"
            name="addressTwo"
            value={formData.addressTwo}
            onChange={onTextChange}
            placeholder="Insira o seu endereço"
          />
        </Form.Group>
      </Form.Group>
      {error ? <p className="text-danger m-1">{error}</p> : null}
      <div className="d-flex">
        <Button
          onClick={prevStep}
          className="w-100 m-2 fw-bold"
          variant="danger"
          type="submit"
        >
          Voltar
        </Button>
        <Button
          onClick={checkOnNext}
          className="w-100 m-2 fw-bold"
          variant="primary"
          type="submit"
        >
          Próximo
        </Button>
      </div>
    </Form>
  );
};
