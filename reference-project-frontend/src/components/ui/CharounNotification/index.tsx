import { notification, NotificationArgsProps } from "antd";

type NotificationType = "success" | "info" | "error" | "warning";

const callNotification = (
  type: NotificationType,
  message: string,
  description?: string,
  placement: NotificationArgsProps["placement"] = "topRight"
): void => {
  notification[type]({
    message: message,
    description: description || "",
    placement: placement,
    duration: 3,
  });
};

export default callNotification;
