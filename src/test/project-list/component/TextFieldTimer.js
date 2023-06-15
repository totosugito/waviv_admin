import {TextField} from "@mui/material";
import React, {useEffect} from "react";


function TextFieldTimer(props) {
    const styles = {
        textSearch: {
            width: "100%",
            marginRight: "10px",
        },
    }

    const [data, setData] = React.useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => props.onTextChanged(data), 500);
        return () => clearTimeout(timeOutId);
    }, [data]);

    return (
        <>
            <TextField fullWidth size={'small'} label={props.label} sx={styles.textSearch}
                       type="text"
                       value={data}
                       onChange={event => setData(event.target.value)}
            />
        </>
    )
}
export default TextFieldTimer