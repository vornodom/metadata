import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export async function generateMetadata(
    {
  params,
}: {
  params: Promise<{ id: string }>
}
): Promise<Metadata> {

    const { id } = await params;

    const res = await fetch('https://dummyjson.com/posts/' + id);
    const post = await res.json();
    return {
        title: post.title,
        description: post.body,
        openGraph: {
            images: [
                {
                    url: `https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=${post.title}`,
                    width: 400,
                    height: 200,
                    alt: post.title,
                }
            ]
        }
    }
}

async function page(
{
  params,
}: {
  params: Promise<{ id: string }>
}
) {  
  const { id } = await params;
    const res = await fetch('https://dummyjson.com/posts/' + id);
    const post = await res.json();
 

  return <div>My Post: {id}
  <Image src={`https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=${post.title}`} alt='image' height={100} width={300}  />
  </div>
}

export default page