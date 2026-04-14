"use client";

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  publishedAt: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const { toast } = useToast()

  const fetchBlogs = async () => {
    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedBlogs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch('/api/cron/generate-blog');
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Berhasil!",
          description: `Artikel "${data.title}" telah di-generate.`,
        });
        fetchBlogs();
      } else {
        throw new Error(data.error || 'Gagal generate');
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-primary mb-4">Blog Desain Interior</h1>
              <p className="text-muted-foreground max-w-2xl">
                Temukan inspirasi, tips, dan tren terbaru seputar desain interior untuk mempercantik ruang Anda.
              </p>
            </div>
            <Button
              onClick={handleGenerate}
              disabled={generating}
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {generating ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sedang Generate...</>
              ) : (
                <><Sparkles className="mr-2 h-4 w-4" /> Generate Artikel Baru (AI)</>
              )}
            </Button>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex flex-col h-full">
                  <Skeleton className="h-48 w-full" />
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2 mt-2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : blogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-border overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="text-xs text-primary mb-2">
                        {new Date(blog.publishedAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                      <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3">
                        {blog.excerpt}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card/50 rounded-xl border border-dashed border-border">
              <p className="text-muted-foreground mb-4">Belum ada artikel saat ini.</p>
              <p className="text-sm text-muted-foreground">Klik tombol di atas untuk men-generate artikel pertama Anda dengan AI!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
