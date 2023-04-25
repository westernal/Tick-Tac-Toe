import House from "../house";

const Board = () => {
  const numberOfHouses = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section className="board p-5   grid grid-cols-3 gap-5">
      {numberOfHouses.map((index) => {
        return <House key={index} />;
      })}
    </section>
  );
};

export default Board;
