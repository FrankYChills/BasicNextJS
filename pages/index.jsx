// HOME-PAGE

import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  return (
    <div>
      <h1>Brought to you via NextJS </h1>
      <ArticleList articles={articles} />
    </div>
  );
}
//getStatic Props fetchs the data at build time that means before it is sent to FrontEnd it fetches data first and then gets send to FE

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };
