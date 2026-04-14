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

    // Dynamic image from Unsplash Source
    const dynamicImageUrl = `https://source.unsplash.com/featured/1200x800/?interior,${encodeURIComponent(blogData.imageKeyword)}`;

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
