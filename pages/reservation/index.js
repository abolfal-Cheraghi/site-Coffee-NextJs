import PageHeader from "@/components/module/PageHeader/PageHeader";
import ReservationDetail from "@/components/template/Reservation/ReservationDetail";
import React from "react";

function Reservation() {
  return (
    <>
      <PageHeader route="Reservation" />
      <ReservationDetail />
    </>
  );
}

export default Reservation;
