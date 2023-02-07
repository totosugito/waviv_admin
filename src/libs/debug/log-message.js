import {showDebug} from "../../config";

export function showLog(msg, v) {
    if(!showDebug)
        return

    console.log(msg)
    console.log(JSON.stringify(v))
}