import Cat from "../../assets/sidebarImages/cat.svg";
import Services from "../../assets/sidebarImages/services.svg";
import Log from "../../assets/sidebarImages/log.svg";
import Buy from "../../assets/sidebarImages/buy.svg";
import Card from "../../assets/sidebarImages/card.svg";
import Text from "../../assets/sidebarImages/text.svg";
import Person from "../../assets/sidebarImages/person.svg";
import Gear from "../../assets/sidebarImages/gear.svg";

interface SideBarOptions {
  name: string;
  Icon: string;
  href: string;
}

export const options: SideBarOptions[] = [
  {
    name: "Catálogo",
    Icon: Cat,
    href: "/catalog",
  },
  {
    name: "Serviços",
    Icon: Services,
    href: "/services",
  },
  {
    name: "Logísitica",
    Icon: Log,
    href: "/logistics",
  },
  {
    name: "Pedidos",
    Icon: Buy,
    href: "/orders",
  },
  {
    name: "Pagamento",
    Icon: Card,
    href: "/payments",
  },
  {
    name: "Comunicação",
    Icon: Text,
    href: "/purchases",
  },
  {
    name: "Cliente",
    Icon: Person,
    href: "/customers",
  },
  {
    name: "Configurações",
    Icon: Gear,
    href: "/settings",
  },
];
