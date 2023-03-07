import React, { ReactNode } from "react";
import Footer from "../footer/footer";

type Props = {
  children: ReactNode;
};

export default function PageLayout(props: Props) {
  return (
    <div className="w-full">
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
