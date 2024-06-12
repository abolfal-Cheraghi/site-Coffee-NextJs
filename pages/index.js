import About from "@/components/template/Index/About";
import Menu from "@/components/template/Index/Menu";
import Offer from "@/components/template/Index/Offer";
import Reservation from "@/components/template/Index/Reservation";
import Services from "@/components/template/Index/Services";
import Slider from "@/components/template/Index/Slider";
import Testimonials from "@/components/template/Index/Testimonials";
export default function Home({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu menu={data.menu} />
      <Reservation />
      <Testimonials comments={data.comments} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:5000/services");
  const servicesData = await servicesResponse.json();

  const menuResponse = await fetch("http://localhost:5000/menu");
  const menuData = await menuResponse.json();

  const comentsResponse = await fetch("http://localhost:5000/comments");
  const commentsData = await comentsResponse.json();

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
        comments: commentsData,
      },
    },
    revalidate: 60 * 60 * 12, //sec
  };
}
