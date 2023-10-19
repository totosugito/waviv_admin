import {Avatar, Card, Grid, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
const CardItem = ({label, value, logo, bgcolor}) => {
    const theme = useTheme()
    const styles = {
        card: {
            p: 2
        },
        grid: {
            minWidth: 150,
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        cardLabel: {
            color: theme.palette.text.secondary
        },
        cardValue: {
            color: theme.palette.text.primary,
            fontSize: '150%',
            fontWeight: 'bold'
        }
    }
    return (
        <>
            <Card sx={styles.card}>
                <Grid container sx={styles.grid}>
                    <Grid item>
                        <Typography sx={styles.cardLabel}>{label}</Typography>
                        <Typography sx={styles.cardValue}>{value}</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar sx={{bgcolor: bgcolor}}>
                            {logo}
                        </Avatar>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}
export default CardItem