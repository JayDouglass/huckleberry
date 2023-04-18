import "./App.css";

function App() {
  return (
    <>
      <header className="pt-[96px] pb-[64px] pl-6 lg:pl-[264px] bg-white border-b-8 border-[--color-gray-light]">
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
      <main className="bg-[--color-gray-medium] py-[72px] lg:pl-[264px]">
        <section className="max-width-wrapper max-w-[800px]">
          <div className="card bg-white pt-[8px] pb-[16px] space-y-4">
            <h2 className="indented-heading text-[1.5rem] lg:ml-[-8px] border-b-8 border-[--color-gold-darker] px-[32px] py-[16px] font-[800] bg-[--color-gold-light] w-[fit-content]">
              Wealth comes from operations
            </h2>
            <p className="text-[1.25rem] px-[32px]">
              No modern business can thrive without developing a specialization
              in operations. Huckleberry has helped dozens of companies, from
              Fortune 50 monoliths to fast-growing Bay Area startups, achieve
              their goals and meet their KPIs by leveraging our extensive
              network of logistics experts.
            </p>
            <p className="text-[1.25rem] px-[32px]">
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
