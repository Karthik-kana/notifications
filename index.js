const Notification = (props) => {
  //  Write your code here.
  const { notification, className, icon } = props;
  const notificationElement = (
    <div className={className}>
      <img src={icon} className="notification-icon" />
      <p className="description"> {notification} </p>
    </div>
  );
  return notificationElement;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading"> Notifications</h1>
    <Notification
      className="information"
      notification="Information Message"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="success"
      notification="Success Message"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="warning"
      notification="Warning Message"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="danger"
      notification="Error Message"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
