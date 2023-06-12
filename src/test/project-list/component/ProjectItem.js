import {Box, Chip, Divider, Link, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";


function ProjectItem(props) {
    const theme = useTheme()

    const styles = {
        title: {
            fontSize: "150%"
        },
        desc: {
            color: theme.palette.text.secondary,
            mb: 1
        },
        divider: {
            mt: 1,
            mb: 1
        },
        chip: {
            fontSize: "90%",
            borderRadius: 4,
            size: 'small'
        },
        updated: {
            color: theme.palette.text.secondary,
            mt: 1,
            fontSize: "80%",
        }
    }
    return (
        <>
            <Box>
                <Link sx={styles.title}>{props.data["title"]}</Link>
                <Typography sx={styles.desc}>{props.data["desc"]}</Typography>
                <Stack direction="row" spacing={1}>
                    {props.data["tags"].map((tag, i) => <Chip sx={styles.chip} key={i} label={tag} variant="outlined" size={'small'} color={'primary'}/>)}
                </Stack>
                <Typography sx={styles.updated}>Updated on : {props.data["updated"]}</Typography>
                <Divider sx={styles.divider}/>
            </Box>
        </>
    )
}

export default ProjectItem