import LoginModule from "@/modules/LoginModule";
import { Box } from "@mui/material";
import { useState } from "react";

const Login = () => {
  return (
    <Box>
      <Box sx={{ mt: 10 }}>
        <LoginModule />
      </Box>
    </Box>
  );
};

export default Login;
