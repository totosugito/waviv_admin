import {Box, Button} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useTheme} from "@mui/material/styles";

function PagePagination(props) {
    const theme = useTheme()
    return (
        <>
            <Box alignContent={'center'} alignItems={'center'} textAlign={'center'}>
                <Button startIcon={<ChevronLeftIcon/>} sx={{mr: 2}} disabled={props.data["page"] === 1}
                        onClick={props.onClickBack}>
                    Previous
                </Button>
                <Button endIcon={<ChevronRightIcon/>} sx={{ml: 2}} disabled={props.data["isLast"]}
                        onClick={props.onClickNext}>
                    Next
                </Button>
            </Box>
        </>
    )
}

export default PagePagination