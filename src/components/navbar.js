import { Bell, Heart, ShoppingBagIcon, User } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import { ModeToggle } from "./dark";

export default function Navbar() {
  return (
    <NavigationMenu className=" px-4 ">
        <NavigationMenuList className="gap-4  ">
           
            {/* dark mode button */}
            <NavigationMenuItem>
                {/* <button className="border border-gray-300 rounded-md p-2">Dark Mode</button> */}
                <ModeToggle/>
            </NavigationMenuItem>
            {/* shoping cart */}
            <NavigationMenuItem>
                <ShoppingBagIcon/>
            </NavigationMenuItem>
            {/* whitelist */}
            <NavigationMenuItem>
                <Heart/>
            </NavigationMenuItem>
            {/* notification */}
            <NavigationMenuItem>
                <Bell/>
            </NavigationMenuItem>
            {/* profile */}
            <NavigationMenuItem>
                <User/>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  );
}
