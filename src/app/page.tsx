import { Box, Typography } from "@mui/material";
// import Link from "next/link";
import AppHeader from "./components/app_header";
import AppSidebar from "./components/app_sidebar";
import Dashboard from "./home/page";
type Post = {
  id: number;
  user: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
};


export default function Home() {
  return (
    <Box display={"flex"} height={"100vh"}>
      <AppSidebar/>
      <Box display={"flex"} flex={1} flexDirection={"column"} alignItems={"center"}>
        <AppHeader />
        <Box flex={1} padding={2} >
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
}
