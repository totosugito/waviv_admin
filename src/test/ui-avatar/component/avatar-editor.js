import {Box, Button, Grid} from "@mui/material";
import {Cropper} from "react-cropper";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import CropIcon from '@mui/icons-material/Crop';
import {useRef, useState} from "react";

function AvatarEditor(props) {
    const [image, setImage] = useState();
    const [hasImage, setHasImage] = useState(false);
    const cropperRef = useRef(null);
    const [cropData, setCropData] = useState('#');
    const getCropData = () => {
        if (typeof cropperRef.current?.cropper !== 'undefined') {
            const cropper = cropperRef.current?.cropper;
            const v = cropper.getCroppedCanvas().toDataURL();
            setCropData(v);
            props.onImageCrop(v);
        }
    };
    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
            setHasImage(true);
        };
        reader.readAsDataURL(files[0]);
    };

    return (
        <>
            <Box sx={{width: props.width, height: props.height}}>
            <Grid container sx={{mb: 1}} direction="row" alignItems="flex-end" justifyContent="space-between">
                <Grid item>
                    <Button component="label" variant="outlined" size={'small'} startIcon={<ImageSearchIcon/>}>
                        Select image
                        <input type="file" accept="image/*" hidden onChange={onChange}/>
                    </Button>
                </Grid>
                <Grid item>
                    {
                        hasImage &&
                        <Button variant="outlined" size={'small'} startIcon={<CropIcon/>} onClick={getCropData}>
                            Crop
                        </Button>
                    }
                </Grid>
            </Grid>

            <Grid>
                <Grid item>
                    <Cropper
                        style={{height: props.height, width: '100%'}}
                        initialAspectRatio={16 / 9}
                        preview=".img-preview"
                        guides={true}
                        src={image}
                        ref={cropperRef}
                        dragMode={'move'}
                        checkOrientation={true}
                    />
                </Grid>
            </Grid>
            </Box>
        </>
    )
}

export default AvatarEditor