import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "man portrait",
    initials: "AJ",
  },
  {
    name: "Samantha Lee",
    role: "Lead Designer",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "woman portrait",
    initials: "SL",
  },
  {
    name: "Michael Chen",
    role: "Head of Development",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "man face",
    initials: "MC",
  },
  {
    name: "Priya Sharma",
    role: "HR & Operations",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "woman face",
    initials: "PS",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Who We Are
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are a team of creators, thinkers, and innovators dedicated to building the future of digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-headline font-semibold text-primary">Our Mission</h3>
              <p className="mt-2 text-muted-foreground">
                To empower businesses with transformative digital solutions that drive growth, innovation, and success. We believe in the power of technology and design to create meaningful connections and deliver exceptional results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-headline font-semibold text-primary">Our Vision</h3>
              <p className="mt-2 text-muted-foreground">
                To be the leading digital agency in Hyderabad and beyond, recognized for our creativity, expertise, and commitment to our clients. We aim to shape the digital landscape by pushing boundaries and setting new standards of excellence.
              </p>
            </div>
          </div>
          <div>
            <img src="https://placehold.co/600x400.png" data-ai-hint="team collaboration" alt="Our Team Collaborating" className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="mt-20">
            <h3 className="text-center text-3xl font-headline font-bold mb-10">Meet the Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                    <Card key={member.name} className="text-center border-0 bg-transparent shadow-none">
                        <CardHeader className="p-0">
                            <Avatar className="w-24 h-24 mx-auto mb-4">
                                <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint={member.dataAiHint}/>
                                <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <CardTitle className="text-xl font-headline">{member.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-2">
                            <p className="text-primary">{member.role}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
