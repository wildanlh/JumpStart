import Button from "@/components/forms/button";
import Img from "@/components/forms/img";
import Input from "@/components/forms/input";
import Select from "@/components/forms/select";
import SideForm from "@/components/forms/sideForm";
import PageHead from "@/components/header/pageHead";
import InventoryLayout from "@/components/layouts/inventoryLayout";
import InventoryTable from "@/components/table/inventoryTable";
import Image from "next/image";
import React from "react";

const options = ["John Doe", "Jane Doe", "Bob Smith"];

export default function SalesReportPage() {
  return (
    <>
      <PageHead pageTitle=" Sales Report | JumpStart" />
      <InventoryLayout>
        <InventoryTable tableTitle="Sales Report" />
        <SideForm>
          <div className="flex justify-between content-between">
            <h1 className="text-xl text-blue font-bold font-poppins">
              Sales Report
            </h1>
            <button>
              <Image
                src="images/trash.svg"
                alt="logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>
          <form action="" className="my-5">
            <h1 className="text-base text-blue font-bold font-poppins">ID</h1>
            <h1 className="text-base text-blue font-bold font-poppins">Date</h1>
            <div className="rounded-md shadow-sm text-base font-inter">
              <Img src="images/iphone.svg" alt="iphone" />

              <Input
                label="Product Name"
                id="productName"
                placeholder="Product Name"
              />
              <Input label="Quantity" id="quantity" placeholder="Quantity" />
              <Input label="Revenue" id="revenue" placeholder="Revenue" />
              <Input label="FullName" id="fullName" placeholder="FullName" />
              <Input label="Sold By" id="soldBy" placeholder="Sold By" />
            </div>
          </form>
        </SideForm>
      </InventoryLayout>
    </>
  );
}
