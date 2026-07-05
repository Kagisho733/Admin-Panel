import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import type { AdminPage } from "../types/AdminPage";

interface Props {
  children: React.ReactNode;
  page: AdminPage;
  setPage: React.Dispatch<React.SetStateAction<AdminPage>>;
}

export default function AdminLayout({
  children,
  page,
  setPage,
}: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar
        page={page}
        setPage={setPage}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-72">

        <Topbar />

        <main className="p-8">

          {children}

        </main>

      </div>

    </div>
  );
}