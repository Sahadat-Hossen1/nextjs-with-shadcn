import Navbar from "./navbar";
import { SidebarTrigger } from "./ui/sidebar";

export default function Header() {
  return (
    <div className="w-full  flex items-center justify-between py-4 bg-sidebar shadow-lg ">
      {/* <h1 className="w-2/12 bg-amber-200">logo</h1> */}
      <SidebarTrigger/>
      <input
        type="text"
        placeholder="Search"
        className="w-3/12  border border-gray-300 rounded-md p-2"
      />
      <div className="w-8/12 flex justify-end">
        <Navbar />
      </div>
      
    </div>
  );
}
