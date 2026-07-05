export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id?: string;

  customerName: string;
  customerEmail: string;

  items: OrderItem[];

  totalAmount: number;

  status: OrderStatus;

  createdAt?: any;
}