import type { MenuListingsConfig } from "@/data/useGetMenuListing";
import { Box } from "@mui/material";
import Link from "next/link";

interface HeaderProps {
  logo: string;
  menuListings: MenuListingsConfig[];
}

const Header: React.FC<HeaderProps> = ({ logo, menuListings }) => {
  return (
    <Box
      sx={{
        background: "#b7021d",
        color: "#FFF",
        display: "flex",
        py: 2,
        px: 4,
      }}
    >
      <Box>
        <h1>{logo}</h1>
      </Box>
      <Box m="auto 0 auto auto" display="flex" gap={2}>
        {menuListings?.map((i, idx) => (
          <Box key={idx}>
            <Link
              style={{ color: "#FFF", textDecoration: "none" }}
              href={i.cta}
            >
              {i.text}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
