import {useEffect, useState} from "react";
import UserNavBar from "./component/UserNavBar";
import {Button, Container, Divider, Stack, TextField, Toolbar} from "@mui/material";
import ProjectItem from "./component/ProjectItem";
import PagePagination from "./component/PagePagination";
import {getRouterApi} from "../../routes/router-api";
import {httpGet} from "../../services/api-service";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import {useNavigate} from "react-router-dom";
import ButtonMenu from "./component/ButtonMenu";
import TextFieldTimer from "./component/TextFieldTimer";

const ProjectList = () => {
    const navigate = useNavigate()
    const styles = {
        buttonAdd: {
            minWidth: "100px",
            pt: "6px",
            pb: "6px",
        }
    }

    const defaultPageParam = {
        total: 1, page: 1, limit: 5, isLast: false, needPagination: true,
        tags: "", sort: "", order: "", type: ""
    }
    const [data, setData] = useState({projects: []});
    const [pageParam, setPageParam] = useState(defaultPageParam)

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
        if (obj["order"] !== "")
            param_url += "&order=" + obj["order"]
        if (obj["type"] !== "")
            param_url += "&type=" + obj["type"]

        return {value: param_url}
    }

    const set_sort_by_key = (key, value) => {
        let new_value = pageParam
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

    const onSearchTextFieldChanged = (v) => {
        console.log(v)
    }

    return (
        <>
            <UserNavBar/>
            <Container>
                <Toolbar sx={{mt: 2}}/>

                <Stack direction="row" spacing={1}>

                    <TextFieldTimer label={'Find a project ...'} onTextChanged={onSearchTextFieldChanged}/>

                    {/*  ADD FILTER BY Project type */}
                    <ButtonMenu title={"Project Type"}
                                menus={[{"key": "all", text: "All"},
                                    {"key": "public", text: "Public Project"},
                                    {"key": "private", text: "Private Project"}
                                ]}
                                selected={pageParam["type"]}
                                onFilterSelected={(v) => set_sort_by_key("type", v)}
                    />

                    {/*  ADD FILTER BY Sorting type */}
                    <ButtonMenu title={"Sorting"}
                                menus={[{"key": "date", text: "Last updated"},
                                    {"key": "name", text: "Name"},
                                    {"key": "star", text: "Star"}]}
                                selected={pageParam["sort"]}
                                onFilterSelected={(v) => set_sort_by_key("sort", v)}
                    />

                    {/*  ADD FILTER BY Sorting order */}
                    <ButtonMenu title={"Sort Order"}
                                menus={[{"key": "desc", text: "Descending"},
                                    {"key": "asc", text: "Ascending"}]}
                                selected={pageParam["order"]}
                                onFilterSelected={(v) => set_sort_by_key("order", v)}
                    />

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