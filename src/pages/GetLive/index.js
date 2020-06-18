import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import api from '../../services/api';
// import { Container } from './styles';


function GetLive() {
  // const [msg, setMsg ] = useState([]);

  // useEffect( () => {
  //   async function getmsg(){
  //     const response = await api.get(`/message`);
  //     const a = response.data;
  //     return setMsg(a);
  //   }
  //   getmsg();
  // }, [msg]);

  // useEffect( () => {
  //   const socket = io('http://localhost:3333/live');
  // //   socket.emit('my other event', { my: 'data' });
  
  // socket.on('connection', (socket) => {
  //   socket.on('news', { hello: 'world' });
  //   socket.emit('my other event', (data) => {
  //     console.log(data);
  //   });
  // });
  // }, [])
  return (
  <div>
    <h1>asçladk</h1>
  </div>);
}

export default GetLive;