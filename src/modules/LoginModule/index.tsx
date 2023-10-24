import { useCheckAuth } from "@/hooks/useCheckAuth";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginModule: React.FC = () => {
  const router = useRouter();
  const isAuth = useCheckAuth();

  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [showError, setShowError] = useState(false);

  if (isAuth) router.push("/");

  const account = [
    {
      uname: "superadmin",
      pwd: "12345",
    },
    {
      uname: "manager",
      pwd: "00000",
    },
    {
      uname: "chief",
      pwd: "11111",
    },
  ];

  function handleClick() {
    const checkAcc = account.find((i) => i.uname === uname && i.pwd === pwd);
    if (!checkAcc) {
      setShowError(true);
      return;
    }
    setShowError(false);
    window?.localStorage?.setItem("auth", `auth-${uname}`);
    router.push("/");
  }

  return (
    <Box
      sx={{
        boxShadow: "1px 1px 10px #d9d9d9",
        p: 4,
        mx: "auto",
        width: { xs: "100%", md: "480px" },
      }}
    >
      <Grid container rowGap={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            label="Username"
            onChange={(e) => setUname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            label="Password"
            onChange={(e) => setPwd(e.target.value)}
          />
        </Grid>
      </Grid>
      {showError && (
        <Box mt={2} sx={{ color: "#b7021d" }}>
          Incorrect username or password. Please try again
        </Box>
      )}
      <Button
        onClick={handleClick}
        fullWidth
        sx={{ mt: 2, py: 2 }}
        variant="outlined"
      >
        Proceed
      </Button>
    </Box>
  );
};

export default LoginModule;
