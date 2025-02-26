import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateCustomer } from "@/app/ui/customers/buttons";
import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from "next";
import { TableRowSkeleton, CustomerRowSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = { title: "Customers" };

export default async function Page() {
  const query = "";
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
        <CreateCustomer />
      </div>
      <Suspense key={query} fallback={<CustomerRowSkeleton />}></Suspense>
      {/* <TableRowSkeleton /> */}
    </div>
  );
}
