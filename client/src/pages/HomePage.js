import React from 'react';
import { Link } from 'react-router-dom';
import softwareImg from '../images/software.jpeg';
import hardwareImg from '../images/hardware.jpeg';
import { useMediaQuery } from 'react-responsive'



const HomePage = () => {
    
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 769 })
    const isBigScreen = useMediaQuery({ minWidth: 769})
    const isTabletOrMobile = useMediaQuery({ maxWidth: 769 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })

    let isResponsive = {isBigScreen,isTabletOrMobile,isDesktopOrLaptop,isPortrait,isRetina}

    return(
        <div style={isResponsive}>
        <section id="content">
        <div className="banner">
         {isResponsive && <h1>I love software, and i love technology</h1>}
            {
                isResponsive && <p>
                Welcome to my blog! Proin congue
                ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.
                Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis 
            </p>
            }
        </div>
    </section>
    <article id="home">
       {
        isResponsive && <h1>Welcome to TechBoost</h1>
       }
      {
        isResponsive && <p>So what is Desolve? The short answer is that it comes from the combination of <strong>design</strong> and <strong>evolve</strong>, something we hope we're doing constantly. A slightly longer version is that we're a collection of photographers, designers, and creatives who enjoy urban photography. During our travels around the country, we take time to document the cities we love. You'll also occasionally find articles on design, our thoughts on the latest trends, and the odd posting on photography. </p>
      }
       {
           isResponsive && <h2>So... what aren't we ?</h2>
       }
       {
           isResponsive &&  <p>Professional photographers, for one. Please keep in mind that we're strictly amateur photographers. We submit these galleries out of love and creative expression. We're not likely to remember the settings we took the picture at, or even what lens we had. We're also not very exclusive. If you like what you see here, and want to participate, we'd love to have you. All galleries, articles, and posts go through a submittal and approval process, so if you're interested, drop us a line and tell us what you have in mind.</p>
       }
       {
          <p>We also occasionally have meetups. If, for example, we know we're coming to Miami, we'll let everyone know and schedule a meet up day to tour the city and take photos. If you'd like us to visit your city, <Link to={'/contact'} title="get in touch">let us know!</Link></p>
       }
        <section className="news">
            <h2>Upcoming coding sessions</h2>
            <p>Want to be a part of a Desolve.org meetup? Check out our upcoming dates and contact us if you'd like to hang out and shoot some photos with us!</p>
            <ul>
            
                <li>San Antonio <span>Jan 03</span></li>
                <li>Salt Lake City <span>Jan 23</span></li>
                <li>Grand Rapids <span>March 05</span></li>
                <li>Charleston <span>April 13</span></li>
                <li>San Francisco <span>June 03</span></li>
                <li>Seattle <span>July 16</span></li>
            </ul>
        </section>
        <section className="news">
            <h2>What the the projects will be about</h2>
            <p>Due to the heightened security concerns around the country, it has become common to find photographers routinely challenged when taking photographs in public places. With that in mind, we invite you to join us in a free forum as noted photographer Shea Hansen presents "Photographer's Rights in a Post 9/11 World."</p>
            <p>Shea will discuss what your rights are when taking photos in a public space. Following her talk we'll have an open forum where you can ask questions, compare experiences, and become better informed as to what your responsibilities are as amateur photographers.You can join us <Link style={{color:'black',textDecoration:'underline'}} to='/login'>here</Link></p>
        </section>
    </article>
    <div>
        <aside>
            <nav id="archives">
                <h2>Featured</h2>
                <ul>
                    <li><Link to="/featured/webtechnologies" title="web technologies">Web Technologies</Link></li>
                    <li><Link to="/featured/webdevelopement" title="web development">Web Development</Link></li>
                    <li><Link to="/featured/graphicDesign" title="graphic design">Graphic Design</Link></li>
                    <li><Link to="" title="data structures">Data Structures</Link></li>
                    <li><Link to="cincinnati.htm" title="school">School learning</Link></li>
                    <li><Link to="cincinnati.htm" title="school">Typing</Link></li>
                </ul>
            </nav>
            <section className="service">
                <h2>Software</h2>
             <Link to={'/login'}><img src={softwareImg} width="200" alt="This month's contest" /></Link>

            <p>Do you know where this is? Send your guess to us via the contact page. All correct entries will be added to a drawing at the end of the month. The randomly selected winner will win a framed print of their choice from our shop. Cool!</p>
                                    
           </section>
            <section className="service">
                <h2>Hardware</h2>
             <Link to={'/login'}><img src={hardwareImg} width="200" alt="This month's contest"/></Link>
             <p>Do you know where this is? Send your guess to us via the contact page. All correct entries will be added to a drawing at the end of the month. The randomly selected winner will win a framed print of their choice from our shop. Cool!</p>
            </section>
        </aside>
    </div>
</div>
    )
      
};

export default HomePage;