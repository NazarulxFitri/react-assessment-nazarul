import useGetMainApi from "@/data/useGetMainApi";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

interface HomeModuleProps {
  user: boolean;
}

const HomeModule: React.FC<HomeModuleProps> = ({ user }) => {
  const { data } = useGetMainApi();
  const dataListings = data?.data;

  console.log("xxx", data);

  return (
    <Box mb={4}>
      <h1>Home</h1>
      <Box mt={2}>
        {!!data
          ? `Api has successfully made a call`
          : user
          ? `Waiting for api call to complete`
          : `Network issue`}
      </Box>
      <Grid container spacing={2} mt={2}>
        {dataListings?.map((i) => (
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 2,
                mx: "auto",
                width: "fit-content",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Image
                  src={i.avatar}
                  alt={i.first_name}
                  width={200}
                  height={200}
                  style={{ borderRadius: "80%" }}
                />
              </Box>
              <Box>
                <Typography fontWeight={"700"} variant="body1">
                  {i.first_name} {i.last_name}
                </Typography>
                <Typography variant="body1">{i.email}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeModule;
