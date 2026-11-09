import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

// Auth
import Login from './pages/Login';

// Vendor Portal Pages
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import Inventory from './pages/Inventory';
import Finance from './pages/Finance';
import StoreWallet from './pages/StoreWallet';
import StoreSettings from './pages/StoreSettings';

// Super Admin Portal Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminTopStores from './pages/admin/AdminTopStores';
import AdminStores from './pages/admin/AdminStores';
import AdminApproveReject from './pages/admin/AdminApproveReject';
import AdminRiders from './pages/admin/AdminRiders';
import AdminCustomers from './pages/admin/AdminCustomers';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import AdminInventory from './pages/admin/AdminInventory';
import AdminFinance from './pages/admin/AdminFinance';
import AdminReports from './pages/admin/AdminReports';
import AdminNotifications from './pages/admin/AdminNotifications';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Route */}
        <Route path="/login" element={<Login />} />

        {/* Normal Portal (Vendor / Store Manager) Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetails />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="finance" element={<Finance />} />
          <Route path="wallet" element={<StoreWallet />} />
          <Route path="settings" element={<StoreSettings />} />
        </Route>

        {/* Super Admin Portal Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="stores" element={<AdminStores />} />
          <Route path="stores/top" element={<AdminTopStores />} />
          <Route path="stores/approve-reject" element={<AdminApproveReject />} />
          <Route path="riders" element={<AdminRiders />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="inventory" element={<AdminInventory />} />
          <Route path="finance" element={<AdminFinance />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="notifications" element={<AdminNotifications />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
