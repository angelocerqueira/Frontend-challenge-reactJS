import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import {Container, Content, Title, Msg  } from './styles';
 
export default function GetMessage() {
    const [msg, setMsg ] = useState([]);

  useEffect( () => {
    async function getmsg(){
      const response = await api.get(`/message`);
      const a = response.data;
      return setMsg(a);
    }
    getmsg();
  }, [msg]);
  

  return (

    <Container>
      <Content>
        <Title>return </Title>
        <Msg>{msg}</Msg>
      </Content>
    </Container>
  );
  }

