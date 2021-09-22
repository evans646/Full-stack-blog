color: maroon;
cornsilk;


https://stackoverflow.com/questions/62931276/how-to-delete-comment-that-is-inside-of-post-schema

The reason why the comments are not showing is because it has not been populated, so react only gets it as an OBJ ID and it cannot fetch the body and the and the username.
because when you log newly created comments it shows as an id which means it has not been populated evn though we have populated it but not taking effect 





I am going to add the navbar the collapse menu so when it collapses the social icons will also be part of the collpase menu and i can see where the navbar is collapsed. and give the social bar above the navbar a display of none at that pixel where the navbar collapsed and the social bar wil be at the bottom of the menus 




Well i also tried to console.log req.body but it was an empty object meaning we are not really parsing the body


SO now the comment username is going to be represented by the req.user

and so i am going to get rid of the username in the schema and populate the user on the comment because right now it's all in the form of Obj ids, so react fetches the id, 
and i can change the username on react to the the author

I can try this with postman to test teh user registration

I need to also implement the isAuthor middleware and handle teh errors, also i need to prevent users from upvoting more than one if they have req.user_id === req.session 



https://www.npmjs.com/package/react-flash-message



There are two things to install for react :
jwt-decode react-google-login

and for backend :
bcrypt and jsonwebtoken



i will be asding date to commnets 

mavis on 0788-88888