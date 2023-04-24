import React from "react";
import "./portfolio.css";

import PercyVideo from "../../Assets/Percy.mp4";
import MaggieVideo from "../../Assets/Maggie.mp4";
import ProgrammingViewerIMG from "../../Assets/ProgrammingViewer.png";
import SnakeVideo from "../../Assets/Snake.mp4";
import CompilerIMG from "../../Assets/Compiler.PNG";
import PuzzleFinderIMG from "../../Assets/Puzzle_Finder.PNG";
import LR_TextClassifierIMG from "../../Assets/LR_Text_Classifier.PNG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some of my work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <video autoPlay muted loop controls>
              <source src={PercyVideo} type="video/mp4" />
            </video>
          </div>
          <h3>
            Percy is a web application used for creating purchase orders, I have
            been working in variety of pages, backend services, databases to
            improve software and user experience.
            <br></br>
            <br></br>
            Tech: C#/.NET, TS/React.
          </h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <video autoPlay muted loop controls>
              <source src={MaggieVideo} type="video/mp4" />
            </video>
          </div>
          <h3>
            Maggie is a web application used for replenishing / recalling goods,
            in / out of a warehouse, I have been working in variety of pages,
            backend services, databases to improve software and user experience.
            <br></br>
            <br></br>
            Tech: TS/React.
          </h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src={ProgrammingViewerIMG}
              alt="Programming viewer desktop app"
            ></img>
          </div>
          <h3>
            Programming Viewer is standalone application used internally within
            ASM Assembly Systems for reading files with information about the
            current programs ran on the machine before it crashes.
            <br></br>
            <br></br>
            Tech: C#/WPF/Prism/Ninject.
          </h3>
          <a
            href="https://github.com/BorisKolev/ASM.DEK.ProgrammingViewer"
            className="btn"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <video autoPlay muted loop controls>
              <source src={SnakeVideo} type="video/mp4" />
            </video>
          </div>
          <h3>
            2D Snake game.
            <br></br>
            <br></br>
            Tech: Java/Swing.
          </h3>
          <a
            href="https://github.com/BorisKolev/Java-Snake2D_Swing"
            className="btn"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={CompilerIMG} alt="custom compiler"></img>
          </div>
          <h3>
            Compiler able to compile specific grammar to .py files. Supporting
            multiple features: <br></br> variable assignments, math operations,
            function calls, error handling and so on.
            <br></br>
            <br></br>
            Tech: Java/Antrl.
          </h3>
          <a
            href="https://github.com/BorisKolev/Mambossa_Compiler"
            className="btn"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PuzzleFinderIMG} alt=""></img>
          </div>
          <h3>
            Finding the solution to a small puzzle using AI Breadth First
            Search.
            <br></br>
            <br></br>
            Tech: Java.
          </h3>
          <a
            href="https://github.com/BorisKolev/Java-PuzzleFinder_AI-Breadth-First-Search"
            className="btn"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={LR_TextClassifierIMG} alt=""></img>
          </div>
          <h3>
            Logistic Regression classifier used to predict negative or positive
            reviews using TF-IDF vectorization.
            <br></br>
            <br></br>
            Tech: Python/NLTK/Sklearn.
          </h3>
          <a
            href="https://github.com/BorisKolev/LogisticRegression_Text_Classifier"
            className="btn"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
