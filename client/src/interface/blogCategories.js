import { Link} from "react-router-dom";

export function Categories(){
    return(
     <div className="columns">
        <span className="title">Categories</span>
        <section>
          <Link  className='categoriesTag' to="#">Javascript</Link>
          <Link  className='categoriesTag' to="#">HTML5</Link>
          <Link  className='categoriesTag' to="#">CSS3</Link>
          <Link  className='categoriesTag' to="#">Django</Link>
          <Link  className='categoriesTag' to="#">PHP</Link>
        </section>
      </div>
    )
};