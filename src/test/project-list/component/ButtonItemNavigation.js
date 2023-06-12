import {Box, Button} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function ButtonItemNavigation(props) {
    return(
        <>
            <Box alignContent={'center'} alignItems={'center'} textAlign={'center'}>
                <Button startIcon={<ChevronLeftIcon/>} sx={{mr: 2}}>
                    Previous
                </Button>
                <Button endIcon={<ChevronRightIcon/>}  sx={{ml: 2}}>
                    Next
                </Button>
            </Box>
        </>
    )
}
export default ButtonItemNavigation