import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useGetMenuListings from "@/data/useGetMenuListing";
import { Box, Container } from "@mui/material";

interface LayoutModuleProps {
  children: React.ReactNode;
}

const LayoutModule: React.FC<LayoutModuleProps> = ({ children }) => {
  // Use dummy data for menu listings
  const { data } = useGetMenuListings();

  return (
    <Box>
      <Header logo="BMIC" menuListings={data} />
      <Container sx={{ minHeight: "80vh", mt: 4 }}>{children}</Container>
      <Footer menuListings={data} text="All right reserved" />
    </Box>
  );
};

export default LayoutModule;
