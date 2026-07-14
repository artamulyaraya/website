import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/WhyChooseUs";
import Capability from "../Components/Capability";
import Workflow from "../Components/Workflow";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Capability />
      <Workflow />
      <CTA />
      <Footer />
    </>
  );
}