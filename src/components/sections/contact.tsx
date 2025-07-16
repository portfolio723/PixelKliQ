
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
import { useToast } from '@/hooks/use-toast';
import { TextRevealByWord } from '../ui/text-reveal';
import { SocialLinks } from '@/components/ui/social-links';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const socials = [
  {
    name: "Instagram",
    image: "https://img.icons8.com/color/96/instagram-new--v1.png",
    dataAiHint: "instagram logo",
    href: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    image: "https://img.icons8.com/color/96/linkedin.png",
    dataAiHint: "linkedin logo",
    href: "https://www.linkedin.com",
  },
  {
    name: "Twitter",
    image: "https://img.icons8.com/color/96/twitterx.png",
    dataAiHint: "twitter logo",
    href: "https://www.twitter.com",
  },
  {
    name: "Mail",
    image: "https://img.icons8.com/?size=100&id=3AYCSzCO85Qw&format=png&color=000000",
    dataAiHint: "email icon",
    href: "mailto:hello@pixelkliq.com",
  },
  {
    name: "Phone",
    image: "https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000",
    dataAiHint: "phone icon",
    href: "tel:+911234567890",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
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
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-12">
          <TextRevealByWord text="Get in Touch" />
          <p className="mt-2 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
        
        <div className="w-full max-w-2xl">
            <div className="relative">
              <Card>
                  <CardHeader>
                      <CardTitle>Send us a Message</CardTitle>
                      <CardDescription>Fill out the form and we&apos;ll get back to you.</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Adam" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Smith" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                          </div>
                          <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                              <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                  <Input placeholder="youremail@gmail.com" {...field} />
                              </FormControl>
                              <FormMessage />
                              </FormItem>
                          )}
                          />
                          <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                              <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                  <Input placeholder="Subject here" {...field} />
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
                              <FormLabel>Your Message</FormLabel>
                              <FormControl>
                                  <Textarea placeholder="Write you message" className="min-h-[120px]" {...field} />
                              </FormControl>
                              <FormMessage />
                              </FormItem>
                          )}
                          />
                          <Button type="submit" className="w-full font-bold uppercase tracking-wider">Submit</Button>
                      </form>
                      </Form>
                  </CardContent>
              </Card>
            </div>
        </div>

        <div className="space-y-8 mt-12 text-center">
            <div>
                <h3 className="text-2xl font-headline font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="relative">
                  <SocialLinks socials={socials} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
