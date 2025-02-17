import { Box, Container, Divider, Icon, IconButton, Stack, Typography } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function AppHeader() {
    return (
        <Box display='flex' gap={1} paddingTop={1}  >
            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>For you</Typography>
            <IconButton
                sx={{
                    border: "1px solid #ddd",
                    borderRadius: "50%",
                    width: 28,
                    height: 28,
                    backgroundColor: "white",
                    "&:hover": { backgroundColor: "#f5f5f5" } // Hover
                }}
            >
                <ExpandMoreIcon sx={{ color: "black" }}></ExpandMoreIcon>
            </IconButton>
        </Box>
    );
}