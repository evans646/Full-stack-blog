import React from 'react';
import Container from '@material-ui/core/Container';
import myImg from '../images/mypic.jpeg';

const AboutPage = () => (
    
 <Container maxWidth='lg'>
    <div className="aboutPage">
    <h1>About me</h1>
    <p>
        Hellooo!!! Yoou are welcome, my name is Evans Ansong, Proin congue
        ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
        Aliquam malesuada in massa tincidunt egesas. Nam consectetur varius turpis, 
        non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
        eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus.
        <img src={myImg} alt='img' width={'40%'} style={{borderRadius:'40em',padding:'20px'}}/>
    </p>
    <p>
        Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
        Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
        nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
        sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
        interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
        consequat quam. Vivamus accumsan dui in facilisis aliquet.,
    </p>
    <p>
        Etiam nec lectus urna. Sed sodales ultrices dapibus. 
        Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
        nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
        sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
        interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
        consequat quam. Vivamus accumsan dui in facilisis aliquet.,
    </p>
    </div>
 </Container>
);

export default AboutPage;