// CreateHotel.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: #232323;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #a084e8;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #a084e8;
  color: white;
  font-size: 1rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background-color: #8b6df0;
  }
`;

export default function CreateHotel() {
  const [hotel, setHotel] = useState({
    name: "",
    address: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nouvel hôtel créé :", hotel);
    // Tu peux remplacer ici par une requête vers une API
    navigate("/hotels");
  };

  return (
    <Container>
      <Title>Créer un nouvel hôtel</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nom</Label>
          <Input
            type="text"
            name="name"
            value={hotel.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Adresse</Label>
          <Input
            type="text"
            name="address"
            value={hotel.address}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Prix</Label>
          <Input
            type="text"
            name="price"
            value={hotel.price}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>URL de l'image</Label>
          <Input
            type="text"
            name="image"
            value={hotel.image}
            onChange={handleChange}
          />
        </FormGroup>

        <SubmitButton type="submit">Créer</SubmitButton>
      </Form>
    </Container>
  );
}

