/*
|--------------------------------------------------------------------------
| Dashboard Mock Data
|--------------------------------------------------------------------------
| This file simulates data before connecting to Firebase.
| Later we'll fetch this information from Firestore.
|--------------------------------------------------------------------------
*/

export const quickActions = [
  {
    title: "Add Product",
    description: "Create a new product",
  },
  {
    title: "Add Category",
    description: "Create a product category",
  },
  {
    title: "Create Order",
    description: "Manually create an order",
  },
  {
    title: "View Analytics",
    description: "Business reports",
  },
];

export const recentOrders = [
  {
    id: "#1001",
    customer: "John Smith",
    total: "R1 250",
    status: "Completed",
  },
  {
    id: "#1002",
    customer: "Sarah Jones",
    total: "R780",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Michael Brown",
    total: "R2 100",
    status: "Completed",
  },
];

export const recentActivity = [
  {
    title: "Drone X200 added",
    time: "5 minutes ago",
  },
  {
    title: "Order #1002 created",
    time: "20 minutes ago",
  },
  {
    title: "New customer registered",
    time: "1 hour ago",
  },
  {
    title: "Analytics report generated",
    time: "Today",
  },
];