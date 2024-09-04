import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
            <Accordion.Item id="experience" className="accordion-item">
                <Accordion.Title className="accordion-item-title">
                    We got 20 years of experience
                </Accordion.Title>
                <Accordion.Content className="accordion-item-content">
                    <article>
                        <p>You can't go wrong with us</p>
                        <p>We are in the business.......</p>
                    </article>
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item id="local-guide"  className="accordion-item">
                <Accordion.Title className="accordion-item-title">
                    We're working with local guides
                </Accordion.Title>
                <Accordion.Content className="accordion-item-content">
                    <article>
                        <p>We are not doing along...</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et.</p>
                    </article>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
