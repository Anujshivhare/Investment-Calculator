import Logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="A bag full of Money" />
      <h1>Investement Calculator</h1>
    </header>
  );
}
