
export function TechCruch(){
    return(
        <div>
        <section className="news">
          <h2>
            <a href={data.url} target="_blank" rel="noreferrer" title="Tech crunch">
              {data.title}
            </a>
          </h2>
          <p className="pubdate">
            <time pubdate="true" className="date-time">
              {dateFormat(data.publishedAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </time>
          </p>
          <img
            src={data.urlToImage}
            width={800}
            style={{ padding: "0", height: "50vh" }}
            alt="tech-crunch"
            className="tech-crunch-img"/>
          <p>
            {
              <p>
                {description}... read more
                <sup>
                  <Link to="/">
                    <FaRegShareSquare />
                  </Link>
                </sup>
              </p>
            }
          </p>
        </section>
      </div>
    )
};;