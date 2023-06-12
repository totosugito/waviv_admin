import {useEffect} from "react";
import UserNavBar from "./component/UserNavBar";
import ProjectListHeader from "./component/ProjectListHeader";
import {Container, Divider, Toolbar} from "@mui/material";
import ProjectItem from "./component/ProjectItem";
import ButtonItemNavigation from "./component/ButtonItemNavigation";

const ProjectList = () => {
    useEffect(() => {
        document.title = "Project List"
    }, []);

    const projects = [
        {
            title: "Project A",
            desc: "About project A",
            tags: ["Finance", "Landing", "Design"],
            budget: 1200,
            updated: "Juni 12, 2023 14:00"
        },
        {
            title: "Project B",
            desc: "About project B",
            tags: ["FinanceB", "LandingB", "DesignB"],
            budget: 1200,
            updated: "May 12, 2023 12:00"
        },
        {
            title: "Project C",
            desc: "About project C",
            tags: ["FinanceC", "LandingC", "DesignC"],
            budget: 1200,
            updated: "April 12, 2023 14:00"
        }
    ]
    return (
        <>
            <UserNavBar/>
            <Container>
                <Toolbar sx={{mt: 2}}/>
                <ProjectListHeader/>
                <Divider sx={{mt: 1, mb: 1}}/>
                {projects.map((object, i) => <ProjectItem data={object} key={i}/>)}
                <ButtonItemNavigation/>
            </Container>
        </>
    )
}
export default ProjectList;