import { useState, useEffect } from "react";
import dateFormat from "dateformat";
import Container from "@material-ui/core/Container";
import {
  ArticlesList,
  ShareIcons,
  AddCommentForm,
  UpvotesSection,
  CommentsList,
} from "../components/index";
import { NotFoundPage } from "./index";
import articleContent from "./article-content";
import { FaRegEye, FaRegClock } from "react-icons/fa";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import { useUser } from "../auth/useUser";
//import { alertTitleClasses } from '@mui/material';

const override = css`
  display: block;
  margin: 17% auto;
`;

export function ArticlePage({ match }) {
  const name = match.params.name;

  const user = useUser();
  const { id } = user || "";

  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
    upvotedIds: [],
  });
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  let views = 5; //i will use an eye icon and display the views beside it.I also want to display a date of when the article was publish,
  //that will be part of the article from the front end

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await fetch(`/api/articles/${name}`);
        const body = await result.json();
        setArticleInfo(body);
        setLoading(true);
        setColor("teal");
        setTimeout(() => {
          setLoading(false);
        }, 800);
      };
      fetchData();
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }, [name]);

  const loadingMessage = (
    <RingLoader color={color} loading={loading} css={override} size={100} />
  );

  if (!article) return <NotFoundPage />;

  //check to see if the user has added upvote on the article
  const voted = Object.values(articleInfo.upvotedIds).filter((userId) => userId === id)
      .length > 0
      ? true
      : false;

  const relatedArticles = articleContent.filter(
    (article) => article.name !== name
  );

  let content = (
    <>
      <h1 className="article-title">{article.title}</h1>
      <div style={{ marginLeft: "27vh", padding: "0" }}>
        <p style={{ fontWeight: "bold" }}>
          {" "}
          <FaRegEye
            style={{
              fontSize: "1.8em",
              marginBottom: "-10px",
              color: "#d1fd1d",
              cursor: "pointer",
            }}
          />{" "}
          {views}
        </p>
        <p style={{ fontWeight: "bold" }}>
          Commitment{" "}
          <span
            style={{
              color: "#6c757d",
              marginLeft: "2vh",
              fontFamily: "Cardo",
              fontSize: "1rem",
            }}
          >
            <FaRegClock
              style={{
                fontSize: "1.8em",
                marginBottom: "-10px",
                color: "#d1fd1d",
                cursor: "pointer",
              }}
            />{" "}
            2 mins
          </span>
        </p>
        <p
          style={{
            color: "#6c757d",
            marginLeft: "30vh",
            fontFamily: "Cardo",
            fontSize: "1rem",
          }}
        >
          {dateFormat(article.pupdate, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
        </p>
      </div>
      <ShareIcons content={JSON.stringify(article)} />
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
        hasUpvoted={voted}
      />
      <Container maxWidth="lg">
        {article.content.map((paragraph, key) => (
          <p className="article" key={key}>
            {paragraph}
          </p>
        ))}
      </Container>
      <CommentsList comments={articleInfo.comments} content={article.content} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3 className="other-article-list"> Related Articles</h3>
      <ArticlesList articles={relatedArticles} />
    </>
  );
  return loading ? loadingMessage : content;
};
