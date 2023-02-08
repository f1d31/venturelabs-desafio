import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

export const AllCustomers = ({ customers }) => {
  const [cust, setCust] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const customerSelected = (customer) => {
    let tempCust = customer;
    let date, month, year;
    try {
      if (tempCust?.dateOfBirth?.getDate()) {
        date = tempCust.dateOfBirth.getDate();
        month = tempCust.dateOfBirth.getMonth() + 1;
        year = tempCust.dateOfBirth.getFullYear();
        if (date < 10) {
          date = "0" + date;
        }
        if (month < 10) {
          month = "0" + month;
        }
        date = date.toString().padStart(2, "0");
        month = month.toString().padStart(2, "0");
        tempCust.dateOfBirth = `${date}/${month}/${year}`;
      }
    } catch (error) {
      console.log({ error });
    }

    setCust(tempCust);
    handleShow();
  };
  return (
    <div className="w-100 d-flex flex-column justify-content-center p-2">
      <p className="fs-5 fw-bold">Lista de clientes</p>
      <div className="row w-100 d-flex justify-content-center justify-content-lg-around">
        {customers?.length > 0 ? (
          customers?.map((customer, index) => (
            <div
              key={index}
              className="col-11 col-md-5 col-sm-5 p-3 m-2 m-sm-0 mb-sm-4 "
            >
              <Card className="shadow">
                <Card.Body className="d-flex flex-column justify-content-sm-center">
                  <Card.Title className="text-center text-lg-start text-md-start">
                    {customer?.firstName + " " + customer?.lastName}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {customer?.email}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {customer?.phoneNumber}
                  </Card.Subtitle>
                  <Card.Text className="mb-0">{customer?.addressOne}</Card.Text>
                  <Card.Text className="">{customer?.addressTwo}</Card.Text>

                  <Button onClick={() => customerSelected(customer)}>
                  Mostrar detalhes
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="fs-5 ">Nenhum cliente adicionado ainda.</p>
        )}
      </div>
      <Modal
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Nome: {cust?.firstName + " " + cust?.lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>Email:</b> {cust?.email}</p>
          <p><b>Telefone:</b> {cust?.phoneNumber}</p>
          <p><b>CEP:</b> {cust?.CEP}</p>
          <p><b>Endereço 1:</b> {cust?.addressOne}</p>
          <p><b>Endereço 2:</b> {cust?.addressTwo}</p>
          <p><b>Data de nascimento:</b> {cust?.dateOfBirth}</p>
          <p><b>CPF:</b> {cust?.CPF}</p>
          <p><b>Renda Mensal:</b> {cust?.monthlyIncome}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
