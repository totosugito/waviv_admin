import {Box, Link, Stack, Typography} from "@mui/material";
import Marquee from "react-fast-marquee";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import {useTheme} from "@mui/material/styles";

const RunningText = ({data, animSpeed, logoWidth, logoHeight}) => {
    const theme = useTheme()
    const styles = {
        stack: {
            alignItems: "center",
        },
        stackPositive: {
            alignItems: "center",
            color: theme.palette.success.main
        },
        stackNegative: {
            alignItems: "center",
            color: theme.palette.error.main
        },
        textDesc: {
            // fontSize: '100%'
        }
    }
    const createItem = (item) => {
        return (
            <>
                <Link underline={'none'} href="#">
                    <Stack direction={'row'} sx={styles.stack}>
                        <Box
                            component="img"
                            sx={{width: logoWidth ? logoWidth : 32, height: logoHeight ? logoHeight : 32}}
                            src={item["url"]}
                        />
                        <Typography>{item["title"]}</Typography>
                        {
                            item["value"] < 0 ?
                                <Stack direction={'row'} sx={styles.stackNegative}>
                                    <ExpandMoreOutlinedIcon/>
                                    <Typography sx={styles.textDesc}>{item["value"]}</Typography>
                                </Stack>
                                :
                                <Stack direction={'row'} sx={styles.stackPositive}>
                                    <ExpandLessOutlinedIcon/>
                                    <Typography sx={styles.textDesc}>{item["value"]}</Typography>
                                </Stack>
                        }
                    </Stack>
                </Link>
            </>
        )
    }

    return (
        <>
            <Marquee speed={animSpeed ? animSpeed : 30} gradient={true} gradientWidth={30}>
                {data.map((item, idx) => (
                    <Box sx={{mr: 2}} key={idx}>{createItem(item)}</Box>
                ))}
            </Marquee>
        </>
    )
}
export default RunningText