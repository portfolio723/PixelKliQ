import { Accordion, Accordions } from '@/components/ui/accordion';

const faqItems = [
    {
        id: "what-services",
        question: "What kind of services does PixelKliQ offer?",
        answer: "PixelKliQ offers a 360° portfolio of digital services, including creative design (logos, websites, UI/UX), tech solutions (SaaS, ERP, CRM), HR services (recruitment, payroll), tele-services (call centers, lead gen), and edutech (internships, courses)."
    },
    {
        id: "who-do-you-work-with",
        question: "Who are your typical clients?",
        answer: "We work with a diverse range of clients, from startups and SMEs to large enterprises and educational institutions. Our solutions are scalable and tailored to fit the unique needs of each client."
    },
    {
        id: "what-is-your-approach",
        question: "What makes your approach different?",
        answer: "Our approach is Agile, Creative, and Scalable. We blend agile methodologies for rapid development with creative thinking to deliver innovative solutions. All our projects are handled by in-house experts, ensuring quality and real-time collaboration."
    },
    {
        id: "how-to-start",
        question: "How can I get started with a project?",
        answer: "Getting started is easy! Just head to our contact section and send us a message or book a free consultation. We'd love to hear about your project and discuss how we can help you achieve your goals."
    }
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have questions? We have answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
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
