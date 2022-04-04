import React from "react";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import FullBanner from "../../components/FullBanner";
import GridBanners from "../../components/GridBanners";
import Header from "../../components/Header";
import MiddleBanner from "../../components/MiddleBanner";
import Newsletter from "../../components/Newsletter";
import Ruler from "../../components/Ruler";
import Showcase from "../../components/Showcase";
import Testimonials from "../../components/Testimonials";
import Whatsapp from "../../components/Whatsapp";
import { CartProvider } from "../../context/CartContext";

export default function Home() {
  return (
    <main className="page__home">
      <CartProvider>
        <Header />
        <Categories />
        <FullBanner />
        <Ruler />
        <GridBanners />
        <Showcase />
        <MiddleBanner />
        <Testimonials />
        <Newsletter />
        <Footer />
        <Whatsapp />
      </CartProvider>
    </main>
  );
}
