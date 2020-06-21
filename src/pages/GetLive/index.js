import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';
import { Container } from './styles';

function GetLive() {
  const [msg, setMsg ] = useState([]);
  const [socketMsg, setSocketMsg] = useState([]);

  useEffect( () => {
    async function getmsg(){
      const response = await api.get(`/message`);
      const a = response.data;
      return setMsg(a);
    }
      getmsg();
      socketInit();
    }, [msg]);
 
    function socketInit (){
      const socket = io('http://3.128.102.225');
      socket.on('retornoPostLive', data => {
        setSocketMsg(data);
        console.log(data + ' Retorno')
      });
    }

    return (
    <div>
      <Container>
        <h3> Retorno em tempo real, com socket.io: </h3>
        <h1>{ socketMsg|| msg }</h1>
      </Container>
    </div>);
}

export default GetLive;