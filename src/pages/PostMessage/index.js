import React, { useEffect, useState } from 'react';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client';

import api from '../../services/api';
import {
  Container, 
  InputText,
  Content, 
  Button
} from './styles'

function PostMessage() {
  const [ string, setString ] = useState([]);
  
  function handleSubmit(data, { resetForm }){
    const { mensagem } = data;
    setString(mensagem); 
    console.log(mensagem)
    const socket = io('http://3.128.102.225');
    socket.emit('postLive', mensagem);
    toaaast();
    resetForm();
  }

  useEffect(()=> {
    async function postmessage(){
      const response = await api.post(`/message/?string=${string}`)
      console.log(response);
    }
    postmessage();
    },[string])
 
  const toaaast = () => {
    toast.dark('Saved message with success!', {
      autoClose: 5000,
      pauseOnHover: true,
      transition: Zoom, 
    });
  }
  
  return (
    <>
   <Container>
     <Content onSubmit={handleSubmit}>
       <InputText  id="clearmsg" name="mensagem" type="text" />
       <Button type="submit" >enviar</Button>    
        </Content>
   </Container>
</>
 )
}

export default PostMessage;