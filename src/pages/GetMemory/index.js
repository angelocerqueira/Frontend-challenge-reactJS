import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import { Container, Content, Title, List, Item } from './styles';

export default function GetMemory() {
  const [memory, setMemory ] = useState([]);

  useEffect( () => {
    async function getmemory(){
      const dados = []
      const response = await api.get(`/memory_usage`);
      dados.push(response.data);
  console.log(dados)
     
      return setMemory(dados);
    }
    getmemory();
    }, [memory]);
    
  console.log(memory)

  return (
    <Container>
      <Content>
      
      <Title>Memory usage </Title>
      {memory.map(a => (
        <List key={a._id}>
          <Item> <b>HEAP TOTAL: </b>
            {a.heapTotal} Mb</Item>
          <Item><b>HEAP USED: </b> {a.heapUsed} Mb </Item>
          <Item><b>RSS: </b> {a.rss} Mb</Item>
        </List>
      ))
    }      
    </Content>
     </Container>
  );
  }
