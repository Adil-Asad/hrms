import { useState } from "react";
import Tab2Inner from "./Tab2Inner";
import OfferTemplate from "./OfferTemplate";

function Tab2() {
  const [showTabInner, setshowTabInner] = useState(true);
  return <>{showTabInner ? <Tab2Inner /> : <OfferTemplate />}</>;
}

export default Tab2;
