so i will implement the endpoint to set the hasUpvoted to false and unset the   upvotedId field to empty based the the req the params




Also i am sure that if i tore the user data under session, the google profile will also be stored as well. 


Install wtg fetch and run npm i to install mongo types or run from the screen shot 

I want the e library to be a dropdown, so we can have ebooks 
tutorials books in pdf 



The e library should be available on both menus whether a user is logged in or not but it is a private route

instead of other articles it will be related articles 


I can also made a sub menu for the sub menu items and use css to give it the initial value of none, so we will display the sbu menu times upon hover, 


On a small screen i will give the menu items display none and make it a drawer using material ui 

Gatsby





so when a user send the unlike to the end point , it will set the hasupvoted to false and -1 from upvotes 

  upvotedId:shortid.generate(),



The share icons will be in content and i will have a share and a share icon so when you click on teh share icon it will open the menu with the icons inside 


it should also display upon scroll down of the page 

I will also paste :

useEffect(() => {
        const loadOauthUrl = async () => {
            try {
                const response = await axios.get('/auth/google/url');
                const { url } = response.data;
                setGoogleOauthUrl(url);
            } catch (e) {
                console.log(e);
            }
        }
        loadOauthUrl();
    }, []);

    On the comments list page, to see if when a suer is logged out still we can load the url 