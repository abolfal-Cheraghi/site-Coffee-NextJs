import Comments from "@/components/template/Product/Comments";
import ProductDetails from "@/components/template/Product/ProductDetails";
import React from "react";

function Product({ dataProduct, dataComments }) {
  return (
    <>
      <ProductDetails data={dataProduct} />
      <Comments data={dataComments} />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:5000/menu`);
  const products = await res.json();

  const paths = products.map((item) => ({ params: { id: item.id } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  // fatch product
  const productResponse = await fetch(
    `http://localhost:5000/menu/${params.id}`
  );
  const dataProduct = await productResponse.json();
  // fatch comments
  const commentsResponse = await fetch(
    `http://localhost:5000/comments/?productID=${params.id}`
  );
  const dataComments = await commentsResponse.json();
  return {
    props: {
      dataProduct,
      dataComments,
    },
    revalidate: 60 * 60 * 12,
  };
}

export default Product;
