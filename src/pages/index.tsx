import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Img
        src="https://www.denofgeek.com/wp-content/uploads/2018/06/futurama_4.jpg?resize=768%2C432"
        alt=""
      />
    </div>
  );
};

export default Home;

const Img = styled.img`
  width: 100%;
  height: 652px;
`;
