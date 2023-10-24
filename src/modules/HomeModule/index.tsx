import useGetMainApi from "@/data/useGetMainApi";
import { Box } from "@mui/material";

interface HomeModuleProps {
  user: boolean;
}

const HomeModule: React.FC<HomeModuleProps> = ({ user }) => {
  const { data } = useGetMainApi();

  console.log("From Home Page api call", data);

  return (
    <Box>
      <h1>Home</h1>
      <Box mt={2}>
        {!!data
          ? `Api has successfully made a call`
          : user
          ? `Waiting for api call to complete`
          : `Network issue`}
      </Box>
      {!!data && (
        <Box mt={4} sx={{ overflow: "scroll" }}>
          {JSON.stringify(data)}
        </Box>
      )}
    </Box>
  );
};

export default HomeModule;
