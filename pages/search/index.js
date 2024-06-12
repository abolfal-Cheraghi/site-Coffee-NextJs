import PageHeader from "@/components/module/PageHeader/PageHeader";
import Result from "@/components/template/Search/Result";
import React from "react";

function search({ data }) {
  return (
    <>
      <PageHeader route="Search" />
      <Result searchResult={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch("http://localhost:5000/menu");
  const data = await res.json();

  const searchResult = await data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );

  console.log("searchResult => ", searchResult);

  return {
    props: {
      data: searchResult,
    },
  };
}

export default search;
