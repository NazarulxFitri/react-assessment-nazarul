import { useCheckAuth } from "@/hooks/useCheckAuth";
import LoginModule from "@/modules/LoginModule";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const isAuth = useCheckAuth();

  if (isAuth) router.push("/");

  return (
    <Box>
      <Box sx={{ mt: 10 }}>
        <LoginModule />
      </Box>
    </Box>
  );
};

export default Login;
