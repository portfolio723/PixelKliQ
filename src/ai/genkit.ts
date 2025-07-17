import {genkit} from 'genkit';
import {googleAI} from '@google-ai/genkit-plugin-googleai';
import {googleCloud} from '@genkit-ai/google-cloud';

export const ai = genkit({
  plugins: [
    googleAI({
      // The API key is automatically set by the platform.
    }),
    googleCloud(),
  ],
});
