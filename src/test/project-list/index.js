import {useEffect, useState} from "react";
import UserNavBar from "./component/UserNavBar";
import {Button, Container, Divider, Stack, TextField, Toolbar} from "@mui/material";
import ProjectItem from "./component/ProjectItem";
import PagePagination from "./component/PagePagination";
import {getRouterApi} from "../../routes/router-api";
import {httpGet} from "../../services/api-service";
import ProjectSortMenu from "./component/ProjectSortMenu";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import {useNavigate} from "react-router-dom";

const ProjectList = () => {
    const navigate = useNavigate()
    const styles = {
        gridSearch: {
            width: "50%",
            minWidth: "30%",
            maxWidth: "100%"
        },
        textSearch: {
            width: "100%",
            marginRight: "10px",
        },
        buttonAdd: {
            width: "100px",
            marginLeft: "10px",
            pt: "6px",
            pb: "6px",
        }
    }

    const defaultPageParam = {
        total: 1, page: 1, limit: 5, isLast: false, needPagination: true,
        tags: "", sort: "",
    }
    const [data, setData] = useState({projects: []});
    const [pageParam, setPageParam] = useState({...defaultPageParam})

    useEffect(() => {
        document.title = "Project List"
    }, []);

    useEffect(() => {
        http_project_find({value: ""}).then(r => {
        });
    }, []);

    function obj_to_param(obj) {
        let param_url = "?page=" + obj["page"].toString()
        param_url += "&limit=" + obj["limit"].toString()
        if (obj["tags"] !== "")
            param_url += "&tags=" + obj["tags"]
        if (obj["sort"] !== "")
            param_url += "&sort=" + obj["sort"]
        return {value: param_url}
    }

    const set_sort_by_key = (key, value) => {
        let new_value = {...defaultPageParam}
        new_value[key] = value
        setPageParam(new_value)
        let http_param = obj_to_param(new_value)
        http_project_find(http_param).then(r => {
        })
    }

    const set_pagination_page = (key, value) => {
        let new_value = {...pageParam}
        new_value[key] = value
        setPageParam(new_value)
        let http_param = obj_to_param(new_value)
        http_project_find(http_param).then(r => {
        })
    }

    const http_project_find = async (param) => {
        await httpGet(getRouterApi("project-find", param), {}).then((v) => {
            if (v.isError) {
                setData({projects: []});
            } else {
                setData(v.data);
                setPageParam({
                    ...pageParam,
                    total: v.data["total"],
                    page: v.data["page"],
                    limit: v.data["limit"],
                    isLast: (v.data["page"] * v.data["limit"]) >= v.data["total"],
                    needPagination: v.data["total"] > v.data["limit"]
                })
            }
        });
    }

    return (
        <>
            <UserNavBar/>
            <Container>
                <Toolbar sx={{mt: 2}}/>

                <Stack direction="row">
                    <TextField fullWidth size={'small'} label={'Find a project ...'} sx={styles.textSearch}/>
                    <ProjectSortMenu filterKey={["date", "name", "star"]} selected={pageParam}
                                     onFilterSelected={(v) => set_sort_by_key("sort", v)}/>
                    <Button sx={styles.buttonAdd} variant="contained" size={'small'} startIcon={<AddCircleOutlineIcon/>}
                            onClick={() => navigate("/project-add")}>New</Button>
                </Stack>

                <Divider sx={{mt: 1, mb: 1}}/>

                {data["projects"].map((object, i) =>
                    <ProjectItem data={object} key={i} onTagClick={(v) => set_sort_by_key("tags", v)}/>)}

                {pageParam["needPagination"] &&
                    <PagePagination data={pageParam}
                                    onBackClick={() => set_pagination_page("page", pageParam["page"] - 1)}
                                    onNextClick={() => set_pagination_page("page", pageParam["page"] + 1)}
                    />
                }
            </Container>
        </>
    )
}
export default ProjectList;