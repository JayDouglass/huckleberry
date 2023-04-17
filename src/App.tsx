import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <header className="mt-[96px] pl-6">
        <div className="max-width-wrapper max-w-sm">
          <div className="intro-chunk">
            <h1 className="title text-[2rem] font-[800] mb-[48px]">
              Huckleberry
            </h1>

            <p className="text-[1.25rem] mb-4">
              An avant-garde agency focused on connecting{" "}
              <strong className="text-[--color-primary]">passion</strong> with{" "}
              <strong className="text-[--color-primary]">logistics</strong>.
            </p>

            <p className="text-[1.25rem]">
              A better way to solve the problems of tomorrow.
            </p>
          </div>
        </div>
      </header>
      <main>
        <section className="max-width-wrapper">
          <div className="card">
            <h2 className="indented-heading">Wealth comes from operations</h2>
            <p>
              No modern business can thrive without developing a specialization
              in operations. Huckleberry has helped dozens of companies, from
              Fortune 50 monoliths to fast-growing Bay Area startups, achieve
              their goals and meet their KPIs by leveraging our extensive
              network of logistics experts.
            </p>
            <p>
              Huckleberry was established in 2003 to help ambitious businesses
              discover their true potential. If that resonates, let's chat!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
