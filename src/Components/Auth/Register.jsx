// AdminRegisterForm.jsx
import React, { useState } from "react";
import styled from "styled-components";

// 🌆 Background global
const Background = styled.div`
  min-height: 100vh;
  background: #444;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 🌑 Conteneur principal
const Container = styled.div`
  background: #fff;
  padding: 2.2rem 2rem;
  border-radius: 7px;
  width: 340px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

// 📝 Titre
const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: #232323;
  margin-bottom: 1.5rem;
  text-align: center;
`;

// 📋 Formulaire
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// ✏️ Champs de texte
const Input = styled.input`
  padding: 35px;
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

// ✅ Checkbox + label
const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  color: #232323;
  font-size: 0.95rem;
  gap: 0.5rem;
  cursor: pointer;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 1.1rem;
  height: 1.1rem;
  accent-color: #45474d;
  cursor: pointer;
`;

// 🔘 Bouton
const Button = styled.button`
  margin-top: 0.7rem;
  padding: 0.9rem;
  border: none;
  border-radius: 6px;
  background: #45474d;
  color: #fff;
  font-size: 1.05rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #393b40;
  }
`;

// 🔗 Liens et bas de page
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

// 🧠 Composant principal
 function AdminRegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    accept: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.accept) {
      alert("Veuillez accepter les conditions.");
      return;
    }

    // 🔁 Remplacer par une vraie API
    console.log("Formulaire soumis :", form);
    alert("Inscription envoyée !");
  };

  return (
    <Background>
         <h1>RED PRODUCT</h1>
      <Container>
        <Title>Inscrivez-vous en tant qu'admin</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <Input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="new-password"
          />
          <CheckboxContainer htmlFor="accept">
            <Checkbox
              id="accept"
              name="accept"
              checked={form.accept}
              onChange={handleChange}
            />
            <span>Accepter les conditions et la politique</span>
          </CheckboxContainer>
          <Button type="submit">S'inscrire</Button>
        </Form>
      </Container>

      <LinkContainer>
        <LinkText>
          Vous avez déjà un compte ?
          <LinkSignUp href="/"> Se connecter</LinkSignUp>
        </LinkText>
      </LinkContainer>
    </Background>
  );
}


export default  AdminRegisterForm;