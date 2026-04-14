import { NextResponse } from 'next/server';
import { generateBlogPost } from '@/ai/blog-flow';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

export async function GET(request: Request) {
  try {
    const blogData = await generateBlogPost();

    // Check if slug already exists to avoid duplicates
    const blogRef = collection(db, 'blogs');
    const q = query(blogRef, where('slug', '==', blogData.slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json({ message: 'Blog with this slug already exists' }, { status: 200 });
    }

    // Dynamic image from Unsplash
    // Using a specific interior design image that exists and appending keyword for variety (though Unsplash Source was better for this, it is deprecated)
    const dynamicImageUrl = `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200&q=${encodeURIComponent(blogData.imageKeyword)}`;

    const docRef = await addDoc(blogRef, {
      ...blogData,
      imageUrl: dynamicImageUrl,
      createdAt: serverTimestamp(),
      publishedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      id: docRef.id,
      title: blogData.title
    });
  } catch (error: any) {
    console.error('Error generating blog:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
