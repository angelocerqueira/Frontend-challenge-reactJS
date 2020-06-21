import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10em;

  h3, h1 {
    text-transform: uppercase;  
    padding: 2em 0;
  }

  h1 {
    font-weight: bold;
    background: #fff;
    padding: 20px 30px;
border-radius: 10px;
box-shadow: 0 3px 3px 1px #222; 
margin: 2em 0;
  }
`;
