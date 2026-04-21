import TopBanner from "@/components/sacred/TopBanner";
import Marquee from "@/components/sacred/Marquee";
import Hero from "@/components/sacred/Hero";
import AsSeenIn from "@/components/sacred/AsSeenIn";
import Comments from "@/components/sacred/Comments";
import FinalCTA from "@/components/sacred/FinalCTA";
import Footer from "@/components/sacred/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Marquee />
      <Hero />
      <AsSeenIn />
      <Comments />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;