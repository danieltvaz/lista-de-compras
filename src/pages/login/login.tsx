import "./styles.css";

import { useEffect, useState } from "react";

import Button from "../../components/atoms/button";
import LoadingOverlay from "../../components/atoms/loading-overlay";
import MainContainer from "../../components/layout/main-container";
import Spacer from "../../components/atoms/spacer";
import TextInput from "../../components/atoms/text-input";
import logo from "../../assets/logo.jpeg";
import useAuth from "../../utils/auth-handler";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();

  async function handleClick() {
    setLoading(true);

    try {
      await login(form.email, form.password, () => navigate("/products"));
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MainContainer>
      <LoadingOverlay active={loading} />
      <div className="login__wrapper">
        <img src={logo} />
        <h1>Faça login para continuar</h1>
        <div>
          <TextInput
            width="250px"
            type="email"
            placeholder="e-mail"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, email: e.target.value }))
            }
            icon={false}
          />
          <Spacer orientation="vertical" size="12px" />
          <TextInput
            width="250px"
            type="password"
            placeholder="senha"
            value={form.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
            icon={false}
          />
        </div>
        <div>
          <Button text="Entrar" onClick={handleClick} />
        </div>
      </div>
    </MainContainer>
  );
}
