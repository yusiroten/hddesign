import { ai } from './genkit';
import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const BlogSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  slug: z.string(),
  imageKeyword: z.string(),
});

export const generateBlogPost = ai.defineFlow(
  {
    name: 'generateBlogPost',
    inputSchema: z.void(),
    outputSchema: BlogSchema,
  },
  async () => {
    const { output } = await ai.generate({
      prompt: 'Buatlah sebuah artikel blog tentang desain interior dalam Bahasa Indonesia. Artikel harus menarik, informatif, dan profesional. Fokus pada tren terbaru, tips dekorasi, atau ide ruang. Berikan judul, ringkasan singkat (excerpt), isi artikel dalam format Markdown, slug yang ramah SEO, dan satu kata kunci bahasa Inggris untuk mencari gambar yang relevan di Unsplash.',
      output: { schema: BlogSchema },
    });

    if (!output) {
      throw new Error('Gagal men-generate blog post');
    }

    return output;
  }
);
