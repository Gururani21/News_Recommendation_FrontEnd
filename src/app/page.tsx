import DivSeprater from "@/components/ui/DivSeprater/DivSeprater";
import HeroSection from "@/components/ui/HeroSection";
import { BentoGridPost } from "@/components/ui/Post/BenotGrid";
import Post from "@/components/ui/Post/Post";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <DivSeprater />
        <BentoGridPost />
        <DivSeprater />
        <Post />
      </main>
    </>
  );
}
