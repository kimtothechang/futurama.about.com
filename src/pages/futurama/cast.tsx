import type { NextPage } from "next";
import { FutuCastContainer } from "../../components/FutuCastContainer";

const CastPage: NextPage = () => {
  const name = "cast";

  return (
    <div>
      <FutuCastContainer name={name} />
    </div>
  );
};

export default CastPage;
