'use server';

/**
 * @fileOverview A flow for generating SEO meta descriptions based on page content.
 *
 * - generateSeoMetaDescription - A function that generates the SEO meta description.
 * - GenerateSeoMetaDescriptionInput - The input type for the generateSeoMetaDescription function.
 * - GenerateSeoMetaDescriptionOutput - The return type for the generateSeoMetaDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoMetaDescriptionInputSchema = z.object({
  pageContent: z.string().describe('The content of the page to generate a meta description for.'),
});
export type GenerateSeoMetaDescriptionInput = z.infer<
  typeof GenerateSeoMetaDescriptionInputSchema
>;

const GenerateSeoMetaDescriptionOutputSchema = z.object({
  metaDescription: z
    .string()
    .describe(
      'The generated SEO meta description for the page content, incorporating relevant keywords like PixelKliQ, Digital Solutions, Hyderabad.'
    ),
});
export type GenerateSeoMetaDescriptionOutput = z.infer<
  typeof GenerateSeoMetaDescriptionOutputSchema
>;

export async function generateSeoMetaDescription(
  input: GenerateSeoMetaDescriptionInput
): Promise<GenerateSeoMetaDescriptionOutput> {
  return generateSeoMetaDescriptionFlow(input);
}

const generateSeoMetaDescriptionPrompt = ai.definePrompt({
  name: 'generateSeoMetaDescriptionPrompt',
  input: {schema: GenerateSeoMetaDescriptionInputSchema},
  output: {schema: GenerateSeoMetaDescriptionOutputSchema},
  prompt: `You are an SEO expert tasked with generating a compelling and effective meta description for a webpage.

  The meta description should accurately summarize the page's content, entice users to click through from search engine results, and incorporate relevant keywords to improve search engine ranking.

  Specifically, ensure the meta description includes the following keywords: 'PixelKliQ, Digital Solutions, Hyderabad'.

  Page Content: {{{pageContent}}}

  Generate a meta description that is concise (under 160 characters), engaging, and keyword-rich.`,
});

const generateSeoMetaDescriptionFlow = ai.defineFlow(
  {
    name: 'generateSeoMetaDescriptionFlow',
    inputSchema: GenerateSeoMetaDescriptionInputSchema,
    outputSchema: GenerateSeoMetaDescriptionOutputSchema,
  },
  async input => {
    const {output} = await generateSeoMetaDescriptionPrompt(input);
    return output!;
  }
);
