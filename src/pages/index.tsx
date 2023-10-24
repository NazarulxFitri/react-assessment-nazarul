import HomeModule from "@/modules/HomeModule";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [attemptLogin, setAttemtLogin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAuth = !!window?.localStorage?.getItem("auth");
      const attemptLogin = !!window?.localStorage.getItem("attempt-login");
      setIsAuth(isAuth);
      setAttemtLogin(attemptLogin);
    }
    setLoading(false);
  }, []);

  if (loading) return null;

  if (!isAuth)
    return (
      <Box>
        <Box sx={{ mt: 10 }} textAlign={"center"}>
          <p style={{ marginBottom: "40px" }}>
            You are not allowed to access this site. Please login first to get
            authentication
          </p>
          <Link href="/login">
            <Button variant="outlined">Go to Login</Button>
          </Link>
        </Box>
      </Box>
    );

  return (
    <Box>
      <HomeModule user={isAuth} />
    </Box>
  );
}
