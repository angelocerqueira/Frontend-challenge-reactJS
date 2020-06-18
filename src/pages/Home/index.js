import React from 'react';
import { Container, Content, Title, SubTitle,Resume } from './styles';

const repository = [
  {   
      url: 'https://github.com/angelocerqueira/Frontend-challenge-reactJS',
      content:'FrontEnd - ReactJS'
  },
  {   
    url: 'https://github.com/angelocerqueira/challenge-node',
    content:'BackEnd - NodeJS'
},
];

  const  endPonts = [
    {
      id: 1,
   
      title: "GET / message",
      content: 'Retorna a String salva',
    },
    {
      id: 2,
      
      title: "POST /message/<string>",
      content: 'Salva a string no MongoDB',
    },
    {
      id:4,
     
      title: "GET /live",
      content: 'Retorna a String em tempo real',
    },
    {
      id:3,
    
      title: "memory_usage",
      content: "Retorna a quantidade de memória RAM utilizada pelo processo do Node.js",
    },
]

function Home() {
  return (
    <Container>
      <Title>OverView</Title>
      <Content>
     <Resume>
       <p>BACKEND da aplicação desenvolvido em REACTJS e Backend em NodeJS </p>
       <p>O backend foi hospedado em uma instancia EC2 da Amazon Web Services criada gratuitamente). O frontend no heroku.</p>
      </Resume>
      <SubTitle> Repositório:  </SubTitle>
        { repository.map(a => (
          <div key={a.url}>
            <a href={a.url} target="_blank" rel="noopener noreferrer"> {a.content} </a>
          </div>
          ))
        }
          
 
    <SubTitle>EndPoints: </SubTitle>
          <div>
            {endPonts.map(b => (
              <div key={b.id}>
                <SubTitle> {b.title}</SubTitle>
            <p>{b.content}</p>
              </div>
            ))}
          </div>
      </Content> 
    </Container>
  ) ;
}

export default Home;