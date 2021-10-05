import React from 'react';
import Container from '@material-ui/core/Container';


const useH1 = {
    textAlign:'center'
};



export const Tutorials = () =>{


    return(
        <Container maxWidth='lg'>
            <h1 style={useH1}>Tuts</h1>
            <p>You can learn anything you want here, just click on the course and follow through.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at cumque laborum vitae molestiae suscipit blanditiis 
            eos tenetur, voluptate dolores veritatis. Voluptates magnam deserunt sequi perspiciatis quaerat, voluptatum dolores molestiae nemo quam quis culpa vero velit 
            minima asperiores, quia facere itaque ipsa fuga ducimus consequatur provident. Adipisci placeat aut non?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at cumque laborum vitae molestiae suscipit blanditiis eos tenetur, 
            voluptate dolores veritatis. Voluptates magnam deserunt sequi perspiciatis quaerat, voluptatum dolores molestiae nemo quam quis culpa vero velit minima 
            asperiores, quia facere itaque ipsa fuga ducimus consequatur provident. Adipisci placeat aut non?
           </p>
        </Container>
    )
};
