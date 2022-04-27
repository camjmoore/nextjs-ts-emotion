import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { Article } from '@components/Article';
import type { Post } from '../index'

export default function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Article>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const emptyPost: Post = {
    title: "Post Not Found",
    body: "",
    id: 0,
    userId: 0,
  };

  if (!params?.id) {
    return {
      props: {
        post: emptyPost,
      },
    };
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  }
}
