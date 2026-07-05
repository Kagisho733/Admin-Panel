import { useEffect, useState } from "react";

import type { Order } from "../../types/Order";

import { getOrders } from "../../services/orderService";

import OrdersTable from "../../components/orders/OrdersTable";
import OrderDetailsModal from "../../components/orders/OrderDetailsModal";

export default function OrdersPage() {

  const [orders, setOrders] =
    useState<Order[]>([]);

  const [loading, setLoading] =
    useState(true);

    const [selectedOrder, setSelectedOrder] =
  useState<Order | null>(null);

const [detailsOpen, setDetailsOpen] =
  useState(false);

  function handleViewOrder(order: Order) {

  setSelectedOrder(order);

  setDetailsOpen(true);

}

  async function loadOrders() {

    try {

      const data = await getOrders();

      setOrders(data);

    } catch (error) {

      console.error(
        "Error loading orders:",
        error
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadOrders();

  }, []);

  if (loading) {

    return (

      <div className="text-center py-20">

        Loading Orders...

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">

          Orders

        </h1>

        <p className="text-gray-500 mt-2">

          Manage customer orders.

        </p>

      </div>

 <OrdersTable
  orders={orders}
  onView={handleViewOrder}
/>


<OrderDetailsModal
  open={detailsOpen}
  order={selectedOrder}
  onClose={() => {

    setDetailsOpen(false);

    setSelectedOrder(null);

  }}
  onStatusUpdated={loadOrders}
/>

    </div>

  );

  

}

