import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FiImage } from "react-icons/fi";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  width: 800px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  border-bottom: 1px dashed #ddd;
  padding-bottom: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.95rem;
`;

const FullWidth = styled.div`
  grid-column: span 2;
`;

const FileUpload = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  color: #777;
  font-size: 0.95rem;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    border-color: #aaa;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  padding: 0.9rem 1.2rem;
  background: #232323;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #444;
  }
`;

const ImagePreview = styled.img`
  margin-top: 1rem;
  max-height: 120px;
  object-fit: cover;
  border-radius: 6px;
`;

export default function CreateHotelModal({ onClose }) {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    price: "",
    currency: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("address", form.address);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("price", form.price);
    formData.append("currency", form.currency);
    if (imageFile) formData.append("image", imageFile);

    // Exemple d'envoi API (à adapter selon ton backend)
    fetch("http://localhost:3000/api/hotels", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur serveur");
        return res.json();
      })
      .then((data) => {
        console.log("Hôtel enregistré :", data);
        onClose();
      })
      .catch((err) => {
        console.error("Erreur :", err);
      });
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <MdClose />
        </CloseButton>
        <ModalTitle>Créer un nouveau hôtel</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nom de l'hôtel" onChange={handleInputChange} required />
          <Input name="address" placeholder="Adresse" onChange={handleInputChange} required />
          <Input name="email" placeholder="E-mail" type="email" onChange={handleInputChange} />
          <Input name="phone" placeholder="Numéro de téléphone" onChange={handleInputChange} />
          <Input name="price" placeholder="Prix par nuit" onChange={handleInputChange} />
          <Input name="currency" placeholder="Devise (ex: XOF)" onChange={handleInputChange} />
          
          <FullWidth>
            <label>Ajouter une photo</label>
            <FileUpload htmlFor="fileUpload">
              <FiImage size={32} />
              {imagePreview ? "Modifier la photo" : "Ajouter une photo"}
              <HiddenFileInput id="fileUpload" type="file" accept="image/*" onChange={handleImageChange} />
            </FileUpload>
            {imagePreview && <ImagePreview src={imagePreview} alt="Aperçu" />}
          </FullWidth>

          <SubmitButton type="submit">Enregistrer</SubmitButton>
        </Form>
      </ModalContainer>
    </Overlay>
  );
}
