import type { Order } from "../../types/Order";
import OrderStatusBadge from "./OrderStatusBadge";

interface Props {
  orders: Order[];
  onView: (order: Order) => void;
}

export default function OrdersTable({
  orders,
  onView,
}: Props) {


    function formatOrderDate(createdAt: any) {

  if (!createdAt) {

    return "-";

  }

  if (typeof createdAt.toDate === "function") {

    return createdAt
      .toDate()
      .toLocaleDateString();

  }

  return new Date(createdAt)
    .toLocaleDateString();

}


  return (

    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-6 py-4 text-left">
              Order ID
            </th>

            <th className="px-6 py-4 text-left">
              Customer
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-left">
              Total
            </th>

            <th className="px-6 py-4 text-left">
              Date
            </th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {orders.length === 0 ? (

            <tr>

              <td
                colSpan={6}
                className="py-10 text-center text-gray-500"
              >

                No orders found.

              </td>

            </tr>

          ) : (

            orders.map((order) => (

              <tr
                key={order.id}
                className="border-t"
              >

                <td className="px-6 py-4">

                  {order.id?.slice(0, 8)}...

                </td>

                <td className="px-6 py-4">

                  {order.customerName}

                </td>

               <td className="px-6 py-4">

                 <OrderStatusBadge
                  status={order.status}
                />

                </td>

                <td className="px-6 py-4">

                  R{order.totalAmount.toFixed(2)}

                </td>

                <td className="px-6 py-4">

                    {formatOrderDate(order.createdAt)}

                </td>

                <td className="px-6 py-4 text-center">

               <button
                 onClick={() => onView(order)}
                 className="
                 rounded-lg
                 bg-blue-600
                 px-4
                 py-2
                 text-white
                 hover:bg-blue-700
                        "
                >

                     View

                </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}