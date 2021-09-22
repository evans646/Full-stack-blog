import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';
//import { connect } from 'react-redux';
//import {getAllArticles,getArticlesLoading} from '../actions/articleActions'
import '../index.css'

import { useUser } from '../auth/useUser';

const oArticleStyles = { 
textAlign: 'center', 
fontSize: '20px', 
fontWeight: 'bold',
marginTop: '20px',
padding:'10px'
};


const ArticlePage = ({ match }) => {
const name = match.params.name;

    const user = useUser();
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes:0, comments: []});
    const [loading,setLoading] = useState(false)
  
    useEffect(() => {
        try{
         const fetchData = async () => {
             const result = await fetch(`/api/articles/${name}`);
             const body = await result.json();
             setArticleInfo(body)
             setLoading(true)
             setTimeout(() => {
            setLoading(false)
           },500*10)
         };
          fetchData();
        }catch(error){
          console.log(error)
          setLoading(true)
        }
     },[name]);

    const loadingMessage = <div style={{textAlign:'center'}}>Loading article...</div>;

    if (!article) return <NotFoundPage/>;


    const otherArticles = articleContent.filter(article => article.name !== name);//instead of other articles, it will be related articles. 

    let content = (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '30px' ,fontWeight: 'bold'}}>{article.title}</h1>

            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} hasUpvoted={articleInfo.hasUpvoted} upvotedId={articleInfo.Upvoted_id}/>
            {article.content.map((paragraph, key) => (
                <p style={{ textAlign: 'center',margin:'20px'}} key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments}/>

            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

            <h3 style={oArticleStyles}>Other Articles</h3>
            <ArticlesList articles={otherArticles} liked={'liked'} />
        </>
    );
    return loading ? loadingMessage : content;
};

// const mapStateToProps = state => ({
//     loading: getArticlesLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//     loadAllArticles: () => dispatch(getAllArticles()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);

export default ArticlePage;