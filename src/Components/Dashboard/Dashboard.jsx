import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaHotel, FaUsers, FaList, FaRegEnvelope, FaUserCircle } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

const cardColors = {
  formulaires: "#a084e8",
  emails: "#f24e4e",
  messages: "#3ec7b4",
  hotels: "#a084e8",
  utilisateurs: "#ffd600",
  entrees: "#3e7cb4",
};

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f7f7f7;
`;

const Sidebar = styled.aside`
  width: 260px;
  background: #36393d;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1000;
    transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const Overlay = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
  }
`;

const SidebarHeader = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  padding-left: 2rem;
  margin-bottom: 2.5rem;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarMenuItem = styled(NavLink)`
  display: block;
  padding: 0.9rem 2rem;
  text-decoration: none;
  color: #bdbdbd;
  border-left: 4px solid transparent;
  font-weight: 400;

  &.active {
    color: #232428;
    background: #fff;
    border-left: 4px solid #fff;
    font-weight: 600;
  }
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  padding: 2rem;
  background: #2d2f34;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.div`
  background: #fff;
  width: 38px;
  height: 38px;
  border-radius: 50%;
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
  padding: 1rem;
  border-bottom: 1px solid #ececec;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SearchBar = styled.input`
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  flex: 1;
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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

const WelcomeBlock = styled.section`
  padding: 2rem;
`;

const WelcomeTitle = styled.h2`
  font-size: 1.3rem;
  color: #232323;
`;

const WelcomeSubtitle = styled.p`
  color: #999;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;
  margin-top: 1.5rem;
`;

const StatCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  padding: 1.2rem;
  display: flex;
  align-items: center;
`;

const CardIcon = styled.div`
  background: ${(props) => props.bg};
  color: #fff;
  font-size: 1.4rem;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 1rem;
`;

const CardContent = styled.div``;

const CardValue = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #232323;
`;

const CardLabel = styled.div`
  font-size: 0.95rem;
  color: #777;
`;

const CardDesc = styled.div`
  font-size: 1rem;
  color: #bdbdbd;
  font-weight: bold;
  margin-top: 0.2rem;
`;

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <Layout>
      <Sidebar open={sidebarOpen}>
        <SidebarHeader>RED PRODUCT</SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem to="/" end onClick={closeSidebar}>Principal</SidebarMenuItem>
          <SidebarMenuItem to="/dashboard" onClick={closeSidebar}>Dashboard</SidebarMenuItem>
          <SidebarMenuItem to="/hotels" onClick={closeSidebar}>Hotels</SidebarMenuItem>
        </SidebarMenu>
        <SidebarFooter>
          <Avatar><BsFillPersonFill /></Avatar>
          <UserInfo>
            <UserName>Mamadou</UserName>
            <UserStatus>En ligne</UserStatus>
          </UserInfo>
        </SidebarFooter>
      </Sidebar>

      {sidebarOpen && <Overlay onClick={closeSidebar} />}

      <Main>
          <Header>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Hamburger onClick={toggleSidebar}>☰</Hamburger>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>Dashboard</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.5rem" }}>
            <SearchBar placeholder="Recherche" />
            <HeaderIcons>
                <IconButton>
                    <FiBell />
                      <Badge>3</Badge>
                </IconButton>
                  <IconButton title="Profil">
                     <FaUserCircle />
                </IconButton>
            </HeaderIcons>
          </div>
        </Header>

        <WelcomeBlock>
          <WelcomeTitle>Bienvenue sur RED Product</WelcomeTitle>
          <WelcomeSubtitle>Lorem ipsum dolor sit amet consectetur</WelcomeSubtitle>

          <CardsGrid>
            <StatCard>
              <CardIcon bg={cardColors.formulaires}><FaRegEnvelope /></CardIcon>
              <CardContent>
                <CardValue>125</CardValue>
                <CardLabel>Formulaires</CardLabel>
                <CardDesc>Je ne sais pas quoi mettre</CardDesc>
              </CardContent>
            </StatCard>
             <StatCard>
              <CardIcon bg={cardColors.messages}><MdOutlineMessage /></CardIcon>
              <CardContent>
                <CardValue>40</CardValue>
                <CardLabel>Messages</CardLabel>
                <CardDesc>Je ne sais pas quoi mettre</CardDesc>
              </CardContent>
            </StatCard>
            <StatCard>
              <CardIcon bg={cardColors.utilisateurs}><FaUsers /></CardIcon>
              <CardContent>
                <CardValue>600</CardValue>
                <CardLabel>Utilisateurs</CardLabel>
                <CardDesc>Je ne sais pas quoi mettre</CardDesc>
              </CardContent>
            </StatCard>
          </CardsGrid>
          <CardsGrid>
             <StatCard>
              <CardIcon bg={cardColors.emails}><FaEnvelope /></CardIcon>
              <CardContent>
                <CardValue>25</CardValue>
                <CardLabel>Emails</CardLabel>
                <CardDesc>Je ne sais pas quoi mettre</CardDesc>
              </CardContent>
            </StatCard>
            <StatCard>
              <CardIcon bg={cardColors.hotels}><FaHotel /></CardIcon>
              <CardContent>
              <CardValue>40</CardValue>
                <CardLabel>Hotels</CardLabel>
                <CardDesc>Je ne sais pas quoi mettre</CardDesc>
              </CardContent>
            </StatCard>
            <StatCard>
              <CardIcon bg={cardColors.entrees}><FaList /></CardIcon>
              <CardContent>
                <CardValue>02</CardValue>
                <CardLabel>Entités</CardLabel>
                <CardDesc>Je ne sais pas quoi mettre</CardDesc>
              </CardContent>
            </StatCard>
          </CardsGrid>
        </WelcomeBlock>
      </Main>
    </Layout>
  );
}