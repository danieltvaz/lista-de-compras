import "./styles.css";

import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/atoms/button";
import LoadingOverlay from "../../components/atoms/loading-overlay";
import MainContainer from "../../components/layout/main-container";
import Spacer from "../../components/atoms/spacer";
import TextInput from "../../components/atoms/text-input";
import authHandler from "../../utils/auth-handler";
import { useState } from "react";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();

  const { signup } = authHandler();

  async function handleClick() {
    setLoading(true);
    try {
      await signup(form.email, form.password, form.name);
      navigate("/lista-de-compras");
    } catch (e: any) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MainContainer>
      <LoadingOverlay active={loading} />
      <div className="signup__wrapper">
        <h1>Cadastre-se</h1>
        <div>
          <TextInput
            width="250px"
            type="text"
            placeholder="nome"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            icon={false}
          />
          <Spacer orientation="vertical" size="12px" />

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
          <Button text="Cadastrar" onClick={handleClick} />
        </div>
        <div>
          <Link className="signup__back-button" to="/lista-de-compras">
            Voltar
          </Link>
        </div>
      </div>
    </MainContainer>
  );
}
