import Navbar from "./navbar";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-4  shadow-lg ">
      <h1 className="w-2/12 bg-amber-200">logo</h1>
      <input
        type="text"
        placeholder="Search"
        className="w-4/12  border border-gray-300 rounded-md p-2"
      />
      <div className="w-5/12 flex justify-end">
        <Navbar />
      </div>
      
    </div>
  );
}
