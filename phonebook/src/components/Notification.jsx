
const Notification = ({ notification }) => {

    if (notification === null) return;
    const { isError, message } = notification;
    if (isError !== false && isError !== true) return;
    if (!message) return
    console.log(notification, message, isError)
    const basicStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    const notificationStyle = isError ? { ...basicStyle, color: 'red' } : { ...basicStyle, color: 'green' }
    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification