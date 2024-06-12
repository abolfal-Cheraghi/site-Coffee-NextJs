import PageHeader from "@/components/module/PageHeader/PageHeader";
import Comment from "@/components/template/Testimonial/Comment";
import React from "react";

function Testimonial({ comment }) {
  return (
    <>
      <PageHeader route="Testimonial" />
      <Comment comments={comment} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/comments");
  const data = await res.json();
  return {
    props: {
      comment: data,
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Testimonial;
