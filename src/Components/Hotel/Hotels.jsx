// HotelListDashboard.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaHotel, FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsListUl } from "react-icons/bs";
import { FiBell } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import CreateHotel from "../Hotel/CreateHotel"; // 👈 Assure-toi que le chemin est correct

// Données hôtels
const hotels = [
  {
    name: "Hôtel Terrou-Bi",
    address: "Boulevard Martin Luther King, Dakar 11100",
    price: "25 000 XOF par nuit",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
    {
    name: "King Fahd Palace",
    address: "Rue des almadies, Dakar",
    price: "20 000 XOF par nuit",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgK54LuZ8g5gQ50ZJr10_LKqM6Txgz37Wp6Q&s",
  },
    {
    name: "Radisson Blue",
    address: "Rue de Corniche O, 16868",
    price: "22 000 XOF par nuit",
    image: "https://www.myboutiquehotel.com/photos/57961/radisson-blu-dakar-dakar-001-20671-900x570.jpg",
  },
    {
    name: "Pullman Dakar Teranga",
    address: "Place de l'Independance, 10 Rue PL 29, Dakar",
    price: "30 000 XOF par nuit",
    image: "https://www.seneguide.com/images/cache/schema_1x1/images/address/213/312917636-511850007469493-2822919377169805455-n.jpeg",
  },
  // ... (les autres hôtels ici)
];

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f7f7f7;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  width: 240px;
  background: #232428;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    padding: 0.5rem;
    overflow-x: auto;
  }
`;

const SidebarHeader = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
    margin-bottom: 0;
    margin-right: auto;
    display: flex;
    align-items: center;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const SidebarMenuItem = styled(NavLink)`
  padding: 0.9rem 2rem;
  color: #bdbdbd;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.7rem;

  &.active {
    background: #36393d;
    color: #fff;
    border-left: 4px solid #ffd600;

    @media (max-width: 768px) {
      border-left: none;
      border-bottom: 2px solid #ffd600;
    }
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: #2d2f34;
  border-radius: 0 0 8px 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Avatar = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a084e8;
  font-size: 1.4rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 1rem;
`;

const UserStatus = styled.div`
  font-size: 0.85rem;
  color: #7bffb2;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid #ececec;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #232323;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const SearchBar = styled.input`
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  max-width: 240px;

  @media (min-width: 768px) {
    width: 220px;
  }
`;

const AddButton = styled.button`
  background: #fff;
  color: #232323;
  border: 1px solid #ececec;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f7f7f7;
  }
`;

const Content = styled.section`
  padding: 2rem;
`;

const HotelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const HotelCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const IconButton = styled.div`
  position: relative;
  font-size: 1.3rem;
  color: #555;
  cursor: pointer;
`;

const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background: orange;
  color: white;
  font-size: 0.65rem;
  padding: 2px 5px;
  border-radius: 50%;
`;

const HotelInfo = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const HotelName = styled.div`
  font-size: 1.08rem;
  font-weight: 600;
  color: #232323;
`;

const HotelAddress = styled.div`
  font-size: 0.97rem;
  color: rgb(145, 49, 49);
`;

const HotelPrice = styled.div`
  font-size: 1rem;
  color: rgb(27, 26, 29);
  font-weight: 500;
  margin-top: 0.2rem;
`;

export default function HotelListDashboard() {
  const [showModal, setShowModal] = useState(false); // 👈 gestion du modal

  return (
    <Layout>
      <Sidebar>
        <SidebarHeader>RED PRODUCT</SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem to="/dashboard">
            <MdDashboard /> Principal
          </SidebarMenuItem>
          <SidebarMenuItem to="/dashboard">
            <FaHotel /> Dashboard
          </SidebarMenuItem>
          <SidebarMenuItem to="/hotels">
            <BsListUl /> Liste des hôtels
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarFooter>
          <Avatar>
            <FaUserCircle />
          </Avatar>
          <UserInfo>
            <UserName>Mamadou</UserName>
            <UserStatus>En ligne</UserStatus>
          </UserInfo>
        </SidebarFooter>
      </Sidebar>

      <Main>
        <Header>
          <Title>Liste des hôtels</Title>
          <HeaderSection>
            <SearchBar placeholder="Rechercher..." />
            <IconButton>
              <FiBell />
              <Badge>3</Badge>
            </IconButton>
            <IconButton title="Profil">
              <FaUserCircle />
            </IconButton>
          </HeaderSection>
        </Header>

        <Content>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
            <AddButton onClick={() => setShowModal(true)}>
              + Créer un hôtel
            </AddButton>
          </div>

          <h3 style={{ fontWeight: 500, color: "#232323", marginBottom: "1.2rem" }}>
            Hôtels <span style={{ color: "#bdbdbd", fontWeight: 400 }}>({hotels.length})</span>
          </h3>

          <HotelsGrid>
            {hotels.map((hotel, idx) => (
              <HotelCard key={`${hotel.name}-${idx}`}>
                <HotelImage src={hotel.image} alt={`Photo de ${hotel.name}`} />
                <HotelInfo>
                  <HotelName>{hotel.name}</HotelName>
                  <HotelAddress>{hotel.address}</HotelAddress>
                  <HotelPrice>{hotel.price}</HotelPrice>
                </HotelInfo>
              </HotelCard>
            ))}
          </HotelsGrid>
        </Content>
      </Main>

      {/* Affichage du modal */}
      {showModal && <CreateHotel onClose={() => setShowModal(false)} />}
    </Layout>
  );
}
