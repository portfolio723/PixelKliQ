'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
                <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>Fill out the form and we&apos;ll get back to you.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full font-bold uppercase tracking-wider">Send Message</Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-headline font-semibold text-foreground mb-4">Contact Information</h3>
                    <div className="space-y-4 text-lg">
                        <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-foreground" />
                            <span>Hyderabad, India</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-foreground" />
                            <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91 123 456 7890</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-foreground" />
                            <a href="mailto:hello@pixelkliq.com" className="hover:text-primary transition-colors">hello@pixelkliq.com</a>
                        </div>
                    </div>
                </div>
                 <div>
                    <h3 className="text-2xl font-headline font-semibold text-foreground mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors text-foreground hover:text-primary-foreground"><Twitter className="w-6 h-6" /></a>
                        <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors text-foreground hover:text-primary-foreground"><Linkedin className="w-6 h-6" /></a>
                        <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary transition-colors text-foreground hover:text-primary-foreground"><Instagram className="w-6 h-6" /></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-headline font-semibold text-foreground mb-4">Our Location</h3>
                    <div className="aspect-video rounded-lg overflow-hidden">
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160946051!2d78.2679589178306!3d17.41262741643349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1683054362842!5m2!1sen!2sus"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps view of Hyderabad"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
