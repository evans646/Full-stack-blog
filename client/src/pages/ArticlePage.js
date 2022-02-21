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
import {articles} from "./article-content";
import { FaRegEye, FaRegClock } from "react-icons/fa";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import { useUser } from "../auth/useUser";


// import Box from '@mui/material/Box';
// import Popper from '@mui/material/Popper';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Fade from '@mui/material/Fade';
// import Paper from '@mui/material/Paper';






const override = css`
  display: block;
  margin: 17% auto;
`;

export function ArticlePage({ match }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] =useState();



  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const name = match.params.name;

  const user = useUser();
  const { id } = user || "";

  const article = articles.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
    upvotedIds: [],
  });
  

  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  // const [views,] = useState([{views:[]}]);
  //let views = []; //i will use an eye icon and display the views beside it.I also want to display a date of when the article was publish,
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

if (!article) return <NotFoundPage />


let views = [2]



// let views = localStorage.setItem('views',new Array)


  //check to see if the user has added upvote on the article
  const voted = Object.values(articleInfo.upvotedIds).filter((userId) => userId === id)
      .length > 0
      ? true
      : false;

  const relatedArticles = articles.filter(
    (article) => article.name !== name
  );

  let content = (
    <>
      <h1 className="article-title">{article.title}</h1>
      <div style={{ marginLeft: "27vh", padding: "0" }}>
        <p style={{ fontWeight: "bold" }}>
          <FaRegEye
            style={{
              fontSize: "1.7em",
              marginBottom: "-10px",
              color: "#d1fd1d",
              cursor: "pointer",
            }}
          />
          {views}   Views
        </p>
        <p style={{ fontWeight: "bold" }}>
          <span
            style={{
              color: "#6c757d",
              marginLeft: "2vh",
              fontFamily: "Cardo",
              fontSize: "1rem",
            }}>
            <FaRegClock
              style={{
                fontSize: "1.8em",
                marginBottom: "-4px",
                color: "#d1fd1d",
                cursor: "pointer",
              }}
            />
          </span>
          2 mins Commitment
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
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <CommentsList comments={articleInfo.comments} content={article.content} />
      <h3 className="read-next-articles-list"> Read Next</h3>
      <ArticlesList articles={relatedArticles} />
    </>
  );
  return loading ? loadingMessage : content;
};
