
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
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

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
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        
        <div className="w-full max-w-4xl">
            <Card className="p-6 sm:p-10 border">
              <div className="flex flex-col items-center text-center mb-8">
                <Badge variant="outline" className="mb-4">CONTACT</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Got a project in mind?</h2>
                <h2 className="text-3xl md:text-4xl font-bold">Let's get in touch.</h2>
              </div>
              <CardContent className="p-0">
                  <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-muted-foreground">Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your name *" {...field} className="border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
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
                            <FormLabel className="text-muted-foreground">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email address *" {...field} className="border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                      </div>
                      
                      <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                          <FormItem>
                          <FormLabel className="text-muted-foreground">Message</FormLabel>
                          <FormControl>
                              <Textarea placeholder="Tell me about your project *" className="min-h-[120px] border-0 border-b rounded-none px-0 focus-visible:ring-0 focus-visible:ring-offset-0" {...field} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                      )}
                      />
                      <div className="text-center">
                        <Button type="submit" variant="outline" className="font-bold tracking-wider rounded-lg px-8">Submit</Button>
                      </div>
                  </form>
                  </Form>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
