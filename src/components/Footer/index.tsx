import type { MenuListingsConfig } from "@/data/useGetMenuListing";
import { Box } from "@mui/material";
import Link from "next/link";

interface FooterProps {
  text: string;
  menuListings: MenuListingsConfig[];
}

const Footer: React.FC<FooterProps> = ({ text, menuListings }) => {
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
      <Box sx={{ borderTop: "1px solid #EFEFEF", py: 2, textAlign: "center" }}>
        {text}
      </Box>
    </Box>
  );
};

export default Footer;
