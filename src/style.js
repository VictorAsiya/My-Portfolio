import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(108, 53, 53);
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  height: 100%
  z-index: 1;
  padding-right: 20px;
  // background-color:rgb(172, 34, 34);
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: white;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const Li = styled.li`

a{
  text-decoration: none;
  color: white;
  cursor: pointer;
}


  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    transition: width 0.3s ease-in-out;
  }

  &.active::after {
    width: 100%;
    background-color: #fbbf24;
  }
    
  &:hover::after {
    width: 100%;
    background-color: #38bdf8;
  }

  &:hover.active::after {
    background-color: #fbbf24;
  }
}
`;

export const HomeDiv = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(7, 7, 7);
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #38bdf8;
  // color: #FBBF24;

  &:hover {
    background-color: #fbbf24;
    color: #ffffff;
    font-weight: 600;
  }
`;
