import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import pt from "date-fns/locale/pt";

// Date of Birth, CPF, Monthly Income

export const Step3 = ({
  formData,
  onTextChange,
  prevStep,
  changeStartDate,
  addNewCustomer,
}) => {
  const [error, setError] = useState("");

  const checkOnNext = (event) => {
    const pattern = /^[0-9]{11}$/;
    event.preventDefault();
    const { dateOfBirth, CPF, monthlyIncome } = formData;
    if (!dateOfBirth || !CPF || !monthlyIncome) {
      setError("Por favor, preencha todos os campos para continuar");
      return;
    }
    if (!pattern.test(CPF)) {
      setError("Insira um CPF correto com 11 dígitos");
      return;
    }
    addNewCustomer();
  };
  return (
    <Form className="card p-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Data de nascimento</Form.Label>

          <DatePicker
            className="form-control"
            showYearDropdown
            selected={formData.dateOfBirth}
            onChange={(date) => changeStartDate(date)}
            locale={pt}
            dateFormat="dd/MM/yyyy"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>CPF</Form.Label>
          <Form.Control
            type="text"
            name="CPF"
            value={formData.CPF}
            onChange={onTextChange}
            placeholder="Insira o seu CPF"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Renda Mensal</Form.Label>
          <Form.Control
            type="text"
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={onTextChange}
            placeholder="Insira sua renda mensal"
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
          Adicionar cliente
        </Button>
      </div>
    </Form>
  );
};
