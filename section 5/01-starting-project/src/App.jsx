import Header from "./components/Header";
import Calculator from "./components/Calculater";
import Table from "./components/Table";
import { useState } from "react";

const initialData = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [data, setData] = useState(initialData);

  function handleInputChange(name, value) {
    setData((prevData) => ({
      ...prevData,
      [name]: +value,
    }));
  }

  const inputIsValid = data.duration >= 1;

  return (
    <>
      <Header></Header>
      <Calculator data={data} onChange={handleInputChange}></Calculator>
      {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
      {inputIsValid && <Table data={data}></Table>}
    </>
  );
}

export default App;
