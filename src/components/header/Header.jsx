import "./header.css";
import Logo from "/images/logo.svg";
export default function Header() {
  return (
    <div className="header-wrapper">
      <img src={Logo} alt="logo" />
    </div>
  );
}
