// import Header from "@/components/Header";
import CardList from '@/components/card/cardList';
import Header from './../components/header';
// import CardList from '/components/card/cardList';


export default function Home() {
  return (
     <div className="space-y-4">
      <h2 className="text-3xl font-bold bg-sidebar">
        Welcome 👋
      </h2>

      <p className="text-muted-foreground">
        This is the main content area. hello devoloper
      </p>

      <CardList />
      {/* <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-6">
          Card 1
        </div>

        <div className="rounded-xl border p-6">
          Card 2
        </div>

        <div className="rounded-xl border p-6">
          Card 3
        </div>
      </div> */}
    </div>
  );
}
