import PageHeader from "@/components/module/PageHeader/PageHeader";
import Pricing from "@/components/template/Menu/Pricing";
import React from "react";

function Menu({ menu }) {
  return (
    <>
      <PageHeader route="Menu" />
      <Pricing menu={menu} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/menu");
  const data = await res.json();
  return {
    props: {
      menu: data,
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Menu;
