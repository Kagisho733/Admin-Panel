const notifications = [
  "New order received",
  "Product updated",
  "Customer registered",
];

export default function NotificationDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border z-50">

      <div className="p-4 border-b font-bold">
        Notifications
      </div>

      {notifications.map((item, index) => (
        <div
          key={index}
          className="p-4 hover:bg-gray-100 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
}