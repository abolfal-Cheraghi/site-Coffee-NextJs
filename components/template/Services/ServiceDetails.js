import ServiceItem from "@/components/module/ServiceItem/ServiceItem";
import React from "react";

function ServiceDetails({ services }) {
  return (
    <>
      <div class="container-fluid pt-5">
        <div class="container">
          <div class="section-title">
            <h4
              class="text-primary text-uppercase"
              style={{ "letter-spacing": "5px" }}
            >
              Our Services
            </h4>
            <h1 class="display-4">Fresh & Organic Beans</h1>
          </div>
          <div class="row">
            {services.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetails;
