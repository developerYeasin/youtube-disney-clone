import React, { useEffect, useState } from "react";
import { Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth, provider, signInWithPopup, signOut } from "../firebase";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName2 = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    setUserName(userName2);
  }, [userName2]);

  useEffect(() => {
    
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });

  }, [userName2, userName]);

  const handleAuth = () => {
    if (!userName) {
       signInWithPopup(auth, provider)
         .then((result) => {
           const user = result.user;
           setUser(user);
           setUserName(user.displayName);
           navigate('/home')
         })
         .catch((error) => {
           // ...
         });
    } else if (userName) {
   signOut(auth)
     .then(() => {
       navigate('/');
       setUserName('');
     })
     .catch((error) => {
       // An error happened.
     });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src="./images/home-icon.svg" alt="Home" />
              <span>Home</span>
            </Link>
            <Link to="/home">
              <img src="./images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </Link>
            <Link to="/home">
              <img src="./images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </Link>
            <Link to="/home">
              <img src="./images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </Link>
            <Link to="/home">
              <img src="./images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </Link>
            <Link to="/home">
              <img src="./images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <SignOut>
            <UserImage src={userPhoto} alt={userPhoto} />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0%;
  background: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-height: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &::before {
        content: "";
        background: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4x;
        bottom: -6px;
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.4s ease-in-out;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span::before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const Login = styled.a`
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px !important;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  &:hover {
    background: #f9f9f9;
    color: #111;
    border-color: transparent;
  }
`;
const UserImage = styled.img`
  height: 100%;
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  padding: 10px;
  letter-spacing: 3px;
  opacity: 0;
  width: 110px;
  font-size: 14px;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImage} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition: all 0.4s ease-in-out;
    }
  }
`;
export default Header;
