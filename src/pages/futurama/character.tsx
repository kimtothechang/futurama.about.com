import type { NextPage } from "next";
import { FutuCharContainer } from "../../components/FutuCharContainer";

const CharacterPage: NextPage = () => {
  const name = "characters";

  return (
    <div>
      <FutuCharContainer name={name} />
    </div>
  );
};

export default CharacterPage;
