import HomeBanner from "@/components/HomeBanner";
import OurStory from "@/components/OurStory";
import ItStartsWithGrain from "@/components/ItStartsWithGrain";
import ProductRange from "@/components/ProductRange";
import PaddyToPack from "@/components/PaddyToPack";
import Infrastructure from "@/components/Infrastructure";
import Quality from "@/components/Quality";
import GlobalReach from "@/components/GlobalReach";
import WhoWeServe from "@/components/WhoWeServe";
import BusinessCTA from "@/components/BusinessCTA";

export const metadata = {
  title: "BNK Rice Exports | Premium Indian Rice Exporters",
  description:
    "BNK delivers the richness of Indian rice to international buyers with consistency, scale and trust.",
  alternates: { canonical: "/" },
};

const page = () => {
  return (
    <main>
      <div className="banner-bg-pseudo ">
        <HomeBanner />
        <OurStory />
      </div>
      
      <ItStartsWithGrain />
      <ProductRange />
      <PaddyToPack />
      <Infrastructure />
      <Quality />
      <GlobalReach />
      <WhoWeServe />
      <BusinessCTA />
    </main>
  );
};

export default page;
