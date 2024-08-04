import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="bg-background">
       <Header />
      </div>
      <div className="flex justify-center border py-2">
        <Menu />
      </div>
      <div className="flex justify-center border py-2">
       Sample main content
      </div>
    </main>
  );
}
