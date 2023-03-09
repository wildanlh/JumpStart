import PageHead from "@/components/header/pageHead";
import InventoryLayout from "@/components/layouts/inventoryLayout";
import InventoryTable from "@/components/table/inventoryTable";
import React from "react";

export default function SuppliersPage() {
  return (
    <>
      <PageHead pageTitle="Suppliers | JumpStart" />
      <InventoryLayout>
        <InventoryTable />
      </InventoryLayout>
    </>
  );
}
