import React from 'react';



export function CommentsList ({ comments}){ 
    return(
	<div class="commentsWrapper">
		 { comments.length > 1 ? <h3 style={{padding:'2%',fontWeight:'bold'}}>{comments.length }Comments</h3>:
		  <h3  style={{padding:'2%',fontWeight:'bold'}}>{comments.length } Comment</h3> }
		 <ul class="commentsList">
		 {comments.map(comment =>
			<li>
		<div class="commentMainLevel">
				<div class="commentAvatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""/></div>
					<div class="commentBox">
						<div class="commentHead">
							<h6 class="commentName byAuthor"><a href="http://creaticode.com/blog">{comment.username}</a></h6>
							<span>{comment.time} ago</span>
						</div>
					<div class="commentContent">
						{comment.text}
					</div>
				</div>
		 </div>
		</li>)}
		</ul> 
	</div>
     )
};


