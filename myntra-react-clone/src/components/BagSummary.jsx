/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";

export default function BagSummary() {
  const items = useSelector((store) => store.items);

  const bagData = useSelector((store) => store.bag);

  const finalItems = items.filter((item) => bagData.includes(item.id));

  let CONVENIENCE_FEES;
  CONVENIENCE_FEES = finalItems.length > 0 ? 99 : 0;

  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  const bagSum = {
    totalItem: bagData.length,
    totalMRP,
    totalDiscount,
    finalPayment,
  };

  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">
            PRICE DETAILS {bagSum.totalItem} Items{" "}
          </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{bagSum.totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{bagSum.totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{bagSum.finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
}
