import { useSelector } from "react-redux";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";

export default function Bag() {
  const items = useSelector((store) => store.items);

  const bagData = useSelector((store) => store.bag);

  const finalItems = items.filter((item) => bagData.includes(item.id));

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItems key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
}
