import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
            <Accordion.Item id="experience" className="accordion-item" title="We got 20 years of experience">
                <article>
                    <p>You can't go wrong with us</p>
                    <p>We are in the business.......</p>
                </article>
            </Accordion.Item>
            <Accordion.Item id="local-guide"  className="accordion-item" title="We're working with local guides">
                <article>
                    <p>We are not doing along...</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et.</p>
                </article>
            </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
