import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// --- STYLES ---
const Background = styled.div`
  min-height: 100vh;
  background: #444;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 2.2rem 2rem 2rem 2rem;
  border-radius: 7px;
  width: 340px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Title = styled.h2`
  font-size: 1.05rem;
  font-weight: 400;
  color: #232323;
  margin-bottom: 1.7rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 20px;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  background: transparent;
  color: #232323;
  font-size: 1rem;
  outline: none;
  margin-bottom: 0.2rem;
  &::placeholder {
    color: #bcbcbc;
    font-size: 1rem;
    opacity: 1;
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #232323;
  gap: 0.5rem;
  user-select: none;
`;

const Checkbox = styled.input`
  accent-color: #232323;
  width: 1.1rem;
  height: 1.1rem;
`;

const Button = styled.button`
  margin-top: 0.7rem;
  padding: 0.9rem 0;
  border: none;
  border-radius: 6px;
  background: #484a4c;
  color: #fff;
  font-size: 1.08rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #333;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.8rem;
  gap: 0.5rem;
`;

const LinkYellow = styled.a`
  color: #ffd600;
  font-weight: 500;
  font-size: 1.01rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkText = styled.span`
  color: #fff;
  font-size: 1rem;
`;

const LinkSignUp = styled.a`
  color: #ffd600;
  font-weight: 500;
  text-decoration: none;
  margin-left: 0.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

// --- COMPOSANT PRINCIPAL ---
function AdminLoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simuler une authentification
    if (form.email === "admin@example.com" && form.password === "admin") {
      navigate("/dashboard");
    } else {
      alert("Identifiants invalides");
    }
  };

  return (
    <Background>
      <h1 style={{ color: "#fff", marginBottom: "20px" }}>RED PRODUCT</h1>
      <Container>
        <Title>Connectez-vous en tant que Admin</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            Gardez-moi connecté
          </CheckboxContainer>
          <Button type="submit">Se connecter</Button>
        </Form>
      </Container>
      <LinkContainer>
        <LinkYellow href="#">Mot de passe oublié?</LinkYellow>
        <LinkText>
          Vous n'avez pas de compte?
          <LinkSignUp href="/register"> S'inscrire</LinkSignUp>
        </LinkText>
      </LinkContainer>
    </Background>
  );
}

export default AdminLoginForm;
