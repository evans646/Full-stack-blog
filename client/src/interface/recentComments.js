import React,{useState} from 'react';

export function Recentcomments(){
    const [recentComments,setRecentcomments] = useState(false);

    return(
        <div className="columns comments">
        <span className="title">
          Recent Comments
          <a href="#" title="Explore More"><i className="fa fa-share"></i></a
        ></span>
        <section>
          <marquee
            direction="down"
            scrollamount="3"
            onMouseOver={()=>setRecentcomments(false)}
            onMouseOut={()=>setRecentcomments(true)}
            className="marquee2">
            <p>
              Remember, torn clothes should not be left at home. Dispose of them
              out. Buying new clothes like towels.
            </p>
            <p>
              wearing clothes, bedsheets are like inviting good luck to the home.
            </p>
            <p>
              Arrange doormats before every door and please change the doormats
              once in 6/8 months or maximum within 1 year. For More Daily
            </p>
            <p>
              Arrange doormats before every door and please change the doormats
              once in 6/8 months or maximum within 1 year. For More Daily
            </p>
          </marquee>
        </section>
      </div>
    )
}