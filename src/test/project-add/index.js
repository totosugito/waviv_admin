import {useEffect} from "react";
import UserNavBar from "./component/UserNavBar";
import FormProjectAdd from "./component/FormProjectAdd";
import {Container, Toolbar} from "@mui/material";

const ProjectAdd = () => {
    useEffect(() => {
        document.title = "Add Project"
    }, []);

    const onSubmitClicked = (e) => {
        console.log("-----")
        console.log(JSON.stringify(e))
    }
    return (
        <>
            <UserNavBar/>
            <Container>
                <Toolbar sx={{mt: 2}}/>
                <FormProjectAdd onSubmitClicked={onSubmitClicked}/>
            </Container>
        </>
    )
}
export default ProjectAdd;