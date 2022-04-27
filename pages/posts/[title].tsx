import { Article } from '@components/Article';
import { useRouter } from "next/router";

export default function Post() {

  const router = useRouter();

  const { title } = router.query;

  return (
    <Article>
      <h1>{title}</h1>
      <p>From East to West and back again, accord to the azimuth such that you may return to the horizon of your first season; Eternal Spring</p>
    </Article>
  );
}