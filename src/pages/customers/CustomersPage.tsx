import { useEffect, useState } from "react";

import type { Customer } from "../../types/Customer";

import { getCustomers } from "../../services/customerService";

export default function CustomersPage() {

  const [customers, setCustomers] =
    useState<Customer[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function loadCustomers() {

    try {

      const data =
        await getCustomers();

      setCustomers(data);

    } catch (error) {

      console.error(
        "Error loading customers:",
        error
      );

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadCustomers();

  }, []);

  if (loading) {

    return (

      <div className="text-center py-20">

        Loading Customers...

      </div>

    );

  }

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">

          Customers

        </h1>

        <p className="mt-2 text-gray-500">

          Manage all registered customers.

        </p>

      </div>

      <p className="text-gray-500">

        {customers.length} customer(s) found.

      </p>

    </div>

  );

}