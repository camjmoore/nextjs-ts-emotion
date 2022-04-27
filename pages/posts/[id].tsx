import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import { Article } from '@components/Article';
import type { Post } from '../index'

export default function Post() {
  return (
    <Article>
      <h1>Title</h1>
      <p>From East to West and back again, accord to the azimuth such that you may return to the horizon of your first season; Eternal Spring</p>
    </Article>
  );
}

export const getStaticProps = async (context: GetStaticPathsContext) => {

  const { params } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  
  const post: Post[] = await res.json();

  return {
    props: {
      post,
    },
  }
}
