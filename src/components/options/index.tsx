import Logo from "./logo";
import Restart from "./restart";
import Turn from "./turn";

const Options = () => {
  return (
    <section className="flex justify-between px-5 items-center">
      <Logo />
      <Turn />
      <Restart />
    </section>
  );
};

export default Options;
