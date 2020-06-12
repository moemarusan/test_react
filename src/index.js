import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "minireset.css";
import "./styles.css";

import Header from "./Header";
import WorkItem from "./WorkItem";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>mottox2</title>
        <meta name="description" content="ポートフォリオサイトのサンプルです" />
      </Helmet>
      <Header />
      <div className="hero">
        <h1 className="hero-title">mottox2</h1>
        <p className="hero-description">Web Engineer, Prototyper</p>
      </div>
      <section className="section" id="about">
        <h2 className="section-title">About</h2>
        <p className="aboutDescription">
          Web エンジニアです。
          <br /> 世界中の人に使われるプロダクトを作るのが夢です。
        </p>
      </section>
      <section className="section" id="works">
        <h2 className="section-title">Works</h2>
        <ul>
          <WorkItem title="すごいC向けサービス" category="2018 - Frontend" />
          <WorkItem
            title="すごいスマートフォンアプリ"
            category="2017 - Design"
          />
        </ul>
      </section>
      <Footer />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
