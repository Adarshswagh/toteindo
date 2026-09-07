import Hero from "./components/Hero";
import BrandIntro from "./components/BrandIntro";
import FeaturedProducts from "./components/FeaturedProducts";
import CategorySection from "./components/CategorySection";
import WhyToteindo from "./components/WhyToteindo";
import LifestyleSection from "./components/LifestyleSection";
import CraftSection from "./components/CraftSection";
import SustainabilitySection from "./components/SustainabilitySection";
import BrandStatement from "./components/BrandStatement";
import BulkOrders from "./components/BulkOrders";
import SocialSection from "./components/SocialSection";
import Newsletter from "./components/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedProducts />
      <CategorySection />
      <WhyToteindo />
      <LifestyleSection />
      <CraftSection />
      <SustainabilitySection />
      <BrandStatement />
      <BulkOrders />
      <SocialSection />
      <Newsletter />
    </>
  );
}
