import { Box, IconButton } from "@mui/material";
import AppIcon from "./app_icon";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppSidebar() {
    return (
        <Box
            sx={{
                width: 60,
                height: "100vh",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingY: 2,
            }}
        >
            <AppIcon width={50} height={50} style={{ cursor: "pointer" }}></AppIcon>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                }}
            >
                <IconButton>
                    <HomeIcon sx={{ fontSize: 30, color: "black" }} />
                </IconButton>
                <IconButton>
                    <SearchIcon sx={{ fontSize: 30, color: "gray" }} />
                </IconButton>
                <IconButton>
                    <AddBoxIcon sx={{ fontSize: 30, color: "gray" }} />
                </IconButton>
                <IconButton>
                    <FavoriteBorderIcon sx={{ fontSize: 30, color: "gray" }} />
                </IconButton>
                <IconButton>
                    <PersonOutlineIcon sx={{ fontSize: 30, color: "gray" }} />
                </IconButton>
            </Box>

            <IconButton>
                <MenuIcon sx={{ fontSize: 30, color: "gray" }} />
            </IconButton>
        </Box>
    );
}