import type { NextPage } from "next";
import { FutuEpiContainer } from "../../components/FutuEpiContainer";

const EpisodePage: NextPage = () => {
  const name = "episodes";

  return (
    <div>
      <FutuEpiContainer name={name} />
    </div>
  );
};

export default EpisodePage;
