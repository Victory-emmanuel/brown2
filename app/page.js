import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyBook from "@/components/MyBook";
import MyStory from "@/components/MyStory";
import Navbar from "@/components/Navbar";
import ServiceSect from "@/components/ServiceSect";
import SubSect from "@/components/SubSect";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSect />
      <MyStory />
      <SubSect />
      <MyBook />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
}
