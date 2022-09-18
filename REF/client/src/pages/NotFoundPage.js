import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";



export  function NotFoundPage() {


  return (
    <Container maxWidth="sm" style={{  margin: ' 20% 40%'}}>
      <h2>404: Requested Page Not Found</h2>
     <h3>Navigate back to <Link to="/">Home </Link>  </h3>
    </Container>
  );
}
