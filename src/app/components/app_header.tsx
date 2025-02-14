import { Box, Container, Select, Stack } from "@mui/material";
import AppIcon from "./app_icon";

export default function AppHeader() {
    return (
        <Stack direction={"row"} >
            <AppIcon width={100} height={100} />
            <Box >
                <Select value="For you">
                    
                </Select>
            </Box>
        </Stack>
    );
}