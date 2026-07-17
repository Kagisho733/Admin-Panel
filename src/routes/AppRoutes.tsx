import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LoginPage from "../pages/auth/LoginPage";
import Dashboard from "../pages/Dashboard";
import ProductsPage from "../pages/products/ProductsPage";
import CategoriesPage from "../pages/categories/CategoriesPage";
import OrdersPage from "../pages/orders/OrdersPage";
import UsersPage from "../pages/users/UsersPage";
import AnalyticsPage from "../pages/analytics/AnalyticsPage";

import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import RoleGuard from "./RoleGuard";

export default function AppRoutes() {

    const { user, loading } = useAuth();

    if (loading) {

        return <div>Loading...</div>;

    }

    return (

        <Routes>

            <Route
                path="/"
                element={
                    user
                        ? <Navigate to="/dashboard" replace />
                        : <Navigate to="/login" replace />
                }
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />

            <Route
                element={
                    <ProtectedRoute>
                        <RoleGuard allowedRoles={["admin"]}>
                            <AdminLayout />
                        </RoleGuard>
                    </ProtectedRoute>
                }
            >

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/products"
                    element={<ProductsPage />}
                />

                <Route
                    path="/categories"
                    element={<CategoriesPage />}
                />

                <Route
                    path="/orders"
                    element={<OrdersPage />}
                />

                <Route
                    path="/users"
                    element={<UsersPage />}
                />

                <Route
                    path="/analytics"
                    element={<AnalyticsPage />}
                />

            </Route>

        </Routes>

    );

}