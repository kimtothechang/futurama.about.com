import type { NextPage } from "next";
import { FutuInfoContainer } from "../../components/FutuInfoContainer";

const InfoPage: NextPage = () => {
  const name = "info";

  return (
    <div>
      <FutuInfoContainer name={name} />
    </div>
  );
};

export default InfoPage;
