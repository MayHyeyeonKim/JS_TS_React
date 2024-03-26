import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
    {
        id: 1,
        message: "hi hi hi",
    },
    {
        id: 2,
        message: "hello hello hello",
    },
    {
        id: 3,
        message: "The meeting is going to get started soon"
    },
]

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    // #버튼: 백엔드 초록->빨강->초록

    componentDidUpdate(){

    }

    componentWillUnmount(){

    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return(
                        <Notification 
                            key = {notification.id}
                            id = {notification.id}
                            message={notification.message} 
                            />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;