import Global from "./styles/global";
import styled from "styled-components"
import Form from "./components/form";
import Grid from "./components/grid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (err){
      toast.error(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers]) // sempre que for setado um usuário, ele vai recarregar.

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form/>
        <Grid users={users}/>
      </Container>
      
      <ToastContainer autoClose={3000} position="bottom-left"/>
      

      <Global/>
    </>
  );
}

export default App;
