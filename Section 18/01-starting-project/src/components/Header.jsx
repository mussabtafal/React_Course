import logoImg from "../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food app logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <button>Cart ({"Dummy No."})</button>
      </nav>
    </header>
  );
}
