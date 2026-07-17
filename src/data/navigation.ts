import {
  FaChartPie,
  FaBoxOpen,
  FaTags,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export const navigation = [
  {
    name: "Dashboard",
    icon: FaChartPie,
    allowedRoles: ["admin", "manager", "seller"],
  },
  {
    name: "Products",
    icon: FaBoxOpen,
    allowedRoles: ["admin", "manager"],
  },
  {
    name: "Categories",
    icon: FaTags,
    allowedRoles: ["admin"],
  },
  {
    name: "Orders",
    icon: FaShoppingCart,
    allowedRoles: ["admin", "manager", "seller"],
  },
  {
    name: "Users",
    icon: FaUsers,
    allowedRoles: ["admin"],
  },
  {
    name: "Analytics",
    icon: FaChartLine,
    allowedRoles: ["admin"],
  },
  {
    name: "Settings",
    icon: FaCog,
    allowedRoles: ["admin"],
  },
  {
    name: "Logout",
    icon: FaSignOutAlt,
    allowedRoles: [
      "admin",
      "manager",
      "seller",
      "supplier",
      "driver",
      "support",
    ],
  },
];