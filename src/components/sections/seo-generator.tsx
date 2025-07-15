'use client';

import { useState } from 'react';
import { generateSeoMetaDescription } from '@/ai/flows/seo-meta-description-generator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SeoGenerator() {
  const [loading, setLoading] = useState(false);
  const [metaDescription, setMetaDescription] = useState('');
  const { toast } = useToast();

  const handleGenerate = async () => {
    setLoading(true);
    setMetaDescription('');
    try {
      if (typeof window === 'undefined') return;

      const pageContent = document.body.innerText;
      const result = await generateSeoMetaDescription({ pageContent });
      
      if (result.metaDescription) {
        setMetaDescription(result.metaDescription);
        toast({
            title: 'Success!',
            description: 'New meta description has been generated.',
        });
      } else {
        throw new Error('Failed to generate description.');
      }

    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate meta description. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="seo-generator" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="bg-card/50">
          <CardHeader>
            <div className="flex items-center gap-4">
                <Wand2 className="w-8 h-8 text-primary" />
                <div>
                    <CardTitle className='font-headline'>AI SEO Meta Description Generator</CardTitle>
                    <CardDescription>
                    Use this tool to generate an SEO-friendly meta description for this page.
                    </CardDescription>
                </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
                <Button onClick={handleGenerate} disabled={loading}>
                    {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Generate with AI
                </Button>
                {metaDescription && (
                    <Textarea
                    readOnly
                    value={metaDescription}
                    className="min-h-[100px] text-base"
                    />
                )}
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
                This tool uses the current text content of the page to generate a description.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
