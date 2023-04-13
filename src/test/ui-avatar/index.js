import 'cropperjs/dist/cropper.css';
import AvatarEditor from "./component/avatar-editor";

const UiAvatar = () => {
    const onImageCrop = (img) => {
        // return image dalam format base64 sebagai variable "img"
        console.log(img)
    }
    return (
        <>
            <AvatarEditor width={"300px"} height={"300px"} onImageCrop={onImageCrop}/>
        </>
    )
}
export default UiAvatar;