import {Button} from "@mui/material";

const ButtonChild = ({row, testOnClick}) => {

    const process = () => {
      testOnClick(row);
    }

    return(
      <>
          <Button variant="contained" onClick={process}>Process</Button>
      </>
    );
}
export default ButtonChild