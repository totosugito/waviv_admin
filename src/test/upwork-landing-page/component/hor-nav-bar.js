import './hor-nav-bar.css'
import {Box, Button} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function HorNavBar(props) {
    const styles = {
        box_menu: {
            width: '100%',
            maxWidth: "360px",
            minWidth: '200px',
            border: 1,
            borderColor: '#EAFCF0',
            bgcolor: '#EAFCF0',
            borderRadius: '5px'
        },
        button_menu: {
            width: '100%',
            display: 'flex',
            justifyContent: "flex-start"
        }
    }

    return (
        <Box sx={{p: 1}}>
            <nav>
                <ul>
                    <li><a href="#">Development & IT</a></li>
                    <li><a href="#">Design & Creative</a></li>
                    <li><a href="#">Sales & Marketing</a></li>
                    <li><a href="#">Writing & Translation</a></li>
                    <li><a href="#">Admin & Customer Support</a></li>
                    <li><a>More<ExpandMoreIcon sx={{fontSize: '18px', paddingTop: '5px'}}/></a>
                        <ul>

                            <Box sx={styles.box_menu}>
                                <Button variant="link" style={styles.button_menu}>Finance & Accounting</Button>
                                <Button variant="link" style={styles.button_menu}>HR & Training</Button>
                                <Button variant="link" style={styles.button_menu}>Legal</Button>
                                <Button variant="link" style={styles.button_menu}>Engineering</Button>
                                <Button variant="link" style={styles.button_menu}>See All Specializations</Button>
                            </Box>
                        </ul>
                    </li>
                </ul>
            </nav>
        </Box>
    )
}

export default HorNavBar