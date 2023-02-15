import {useEffect} from "react";
import {Box, Button, Container, Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import {styled} from "@mui/material/styles";
import {getRouterUrl} from "../../../routes/router-url";
import Image404 from "assets/images/images/image_404.svg";

const Page404 = () => {
    const StyledContent = styled('div')(({ theme }) => ({
        maxWidth: 480,
        margin: 'auto',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: theme.spacing(12, 0),
    }));

    useEffect(() => {
        document.title = "404 Page Not Found"
    }, []);

    return (
        <>
            <Container>
                <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" paragraph>
                        Sorry, page not found!
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>
                        Sorry, we could’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
                        spelling.
                    </Typography>

                    <Box
                        component="img"
                        src={Image404}
                        sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
                    />

                    <Button to={getRouterUrl("frontpage-user")} size="large" variant="contained" component={Link}>
                        Go to Home
                    </Button>
                </StyledContent>
            </Container>
        </>
    );
}

export default Page404;
