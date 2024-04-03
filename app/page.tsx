import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";

export default function Home() {
  return (
   <main className="md:flex lg:flex">
    <LeftSide />
    <RightSide />
   </main>
  );
}
