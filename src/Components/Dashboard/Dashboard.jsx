// pages/Dashboard.jsx
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaHotel, FaUsers, FaList, FaRegEnvelope } from "react-icons/fa";
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
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
`;

const SearchBar = styled.input`
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
  grid-template-columns: repeat(3, 350px);
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
  return (
    <Layout>
      <Sidebar>
        <SidebarHeader>RED PRODUCT</SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem to="/" end>Principal</SidebarMenuItem>
          <SidebarMenuItem to="/dashboard">Dashboard</SidebarMenuItem>
          <SidebarMenuItem to="/hotels">Hotels</SidebarMenuItem>
        </SidebarMenu>
        <SidebarFooter>
          <Avatar><BsFillPersonFill /></Avatar>
          <UserInfo>
            <UserName>Mamadou Doucs</UserName>
            <UserStatus>En ligne</UserStatus>
          </UserInfo>
        </SidebarFooter>
      </Sidebar>

      <Main>
        <Header>
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>Dashboard</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchBar placeholder="Recherche" />
            <HeaderIcons>
              <FaEnvelope />
              <BsFillPersonFill />
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





// import React, { useState } from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import { FaEnvelope, FaHotel, FaUsers, FaList, FaRegEnvelope } from "react-icons/fa";
// import { MdOutlineMessage } from "react-icons/md";
// import { BsFillPersonFill } from "react-icons/bs";

// const cardColors = {
//   formulaires: "#a084e8",
//   emails: "#f24e4e",
//   messages: "#3ec7b4",
//   hotels: "#a084e8",
//   utilisateurs: "#ffd600",
//   entrees: "#3e7cb4",
// };

// const Layout = styled.div`
//   display: flex;
//   min-height: 100vh;
//   background: #f7f7f7;
//   position: relative;
// `;

// const Sidebar = styled.aside`
//   width: 260px;
//   background: #36393d;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   padding-top: 1.5rem;

//   @media (max-width: 768px) {
//     position: fixed;
//     top: 0;
//     left: ${(props) => (props.open ? "0" : "-260px")};
//     height: 100%;
//     z-index: 1000;
//     transition: left 0.3s ease-in-out;
//   }
// `;

// const SidebarHeader = styled.div`
//   font-size: 1.25rem;
//   font-weight: 700;
//   padding-left: 2rem;
//   margin-bottom: 2.5rem;
// `;

// const SidebarMenu = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const SidebarMenuItem = styled(NavLink)`
//   display: block;
//   padding: 0.9rem 2rem;
//   text-decoration: none;
//   color: #bdbdbd;
//   border-left: 4px solid transparent;
//   font-weight: 400;

//   &.active {
//     color: #232428;
//     background: #fff;
//     border-left: 4px solid #fff;
//     font-weight: 600;
//   }
// `;

// const SidebarFooter = styled.div`
//   margin-top: auto;
//   padding: 2rem;
//   background: #2d2f34;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const Avatar = styled.div`
//   background: #fff;
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #a084e8;
//   font-size: 1.4rem;
// `;

// const UserInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const UserName = styled.div`
//   font-weight: 500;
// `;

// const UserStatus = styled.div`
//   font-size: 0.85rem;
//   color: #7bffb2;
// `;

// const Main = styled.main`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   margin-left: 260px;

//   @media (max-width: 768px) {
//     margin-left: 0;
//   }
// `;

// const Header = styled.header`
//   background: #fff;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   padding: 0 1rem;
//   justify-content: space-between;
//   border-bottom: 1px solid #ececec;

//   @media (max-width: 600px) {
//     flex-direction: column;
//     height: auto;
//     gap: 0.5rem;
//     padding: 1rem;
//   }
// `;

// const ToggleButton = styled.button`
//   background: transparent;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
//   color: #333;
//   display: none;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const SearchBar = styled.input`
//   background: #fff;
//   border: 1px solid #ececec;
//   border-radius: 20px;
//   padding: 0.5rem 1rem;
//   font-size: 1rem;
//   width: 100%;
//   max-width: 300px;

//   @media (max-width: 600px) {
//     width: 100%;
//   }
// `;

// const HeaderIcons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const WelcomeBlock = styled.section`
//   padding: 2rem;

//   @media (max-width: 600px) {
//     padding: 1rem;
//   }
// `;

// const WelcomeTitle = styled.h2`
//   font-size: 1.3rem;
//   color: #232323;

//   @media (max-width: 600px) {
//     font-size: 1.1rem;
//   }
// `;

// const WelcomeSubtitle = styled.p`
//   color: #999;
//   font-size: 0.95rem;

//   @media (max-width: 600px) {
//     font-size: 0.85rem;
//   }
// `;

// const CardsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//   gap: 1.2rem;
//   margin-top: 1.5rem;
// `;

// const StatCard = styled.div`
//   background: #fff;
//   border-radius: 8px;
//   box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
//   padding: 1.2rem;
//   display: flex;
//   align-items: center;
// `;

// const CardIcon = styled.div`
//   background: ${(props) => props.bg};
//   color: #fff;
//   font-size: 1.4rem;
//   width: 46px;
//   height: 46px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   margin-right: 1rem;
// `;

// const CardContent = styled.div``;

// const CardValue = styled.div`
//   font-size: 1.1rem;
//   font-weight: bold;
//   color: #232323;
// `;

// const CardLabel = styled.div`
//   font-size: 0.95rem;
//   color: #777;
// `;

// const CardDesc = styled.div`
//   font-size: 1rem;
//   color: #bdbdbd;
//   font-weight: bold;
//   margin-top: 0.2rem;
// `;

// export default function Dashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <Layout>
//       <Sidebar open={sidebarOpen}>
//         <SidebarHeader>RED PRODUCT</SidebarHeader>
//         <SidebarMenu>
//           <SidebarMenuItem to="/" end>Principal</SidebarMenuItem>
//           <SidebarMenuItem to="/dashboard">Dashboard</SidebarMenuItem>
//           <SidebarMenuItem to="/hotels">Hotels</SidebarMenuItem>
//         </SidebarMenu>
//         <SidebarFooter>
//           <Avatar><BsFillPersonFill /></Avatar>
//           <UserInfo>
//             <UserName>Mamadou Doucs</UserName>
//             <UserStatus>En ligne</UserStatus>
//           </UserInfo>
//         </SidebarFooter>
//       </Sidebar>

//       <Main>
//         <Header>
//           <ToggleButton onClick={() => setSidebarOpen(!sidebarOpen)}>☰</ToggleButton>
//           <div style={{ fontWeight: "bold", fontSize: "20px" }}>Dashboard</div>
//           <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//             <SearchBar placeholder="Recherche" />
//             <HeaderIcons>
//               <FaEnvelope />
//               <BsFillPersonFill />
//             </HeaderIcons>
//           </div>
//         </Header>

//         <WelcomeBlock>
//           <WelcomeTitle>Bienvenue sur RED Product</WelcomeTitle>
//           <WelcomeSubtitle>Lorem ipsum dolor sit amet consectetur</WelcomeSubtitle>

//           <CardsGrid>
//             <StatCard>
//               <CardIcon bg={cardColors.formulaires}><FaRegEnvelope /></CardIcon>
//               <CardContent>
//                 <CardValue>125</CardValue>
//                 <CardLabel>Formulaires</CardLabel>
//                 <CardDesc>Je ne sais pas quoi mettre</CardDesc>
//               </CardContent>
//             </StatCard>
//             <StatCard>
//               <CardIcon bg={cardColors.messages}><MdOutlineMessage /></CardIcon>
//               <CardContent>
//                 <CardValue>40</CardValue>
//                 <CardLabel>Messages</CardLabel>
//                 <CardDesc>Je ne sais pas quoi mettre</CardDesc>
//               </CardContent>
//             </StatCard>
//             <StatCard>
//               <CardIcon bg={cardColors.utilisateurs}><FaUsers /></CardIcon>
//               <CardContent>
//                 <CardValue>600</CardValue>
//                 <CardLabel>Utilisateurs</CardLabel>
//                 <CardDesc>Je ne sais pas quoi mettre</CardDesc>
//               </CardContent>
//             </StatCard>
//             <StatCard>
//               <CardIcon bg={cardColors.emails}><FaEnvelope /></CardIcon>
//               <CardContent>
//                 <CardValue>25</CardValue>
//                 <CardLabel>Emails</CardLabel>
//                 <CardDesc></CardDesc>
//                             <CardValue>25</CardValue>
//                 <CardLabel>Emails</CardLabel>
//                 <CardDesc>Je ne sais pas quoi mettre</CardDesc>
//               </CardContent>
//             </StatCard>

//             <StatCard>
//               <CardIcon bg={cardColors.hotels}><FaHotel /></CardIcon>
//               <CardContent>
//                 <CardValue>40</CardValue>
//                 <CardLabel>Hotels</CardLabel>
//                 <CardDesc>Je ne sais pas quoi mettre</CardDesc>
//               </CardContent>
//             </StatCard>

//             <StatCard>
//               <CardIcon bg={cardColors.entrees}><FaList /></CardIcon>
//               <CardContent>
//                 <CardValue>02</CardValue>
//                 <CardLabel>Entités</CardLabel>
//                 <CardDesc>Je ne sais pas quoi mettre</CardDesc>
//               </CardContent>
//             </StatCard>
//           </CardsGrid>
//         </WelcomeBlock>
//       </Main>
//     </Layout>
//   );
// }