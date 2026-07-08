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
  | "orders"
  | "users"
  | "categories"
  | "analytics"
  | "settings";