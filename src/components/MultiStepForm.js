import React from "react";
import { Button } from "react-bootstrap";
import { Step1 } from "./Steps/Step1";
import { Step2 } from "./Steps/Step2";
import { Step3 } from "./Steps/Step3";

function MultiStepForm({
  onTextChange,
  formData,
  setFormData,
  changeStartDate,
  addNewCustomer,
  setActiveNew,
  resetForm,
}) {
  const nextStep = () => {
    setFormData({
      ...formData,
      step: formData.step + 1,
    });
  };

  const prevStep = () => {
    setFormData({
      ...formData,
      step: formData.step - 1,
    });
  };

  const viewCustomers = () => {
    setActiveNew(false);
    resetForm();
  };

  switch (formData.step) {
    case 1:
      return (
        <div className="col-12 col-sm-8 col-md-6 p-2">
          <p className="fs-5 fw-bold m-2">Etapa 1 de 3</p>
          <Step1
            nextStep={nextStep}
            onTextChange={onTextChange}
            formData={formData}
          />
        </div>
      );
    case 2:
      return (
        <div className="col-12 col-sm-8 col-md-6 mx-2 p-2">
          <p className="fs-5 fw-bold">Etapa 2 de 3</p>
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            onTextChange={onTextChange}
            formData={formData}
          />
        </div>
      );
    case 3:
      return (
        <div className="col-12 col-sm-8 col-md-6 mx-2 p-2">
          <p className="fs-5 fw-bold">Etapa 3 de 3</p>
          <Step3
            resetForm={resetForm}
            prevStep={prevStep}
            onTextChange={onTextChange}
            changeStartDate={changeStartDate}
            formData={formData}
            addNewCustomer={addNewCustomer}
          />
        </div>
      );
    case 4:
      return (
        <div className="col-12 col-md-6 mx-2 d-flex justify-content-center align-items-center h-75 flex-column p-2">
          <p className="fs-5 fw-bold">Um novo cliente foi adicionado.</p>
          <Button
            onClick={viewCustomers}
            className="mb-2 fw-semibold"
            variant="success"
            type="submit"
          >
            Ver todos os clientes
          </Button>
          <Button onClick={resetForm} className="mb-2 fw-semibold">
            Adicionar novo cliente
          </Button>
        </div>
      );
    default:
      return <div />;
  }
}

export default MultiStepForm;
