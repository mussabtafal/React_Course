import Input from "./Input";
export default function Calculator({ onChange, data }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input data={data.initialInvestment} name="initialInvestment" onHandleChange={onChange}>
          INITIAL INVESTMENT
        </Input>
        <Input data={data.annualInvestment} name="annualInvestment" onHandleChange={onChange}>
          ANNUAL INVESTMENT
        </Input>
      </div>
      <div className="input-group">
        <Input data={data.expectedReturn} name="expectedReturn" onHandleChange={onChange}>
          EXPECTED RETURN
        </Input>
        <Input data={data.duration} name="duration" onHandleChange={onChange}>
          DURATION
        </Input>
      </div>
    </section>
  );
}
