import type { MenuListingsConfig } from "@/data/useGetMenuListing";
import { Box } from "@mui/material";
import Link from "next/link";

interface FooterProps {
  menuListings: MenuListingsConfig[];
}

const Footer: React.FC<FooterProps> = ({ menuListings }) => {
  return (
    <Box sx={{ background: "#333", color: "#FFF" }}>
      <Box sx={{ display: "flex", mx: "auto", width: "fit-content" }} gap={2}>
        {menuListings?.map((i, idx) => (
          <Box key={idx} sx={{ py: 4 }}>
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

export default Footer;
