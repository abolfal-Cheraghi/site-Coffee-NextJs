import PageHeader from "@/components/module/PageHeader/PageHeader";
import ServiceDetails from "@/components/template/Services/ServiceDetails";
import React from "react";

function Services({ data }) {
  return (
    <>
      <PageHeader route="Services" />
      <ServiceDetails services={data.services} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/services");
  const data = await res.json();

  return {
    props: {
      data: {
        services: data,
      },
    },
  };
}

export default Services;
