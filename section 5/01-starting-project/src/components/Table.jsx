import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({ data }) {
  const calculatedData = calculateInvestmentResults(data);
  const initialInvestment = 
    calculatedData[0].valueEndOfYear -
    calculatedData[0].interest - 
    calculatedData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((data) => {
          const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
          const totalAmountInevested = data.valueEndOfYear - totalInterest;
          return(<tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInevested)}</td>
          </tr>)
        })}
      </tbody>
    </table>
  );
}
