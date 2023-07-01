import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #1976d2;
  }
  &:hover {
    background-color: blue;
  }
`;
export const Nav = styled.nav`
  gap: 15px;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 100px;
`;
