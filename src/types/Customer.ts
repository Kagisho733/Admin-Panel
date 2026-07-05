export interface Customer {

  id?: string;

  firstName: string;

  lastName: string;

  email: string;

  phone: string;

  avatar?: string;

  totalOrders: number;

  totalSpent: number;

  createdAt?: any;

}