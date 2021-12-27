import type { NextPage } from "next";
import { FutuInvenContainer } from "../../components/FutuInvenContainer";

const InventoryPage: NextPage = () => {
  const name = "inventory";

  return (
    <div>
      <FutuInvenContainer name={name} />
    </div>
  );
};

export default InventoryPage;
