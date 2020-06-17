import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  background-color: #222;
  min-height: 100%;
  position: fixed;
  box-shadow: 1px 0px 1px 1px #111;
  color: #fff;
  min-width: 300px;
  z-index: 0;
  margin-top: 6em;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardItem = styled.div`
 .link-active {
    color: red;
  }
 
  div {
    cursor: pointer;
    padding: 20px;
    margin-top: 20px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
    background: #666;
  }

  }
`;

export const Rotas = styled(NavLink)`
  color: white;
  text-decoration: none;
  

`;

