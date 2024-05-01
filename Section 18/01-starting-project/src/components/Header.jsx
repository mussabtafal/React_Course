import logoImg from "../assets/logo.jpg"
export default function Header() {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food app logo" />
        <h1>REACTFOOD</h1>
      </div>
      <button>Cart ({"Dummy No."})</button>
    </div>
  );
}
