import {Box, Button, Container, Grid, IconButton, Typography} from "@mui/material";
import MuiDialog from "./component/MuiDialog";
import {useState} from "react";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const DemoDialog = () => {
    const [openDialogText, setOpenDialogText] = useState(false);
    const [openDialogStyle, setOpenDialogStyle] = useState(false);

    const dialogTextOnCancelClicked = () => {
        setOpenDialogText(false)
    }
    const dialogTextOnConfirmClicked = () => {
        setOpenDialogText(false)
    }

    const dialogStyleOnCancelClicked = () => {
        setOpenDialogStyle(false)
    }
    const dialogStyleOnConfirmClicked = () => {
        setOpenDialogStyle(false)
    }

    return (
        <>
            <Grid container sx={{p: 2}} spacing={2}>
                {/*   DIALOG TEXT  */}
                <Grid item>
                    <Button variant={'contained'} onClick={() => setOpenDialogText(true)}>DIALOG TEXT ONLY</Button>
                    <MuiDialog
                        open={openDialogText}
                        title={"Dialog Text"}
                        contents={"ini contoh dialog dengan isi text"}
                        cancelText={"Cancel"}
                        confirmText={"Process"}
                        onCancelClicked={dialogTextOnCancelClicked}
                        onConfirmClicked={dialogTextOnConfirmClicked}
                    />
                </Grid>

                {/*   DIALOG WITH COMPONENT  */}
                <Grid item>
                    <Button variant={'contained'} onClick={() => setOpenDialogStyle(true)}>DIALOG WITH STYLE</Button>
                    <MuiDialog
                        open={openDialogStyle}
                        title={<Box textAlign={'center'}><Typography variant={'h3'}>Dialog Style</Typography></Box>}
                        contents={
                        <>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <QuestionMarkIcon style={{fontSize: "60px"}}/>
                                </Grid>
                                <Grid item sx={{maxWidth: '300px'}}>
                                    <Box>
                                    <Typography>Let Google help apps determine location.
                                        This means sending anonymous location data to Google, even when no apps are running.</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </>
                        }
                        cancelText={"Cancel"}
                        confirmText={"Process"}
                        onCancelClicked={dialogStyleOnCancelClicked}
                        onConfirmClicked={dialogStyleOnConfirmClicked}
                    />
                </Grid>
            </Grid>
        </>
    )
}
export default DemoDialog