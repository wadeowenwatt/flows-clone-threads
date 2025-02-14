import { Box, Container, Select } from "@mui/material";
// import Link from "next/link";
import AppIcon from "./components/app_icon";
import AppHeader from "./components/app_header";
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
    <Container maxWidth="lg">
      <AppHeader></AppHeader>
    </Container>
  );
}
