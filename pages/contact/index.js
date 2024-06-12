import PageHeader from "@/components/module/PageHeader/PageHeader";
import ContactDetails from "@/components/template/Contact/ContactDetails";
import React from "react";

function Contact() {
  return (
    <>
      <PageHeader route="Contact" />
      <ContactDetails />
    </>
  );
}

export default Contact;
