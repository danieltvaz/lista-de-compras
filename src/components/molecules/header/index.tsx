import "./styles.css";

import AddButton from "../../atoms/button";
import useAuth from "../../../utils/auth-handler";
import { useNavigate } from "react-router";

export default function Header() {
  const { getUserData, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="header__wrapper">
      <div>
        <p>Bem vindo de volta, {getUserData()?.name.toLocaleUpperCase()}</p>
      </div>
      <nav>
        <AddButton text="Sair" onClick={handleLogout} />
      </nav>
    </header>
  );
}
