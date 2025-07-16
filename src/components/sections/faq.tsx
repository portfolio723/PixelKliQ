import { Accordion, Accordions } from '@/components/ui/accordion';
import { TextRevealByWord } from '../ui/text-reveal';

const faqItems = [
    {
        id: "charging-model",
        question: "Do you charge hourly or on spec?",
        answer: "We offer flexible pricing models to suit your project needs. We can work on a per-project basis (on spec) for clearly defined scopes, or on an hourly basis for more dynamic, ongoing projects. We'll discuss the best fit for you during our initial consultation."
    },
    {
        id: "experience",
        question: "How long have you been doing design?",
        answer: "Our core team has over a decade of combined experience in the design and development industry. We've had the pleasure of working with a diverse range of clients, from innovative startups to established enterprises, helping them bring their digital visions to life."
    },
    {
        id: "trial-designs",
        question: "Can you do a couple of designs to see if I like what you do?",
        answer: "We typically don't provide free design mockups, as our process is collaborative and discovery-led. However, we do offer paid discovery phases or smaller initial projects to ensure we're the right fit for each other before committing to a larger engagement. Our portfolio also showcases the quality of our work."
    },
    {
        id: "process-timeline",
        question: "What is the process and how long does it take?",
        answer: "Our process is transparent and structured, typically involving discovery, design, development, and deployment phases. The timeline varies depending on the project's complexity, but a standard website can take anywhere from 4 to 12 weeks. We'll provide a detailed project timeline after our initial discovery phase."
    }
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <TextRevealByWord text="Frequently Asked Questions" />
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <Accordions type="single" className="w-full">
            {faqItems.map(item => (
                 <Accordion key={item.id} id={item.id} title={item.question}>
                    <p>{item.answer}</p>
                </Accordion>
            ))}
        </Accordions>
      </div>
    </section>
  );
}
