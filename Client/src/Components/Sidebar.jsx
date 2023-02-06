import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { message } from 'antd';
import {
  FaRegUser
} from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GrLogout } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';
import { BsPeople } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [loginUser, setLoginUser] = useState('');
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem('user');
    message.success('Logout Successfull');
    navigate('/Login');
  };

  return (
    <SidebarContainer>
      <SidebarMain>
        <SidebarCard style={{ width: isOpen ? '250px' : '70px' }}>
          <TopSection
            style={{ marginLeft: isOpen ? '0px' : '0px' }}
            className='bars'
          >
            <HiOutlineMenuAlt1 onClick={toggle} />
          </TopSection>
          <Username>
            <h3>R</h3>
            <h2 style={{ display: isOpen ? 'block' : 'none' }}>
              {loginUser && loginUser.username}
            </h2>
          </Username>
          <Border style={{ width: isOpen ? '90%' : '45px' }}></Border>
          <SidebarUl>
            <SidebarLink to="/">
              <div className='icon'>
                <GrGraphQl />
              </div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className='link_text'
              >
                Dashboard
              </div>
            </SidebarLink>
            <SidebarLink to="/masters">
              <div className='icon'>
                <FaRegUser />
              </div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className='link_text'
              >
                Masters
              </div>
            </SidebarLink>
            <SidebarLink to="/transactions">
              <div className='icon'>
                <BsBank />
              </div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className='link_text'
              >
                Transaction
              </div>
            </SidebarLink>
            <SidebarLink to="/customers">
              <div className='icon'>
                <BsPeople />
              </div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className='link_text'
              >
                Customer
              </div>
            </SidebarLink>
            <SidebarLink to="/invoices">
              <div className='icon'>
                <FaFileInvoiceDollar />
              </div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className='link_text'
              >
                Invoice
              </div>
            </SidebarLink>
          </SidebarUl>
          <LogoutBtn
            style={{ display: isOpen ? 'block' : 'none' }}
            className=''
            onClick={logoutHandler}
          >
            <GrLogout className="logIcon" /> Logout
          </LogoutBtn>
        </SidebarCard>
      </SidebarMain>
      <main className={isOpen ? 'mainActive' : 'mainPosition'}>{children}</main>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

const SidebarMain = styled.div`
  width: 100%;
`;

const SidebarCard = styled.div`
  background-color: #333;
  color: #fff;
  height: 100vh;
  transition: all 0.5s;
`;

const TopSection = styled.div`
  padding: 15px 20px;
`;

const Username = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0px 10px;
  margin-top: 10px;

  h3 {
    background-color: lightblue;
    padding: 8px 15px;
    margin-right: 15px;
    border-radius: 50%;
  }
  h2 {
    font-weight: 400;
    color: #fff;
    font-size: 25px;
  }
`;

const Border = styled.div`
  background-color: #fff;
  height: 0.5px;
  border-radius: 9px;
  width: 90%;
  margin: 0px 10px;
  margin-top: 10px;
`;

const SidebarUl = styled.ul`
  padding: 20px 5px;
`;

const LogoutBtn = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: auto;
   padding: 7px 18px;
   width: 70%;
   cursor: pointer;
   background-color: #fff;
   font-size: 20px;
   font-weight: 500;
   outline: none;
   border: none;
   border: 3px solid #333;
   -webkit-box-shadow: 7px 7px 0px 0px rgba(255,255,255,1);
   -moz-box-shadow: 7px 7px 0px 0px rgba(255,255,255,1);
   box-shadow: 7px 7px 0px 0px rgba(255,255,255,1);

   .logIcon {
    font-size: 22px;
    margin-right: 4px;
   }
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  gap: 15px;
  transition: all 0.5s;
  font-size: 20px;

  &:hover {
    background: #fff;
    color: #000;
    transition: all 0.5s;
  }

  .icon {
    font-size: 23px;
  }
  .link_text {
    font-size: 20px;
  }

  .active {
    background: lightskyblue;
    color: #000;
  }
`;

const DashboardMain = styled.main``;
