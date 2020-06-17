import styled from 'styled-components';


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
padding: 200px 0 0 0;
`;

export const Content = styled.div`
background: white;
padding: 20px 30px;
border-radius: 10px;
box-shadow: 0 3px 3px 1px #222; 
;
`;

export const Title = styled.h1`
margin-bottom: 5px; 
text-transform: uppercase;
text-align: center;

`; 

export const Msg = styled.h5`
  padding-top: 15px;
  font-size: 1.4em;
  text-align: center;
  color: green;
  border-top: 1px solid black;

`;
