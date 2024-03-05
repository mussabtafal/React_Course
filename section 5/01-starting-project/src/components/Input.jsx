export default function Input({ name, data, onHandleChange, children }) {
  function recordInputChanges(event) {
    onHandleChange(name, event.target.value);
  }

  return (
    <p>
      <label htmlFor="">{children}</label>
      <input type="number" name={name} value={data} onChange={recordInputChanges} required />
    </p>
  );
}
