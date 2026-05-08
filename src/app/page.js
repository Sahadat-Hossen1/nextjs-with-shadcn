import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      <h1>this is home page</h1>
      {/* add shadcn button */}
      <Button variant="outline">shadcn button</Button>
      {/*  */}
      <Button variant="default">Default</Button>

      <Button variant="destructive">Delete</Button>

      <Button variant="outline">Outline</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="ghost">Ghost</Button>

      <Button variant="link">Link</Button>
      {/*  */}
      <Button size="sm">Small</Button>

      <Button size="default">Normal</Button>

      <Button size="lg">Large</Button>

      <Button size="icon">+</Button>
      {/*  */}
      <Button className="bg-red-500 hover:bg-red-700 text-white rounded-full px-8">
        Custom Button
      </Button>
    </div>
  );
}
