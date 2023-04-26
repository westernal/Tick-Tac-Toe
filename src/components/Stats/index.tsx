import OStats from "./o";
import Ties from "./ties";
import XStats from "./x";

const Footer = () => {
  return (
    <section className="grid gap-2 grid-cols-3 px-5 items-stretch">
      <XStats />
      <Ties />
      <OStats />
    </section>
  );
};

export default Footer;
