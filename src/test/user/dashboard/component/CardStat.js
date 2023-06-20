import {Card, Grid, IconButton, Link, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

function CardStat(props) {
    const theme = useTheme()
    const styles = {
        value: {
            fontSize: "150%",
            fontWeight: 'bold'
        },
        label: {
            fontSize: "100%",
            color: theme.palette.text.secondary
        },
        image: {
            size: "large"
        }
    }
    return(
        <Link underline={'none'} href={props.href}>
            <Card sx={{p: 2}}>
                <Grid container alignItems={'center'}>
                    <Grid item sx={{flexGrow: 1}}>
                        <Typography sx={styles.value}>{props.value}</Typography>
                        <Typography sx={styles.label}>{props.label}</Typography>
                    </Grid>
                    <Grid item textAlign={'right'} alignItems={'right'} alignContent={'right'}>
                        {props.image}
                    </Grid>
                </Grid>
            </Card>
        </Link>
    )
}
export default CardStat