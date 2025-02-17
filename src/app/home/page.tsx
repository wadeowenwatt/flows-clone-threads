import { Box } from "@mui/material";
import { SuperText } from "./components/super_text";

export default function Dashboard() {
    return (
        <Box display={'flex'} sx={{
            border: '1px solid gray',
            borderRadius: 20,
            
        }}>

            <SuperText textSuper="Ao that day"></SuperText>

        </Box>
        
    );
}