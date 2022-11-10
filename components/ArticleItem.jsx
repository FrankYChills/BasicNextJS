import ArticleStyle from "../styles/Article.module.css";
import Link from "next/link";

import Meta from "./Meta";
function ArticleItem({ article }) {
  return (
    <>
      <Link href={`/article/${article.id}`} legacyBehavior>
        <a className={ArticleStyle.card}>
          <h3>{article.title} &rarr;</h3>
          <p>{article.body}</p>
        </a>
      </Link>
    </>
  );
}

export default ArticleItem;
