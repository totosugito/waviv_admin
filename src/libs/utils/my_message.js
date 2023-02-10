
export function createMessageError(msg, title="Error") {
    return({
        id: -1,
        title: title,
        msg: msg
    })
}

export function createMessageSuccess(msg, title="Success") {
    return({
        id: 0,
        title: title,
        msg: msg
    })
}

export function createMessageWarning(msg, title="Warning") {
    return({
        id: 1,
        title: title,
        msg: msg
    })
}