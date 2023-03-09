import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import SideForm from "../forms/sideForm";
import Sidebar from "../sidebar/sidebar";

type Props = {
  children: ReactNode;
};

const links = [
  { icon: "/images/dashboard.svg", href: "/dashboard", label: "Dashboard" },
  { icon: "/images/truck.svg", href: "/suppliers", label: "Suppliers" },
  { icon: "/images/box.svg", href: "/products", label: "Products" },
  { icon: "/images/customers.svg", href: "/customers", label: "Customers" },
  {
    icon: "/images/archive.svg",
    href: "/current-stock",
    label: "Current Stocks",
  },
  {
    icon: "/images/clipboard.svg",
    href: "/sales-report",
    label: "Sales Report",
  },
  { icon: "/images/user.svg", href: "/users", label: "Users" },
];

export default function InventoryLayout(props: Props) {
  const router = useRouter();
  const isDashboardPage = router.pathname === "/dashboard";

  return (
    <div className="w-full">
      <Sidebar logoSrc="images/logo.svg" links={links} />
      <main>{props.children}</main>
      {!isDashboardPage && <SideForm />}
    </div>
  );
}
