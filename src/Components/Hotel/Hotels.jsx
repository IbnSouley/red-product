// HotelListDashboard.jsx
import React from "react";
import styled from "styled-components";
import { FaHotel, FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsListUl } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";

// Liste d'hôtels
const hotels = [
  {
    name: "Hôtel Terrou-Bi",
    address: "Boulevard Martin Luther King, Dakar 11100",
    price: "25 000 XOF par nuit",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "King Fahd Palace",
    address: "Rte des Almadies, Dakar",
    price: "20 000 XOF par nuit",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Radisson Blu Hotel",
    address: "Rte de la Corniche O, Dakar 16868",
    price: "22 000 XOF par nuit",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Pullman Dakar Teranga",
    address: "Place de l’Indépendance, 10 Rue PL 29, Dakar",
    price: "30 000 XOF par nuit",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Hôtel Lac Rose",
    address: "Lac Rose, Dakar",
    price: "25 000 XOF par nuit",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Hôtel Saly",
    address: "Mbour, Sénégal",
    price: "20 000 XOF par nuit",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Palm Beach Resort & Spa",
    address: "BP64 Saly 23003",
    price: "20 000 XOF par nuit",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Pullman Dakar Teranga",
    address: "Place de l’Indépendance, 10 Rue PL 29, Dakar",
    price: "30 000 XOF par nuit",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
];

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f7f7f7;
`;

const Sidebar = styled.aside`
  width: 240px;
  background: #232428;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
`;

const SidebarHeader = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 2.5rem;
  padding-left: 2rem;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarMenuItem = styled(NavLink)`
  padding: 0.9rem 2rem;
  background: transparent;
  color: #bdbdbd;
  border-left: 4px solid transparent;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;

  &.active {
    background: #36393d;
    color: #fff;
    border-left: 4px solid #ffd600;
    font-weight: 600;
  }
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  padding: 2rem 2rem 1.3rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: #2d2f34;
  border-radius: 0 0 8px 8px;
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
  font-weight: bold;
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
  background: #f7f7f7;
`;

const Header = styled.header`
  background: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #232323;
`;

const SearchBar = styled.input`
  background: #f2f2f2;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  width: 220px;
  font-size: 1rem;
  margin-right: 1.5rem;
`;

const AddButton = styled.button`
  background: #fff;
  color: #232323;
  border: 1px solid #ececec;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  margin-left: 1.5rem;

  &:hover {
    background: #f7f7f7;
  }
`;

const Content = styled.section`
  padding: 2rem 2rem 0 2rem;
`;

const HotelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.3rem;
`;

const HotelCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const HotelImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
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
  const navigate = useNavigate();

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
            <UserName>Mamadou Doucs</UserName>
            <UserStatus>En ligne</UserStatus>
          </UserInfo>
        </SidebarFooter>
      </Sidebar>
      <Main>
        <Header>
          <Title>Liste des hôtels</Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchBar placeholder="Rechercher..." />
            <AddButton onClick={() => navigate("/hotels/new")}>
              + Créer un nouvel hôtel
            </AddButton>
          </div>
        </Header>
        <Content>
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
    </Layout>
  );
}
