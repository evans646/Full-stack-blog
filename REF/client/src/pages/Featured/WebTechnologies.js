import React from "react";
import Container from "@material-ui/core/Container";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const h4 = {
  textDecoration: "1px underline",
  fontSize: "20px",
};

export function WebTechnologiesPage() {
  return (
    <Container maxWidth="lg" className="archItem">
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
        Welcome to Web Technologies
      </h1>
      <div className="content-container">
        <Accordion
          style={{
            backgroundColor: "#f2f2f2",
            width: "40vh",
            overflow: "hidden",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5" style={h4}>
              Table of Contents
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                marginLeft: "20px",
                listStyle: "none",
                fontSize: "15px",
                padding: "5px",
                lineHeight: "2.0em",
              }}
            >
              <ol>
                <li>1.0 CONCEPT OF MANAGEMENT</li>
                <li>1.1 FEATURES AND OBJECTIVES OF MANAGEMENT</li>
                <li>1.2 MANAGEMENT AND ADMINISTRATION</li>
              </ol>
            </div>
          </AccordionDetails>
        </Accordion>

        <p>
          <b style={{ fontSize: "23px", paddingTop: "40px" }}>
            What is web technologies ?
          </b>{" "}
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia
          assumenda eos reiciendis tempore iure consequuntur doloremque a, optio
          et eius, quam ducimus soluta dolorum provident sequi rerum minus hic,
          aliquid saepe! Ratione, ipsum voluptas? Voluptatem impedit libero
          doloribus quisquam itaque, nobis sit, temporibus officiis, possimus
          magnam accusamus suscipit qui molestias perspiciatis debitis adipisci
          repudiandae quo nihil numquam sapiente non veniam inventore soluta.
          Tempore accusantium nihil dolore? Ea totam vero soluta ad, sapiente
          voluptatum officia sed sunt? Repellendus nesciunt enim iste blanditiis
          dolorem itaque vel delectus, voluptas, cumque animi, veritatis
          distinctio. Nulla error libero quod iure eligendi dolor. Quia adipisci
          voluptatibus libero molestias, magni ducimus iste iure recusandae
          aliquam harum voluptatem nisi! Iusto in, impedit, quidem ab libero
          praesentium quaerat molestiae qui alias excepturi, accusantium
          possimus nisi harum at! Molestias esse sit quibusdam et, dolore enim
          possimus, porro nam quis quia nihil sint debitis earum eos iure. Natus
          illo nesciunt voluptates perferendis aperiam, nostrum incidunt quis
          nobis assumenda commodi nemo sit officiis rerum, deleniti excepturi
          aspernatur quidem maiores, pariatur enim quo beatae ipsum ab quaerat.
          Repellat temporibus natus consequuntur quisquam, nihil beatae
          exercitationem neque ratione doloribus officiis voluptates alias
          provident vero sit obcaecati, quo quod eveniet autem sequi quia
          voluptas? Corporis rem iusto cupiditate modi sequi, omnis eius unde,
          tempora doloremque deleniti quia pariatur aliquid accusamus id
          reiciendis mollitia nemo amet dolor sapiente. Architecto possimus
          corporis natus autem fugiat reiciendis? Optio repellendus maxime magni
          minima, facere nulla soluta, nemo totam, exercitationem vitae
          explicabo dolorem! Porro, sunt. Temporibus, sed enim! Reprehenderit
          dolor doloremque libero molestias, alias distinctio reiciendis
          corporis? Consequatur consectetur nemo non tempore reprehenderit iusto
          asperiores voluptate repudiandae corporis explicabo quia accusamus
          inventore, reiciendis neque exercitationem! Cum iure id inventore
          itaque sit corrupti et tempore quam, minus consequuntur natus autem
          laudantium, harum quos eius, aspernatur omnis expedita ex aliquid
          doloribus?
        </p>
      </div>
    </Container>
  );
}
