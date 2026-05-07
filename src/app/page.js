import { Button } from "@/components/ui/button";
import About from "./about/page";

export default function Page() {
  return (
    <div>
      <h1>
        this is home page
      </h1>
      <Button>click me</Button>
      <About/>
     {/* <Button>click </Button> */}
    </div>
  );
}