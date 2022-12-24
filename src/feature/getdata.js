import list from "../feature/data";
import Cards from "../components/cards.js";

const GetData = ({ handleClick }) => {
  return (
    <section className="d-flex flex-row justify-content-evenly flex-wrap">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default GetData;
