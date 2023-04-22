import clsx from "clsx";
import "./App.css";

function App() {
  return (
    <>
      <header className="border-b-8 border-[--color-gray-light]">
        <div className="max-w-[800px] mx-auto px-[24px]">
          <div className="intro-chunk max-w-[415px] pt-[96px] pb-[64px]">
            <h1 className="title text-3xl font-bold mb-12">Huckleberry</h1>

            <P>
              An avant-garde agency focused on {"connecting "}
              <Strong>passion</Strong> with <Strong>logistics</Strong>.
            </P>

            <P>A better way to solve the problems of tomorrow.</P>
          </div>
        </div>
      </header>
      <main className="bg-[--color-gray-medium] py-[64px]">
        <section className="max-w-[800px] mx-auto px-[24px]">
          <div className="card bg-white p-[24px] mx-[-24px] border-b-8 border-[--color-gray-light]">
            {/* "CANCEL PADDING TRICK" use negative margin to cancel out card padding so the text lines up vertically with the header above */}
            <h2 className="indented-heading w-[fit-content] -ml-8 -mt-4 mb-4 text-2xl font-bold py-4 px-8 bg-[--color-gold-lighter] border-b-8 border-[--color-gold-darker]">
              Wealth comes from operations
            </h2>
            <P>
              No modern business can thrive without developing a specialization
              in operations. Huckleberry has helped dozens of companies, from
              Fortune 50 monoliths to fast-growing Bay Area startups, achieve
              their goals and meet their KPIs by leveraging our extensive
              network of logistics experts.
            </P>
            <P>
              Huckleberry was established in 2003 to help ambitious businesses
              discover their true potential. If that resonates, let's chat!
            </P>
          </div>
        </section>
      </main>
    </>
  );
}

function P(props: { className?: string; children?: React.ReactNode }) {
  const { children, className, ...rest } = props;
  return (
    <p className={clsx("text-xl mb-4 last:mb-0", className)} {...rest}> {/* for last-child uses last:mb-0 */}
      {children}
    </p>
  );
}

function Strong(props: { children: React.ReactNode }) {
  return <strong className="text-[--color-green]">{props.children}</strong>;
}

export default App;
