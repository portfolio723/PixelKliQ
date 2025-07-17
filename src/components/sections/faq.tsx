
import { Accordion, Accordions } from '@/components/ui/accordion';
import { TextRevealByWord } from '../ui/text-reveal';

const faqItems = [
    {
        id: "services",
        question: "What kind of services does PixelKliQ offer?",
        answer: "PixelKliQ provides end-to-end services including creative design, web/app development, HR solutions, telecommunication setup, and educational programs through internships and certifications."
    },
    {
        id: "clients",
        question: "Who are your typical clients?",
        answer: "We work with startups, SMEs, large enterprises, educational institutions, and tech-focused product companies looking for scalable digital growth solutions."
    },
    {
        id: "approach",
        question: "What makes your approach different?",
        answer: "We combine agile methodology with creative problem-solving and tech innovation, all handled in-house by a multidisciplinary team for faster and cohesive execution."
    },
    {
        id: "one-roof",
        question: "Can I get all services under one roof?",
        answer: "Yes! From branding to development to hiring and support systems, PixelKliQ provides a unified platform to simplify your business operations."
    },
    {
        id: "internships",
        question: "Do you offer internship or learning opportunities?",
        answer: "Absolutely. Through PixelKliQ Edutech, we offer real-time internship programs, certification courses, and placement assistance for students and professionals."
    },
    {
        id: "get-started",
        question: "How do I get started with a project?",
        answer: "Simply fill out our contact form, schedule a free consultation, or drop us an email. Our team will reach out to understand your needs and build a custom roadmap."
    }
];

export default function Faq() {
  return (
    <section id="faq" className="py-8 sm:py-12">
      <div className="container mx-auto max-w-3xl px-6">
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
