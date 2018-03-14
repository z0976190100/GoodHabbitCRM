import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Planner from "../views/Planner/Planner.js";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import ContragentDossie from "views/Contragents/ContragentDossie.jsx";
//import Typography from "views/Typography/Typography.jsx";
//import Icons from "views/Icons/Icons.jsx";
//import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
    Dashboard, Person, ContentPaste, LibraryBooks, BubbleChart, LocationOn, Notifications, Wc
} from 'material-ui-icons';

const appRoutes = [
    { path: "/dashboard", sidebarName: "Статистика", navbarName: "Статистика", icon: Dashboard, component: DashboardPage },
    { path: "/table", sidebarName: "Сделки", navbarName: "Сделки", icon: ContentPaste, component: TableList },
    //{ path: "/typography", sidebarName: "Typography", navbarName: "Typography", icon: LibraryBooks, component: Typography },
    //{ path: "/icons", sidebarName: "Icons", navbarName: "Icons", icon: BubbleChart, component: Icons },
   // { path: "/maps", sidebarName: "Карты", navbarName: "Карта", icon: LocationOn, component: Maps },
    { path: "/contragent", sidebarName: "Контрагент", navbarName: "Контрагент", icon: Wc, component:ContragentDossie  },
    //{ path: "/user", sidebarName: "Профиль", navbarName: "Профиль", icon: Person, component: UserProfile },
    { path: "/merchant", sidebarName: "Менеджер", navbarName: "Менеджер", icon: Person, component: UserProfile },
    { path: "/planner", sidebarName: "ToDoList", navbarName: "ToDoList", icon: Dashboard, component: Planner },
    { path: "/notifications", sidebarName: "Оповещения", navbarName: "Оповещения", icon: Notifications, component: NotificationsPage },
    { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
