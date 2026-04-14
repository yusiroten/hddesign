"use client";

import { useState, useEffect, use } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
}

export default function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const q = query(
          collection(db, 'blogs'),
          where('slug', '==', resolvedParams.slug),
          limit(1)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setBlog(querySnapshot.docs[0].data() as BlogPost);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [resolvedParams.slug]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-4 w-40 mb-8" />
            <Skeleton className="h-[400px] w-full mb-8 rounded-xl" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow pt-24 pb-20 text-center">
          <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
          <Button asChild className="mt-4">
            <Link href="/blog">Kembali ke Blog</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" /> Kembali ke Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{blog.title}</h1>

          <div className="text-sm text-muted-foreground mb-8">
            Dipublikasikan pada {new Date(blog.publishedAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full mb-12 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
