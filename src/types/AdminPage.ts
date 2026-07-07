/*
|--------------------------------------------------------------------------
| Admin Pages
|--------------------------------------------------------------------------
| Controls which page is displayed in the admin panel.
|--------------------------------------------------------------------------
*/

export type AdminPage =
  | "dashboard"
  | "products"
  | "categories"
  | "orders"
  | "users"
  | "analytics"
  | "settings";