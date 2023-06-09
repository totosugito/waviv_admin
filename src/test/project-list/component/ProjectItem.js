import {Box, Chip, Divider, Link, Stack, Typography} from "@mui/material";


function ProjectItem(props) {
    const styles = {
        title: {
            fontSize: "150%"
        },
        desc: {},
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