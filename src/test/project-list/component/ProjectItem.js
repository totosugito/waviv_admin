import {Box, Chip, Divider, Link, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";


function ProjectItem(props) {
    const theme = useTheme()

    const styles = {
        title: {
            fontSize: "130%"
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
            color: theme.palette.text.secondary,
            borderColor: theme.palette.text.secondary,
            fontSize: "75%",
            borderRadius: 4,
            size: 'small'
        },
        textLabel: {

        },
        textValue: {
            color: theme.palette.text.secondary,
        },
        updated: {
            color: theme.palette.text.secondary,
            mt: 1,
            fontSize: "85%",
        }
    }
    return (
        <>
            <Box>
                <Link sx={styles.title}>{props.data["title"]}</Link>
                <Stack direction="row" spacing={1}>
                    {props.data["tags"].map((tag, i) =>
                        <Chip sx={styles.chip} key={i} label={tag} variant="outlined" size={'small'} color={'primary'}
                              onClick={() => props.onTagClick(tag)}/>
                    )}
                </Stack>
                <Stack direction="row" spacing={1} sx={{mt: 1}}>
                    <Typography sx={styles.textLabel}>Year : </Typography><Typography sx={styles.textValue}>{props.data["year"]}</Typography>
                    <div style={{width: "10px"}}/>
                    <Typography sx={styles.textLabel}>Phase : </Typography><Typography sx={styles.textValue}>{props.data["phase"]}</Typography>
                </Stack>
                <Divider sx={styles.divider}/>
            </Box>
        </>
    )
}

export default ProjectItem