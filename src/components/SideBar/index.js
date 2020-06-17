import React from 'react';
import { Container, Card, CardItem, Rotas } from './styles';

const data = [
  {
    id: 0,
    url: "/home",
    title: "Overview",
  },
  {
    id: 1,
    url: "/getmessage",
    title: "GET /message",
  },
  {
    id:2,
    url: "/postmessage",
    title: "POST /message/<string>",
  },
  {
    id:4,
    url: "/live",
    title: "GET /live",
  },
  {
    id:3,
    url: "/getmemory",
    title: "memory_usage",
  },
  
]



function SideBar() {
  
  return (
    <Container>
      <Card>
        { data.map(a => (
        <CardItem key={a.id}>
            <Rotas 
            to={a.url} 
            activeClassName="link-active">        
              <div>
                <h2>{ a.title }</h2>
              </div>
            </Rotas>
        </CardItem>
        ) ) }
      </Card>
    </Container>
  )
}

export default SideBar;