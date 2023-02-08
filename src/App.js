import { useState } from "react";
import "./App.css";
import { AllCustomers } from "./components/AllCustomers";
import { MobileSideBar } from "./components/MobileSideBar";
import MultiStepForm from "./components/MultiStepForm";
import { Sidebar } from "./components/Sidebar";
const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  CEP: "",
  addressOne: "",
  addressTwo: "",
  dateOfBirth: new Date(),
  CPF: "",
  monthlyIncome: "",
};

function App() {
  const [activeNew, setActiveNew] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const [customers, setCustomers] = useState([]);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const onTextChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName" || name === "lastName") {
      const pattern = /^[a-zA-Z]+$/;

      if (pattern.test(value)) {
        setFormData({ ...formData, [name]: value });
        return;
      }
      return;
    }
    if (name === "CEP") {
      const pattern = /^\d+$/;
      if (value.length > 8) {
        return;
      }
      if (pattern.test(value)) {
        setFormData({ ...formData, [name]: value });
        return;
      }
      return;
    }
    if (name === "monthlyIncome") {
      const pattern = /^\d+$/;
      if (pattern.test(value)) {
        setFormData({ ...formData, [name]: value });
        return;
      }
      return;
    }
    if (name === "CPF") {
      if (value.length > 11) {
        return;
      }
      const pattern = /^\d+$/;
      if (pattern.test(value)) {
        setFormData({ ...formData, [name]: value });
        return;
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
  };
  const changeStartDate = (date) => {
    setFormData({ ...formData, dateOfBirth: date });
  };
  const addNewCustomer = () => {
    setCustomers([...customers, formData]);
    setFormData({ ...initialState, step: 4 });
  };
  const resetForm = () => {
    setFormData(initialState);
  };
  return (
    <div>
      <div className="row g-0">
        <Sidebar activeNew={activeNew} setActiveNew={setActiveNew} />

        <div
          className="d-flex col-12 col-lg-9 col-md-9 flex-column p-0 p-sm-0 p-md-3 align-items-center mt-0 mt-sm-0 mt-md-5"
          style={{ backgroundColor: "white" }}
        >
          <MobileSideBar
            sidebar={sidebar}
            setSidebar={setSidebar}
            showSidebar={showSidebar}
            activeNew={activeNew}
            setActiveNew={setActiveNew}
          />
          {activeNew ? (
            <MultiStepForm
              onTextChange={onTextChange}
              formData={formData}
              setFormData={setFormData}
              addNewCustomer={addNewCustomer}
              changeStartDate={changeStartDate}
              setActiveNew={setActiveNew}
              resetForm={resetForm}
            />
          ) : (
            <AllCustomers customers={customers} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
