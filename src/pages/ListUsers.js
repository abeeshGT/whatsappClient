import React, { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import axios from "axios";
import { Box, Typography, Container } from "@mui/material";

function ListUsers() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/all-whatsapp-users`
      );
      console.log(response.data);
      setUsers(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography>Users</Typography>
      <Container maxWidth="lg" >
        <UserTable users={users} />
      </Container>
    </Box>
  );
}

export default ListUsers;
