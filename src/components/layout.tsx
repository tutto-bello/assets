import { AppBar, Container, Typography, Box } from "@mui/material";
import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#FFFFFF",
          boxShadow: "none",
          borderBottom: "1px solid #D7D7D7",
        }}
      >
        <Container maxWidth="xl">
          <Box display="flex" py={1} alignItems="center">
            <Box
              sx={{
                backgroundColor: "#F5F0F9",
                width: "40px",
                height: "40px",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src="/logo.svg" alt="logo" width="24" height={24} />
            </Box>
            <Typography fontSize={22} ml={2}>
              Assets
            </Typography>
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {children}
      </Container>
    </main>
  );
};

export default Layout;
