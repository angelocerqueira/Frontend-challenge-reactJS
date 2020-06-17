import styled from 'styled-components';

import{Form, Input} from '@rocketseat/unform';
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
padding: 200px 0 0 0;
`;

export const Content = styled(Form)`
  padding: 20px 30px; 
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
margin-bottom: 5px; 
text-transform: uppercase;
text-align: center;

`; 

export const InputText = styled(Input)`
  padding: 5px;
  border: 0;
  border-bottom: 2px solid #222;
  width: 200px;
  height: 38px;
  &:focus{
  outline: none;
  box-shadow: 0.2rem 0.8rem 1.6rem #555;
  }
  /* background: blue; */
`;

export const Button = styled.button`
  border: 0;
  height: 38px;
  /* margin-left: 10px; */
  /* border-radius: 0px 10px 10px  0px; */
  padding: 0 20px;
  color: white;
  background: #222;
  text-transform: uppercase;
  transition: background  .6s ease;
  &:hover{
    background: #555;

  }
`;