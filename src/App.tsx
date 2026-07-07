import { useState } from "react";

import { ThemeProvider } from "./context/ThemeContext";

import AdminLayout from "./layouts/AdminLayout";

import Dashboard from "./pages/Dashboard";

import ProductsPage from "./pages/products/ProductsPage";

import type { AdminPage } from "./types/AdminPage";
import { Toaster } from "react-hot-toast";
import OrdersPage from "./pages/orders/OrdersPage";
import UsersPage from "./pages/users/UsersPage";

export default function App() {

  const [page, setPage] =
    useState<AdminPage>("dashboard");

  function renderPage() {

    switch (page) {

      case "dashboard":
        return <Dashboard />;

      case "products":
        return <ProductsPage />;

      case "orders":
         return <OrdersPage />;
        

      case "users":
      return <UsersPage />;

      case "analytics":
        return (
          <div className="text-3xl font-bold">
            Analytics Coming Soon
          </div>
        );

      case "settings":
        return (
          <div className="text-3xl font-bold">
            Settings Coming Soon
          </div>
        );

      default:
        return <Dashboard />;

    }

  }

return (

  <ThemeProvider>

    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 4000,
        style: {
          borderRadius: "12px",
          background: "#1e293b",
          color: "#fff",
        },
      }}
    />

    <AdminLayout
      page={page}
      setPage={setPage}
    >

      {renderPage()}

    </AdminLayout>

  </ThemeProvider>

);

}