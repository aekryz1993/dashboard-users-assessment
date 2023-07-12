/** @jsxImportSource @emotion/react */
import DashboardIcon from "@/assets/icons/Dashboard.svg";
import AnalyticsIcon from "@/assets/icons/Analytics.svg";
import InvoiceIcon from "@/assets/icons/Invoice.svg";
import ScheduleIcon from "@/assets/icons/Schedule.svg";
import CalendarIcon from "@/assets/icons/Calendar.svg";
import MessagesIcon from "@/assets/icons/Messages.svg";
import NotificationIcon from "@/assets/icons/Notification.svg";
import SettingsIcon from "@/assets/icons/Settings.svg";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { linksContainerStyle } from "./styles";

const links = [
  { name: "Dashboard", route: "/dashboard", icon: DashboardIcon },
  { name: "Analytics", route: "analytics", icon: AnalyticsIcon },
  { name: "Invoice", route: "/", icon: InvoiceIcon },
  { name: "Schedule", route: "/schedule", icon: ScheduleIcon },
  { name: "Calendar", route: "/calendar", icon: CalendarIcon },
  { name: "Messages", route: "/messages", icon: MessagesIcon },
  { name: "Notification", route: "/notification", icon: NotificationIcon },
  { name: "Settings", route: "/settings", icon: SettingsIcon },
];

function Links() {
  return (
    <Stack direction="column">
      {links.map((link) => (
        <NavLink to={link.route} key={link.name}>
          {({ isActive }) => (
            <Stack
              direction="row"
              paddingLeft={2}
              alignItems="center"
              justifyContent="space-start"
              gap={2}
              css={linksContainerStyle}
              className={isActive ? "link-active" : "link-inactive"}
            >
              <img src={link.icon} width="20rem" height="20rem" className={isActive ? "link-active--icon" : "link-inactive--icon"} />
              <span className={isActive ? "link-active--label" : "link-inactive--label"}>{link.name}</span>
            </Stack>
          )}
        </NavLink>
      ))}
    </Stack>
  );
}

export default Links;
