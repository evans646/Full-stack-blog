import React from "react";
import Container from "@material-ui/core/Container";
import '../index.css';

export function SoftwarePage() {
  return ( 
    <>
    <Container>
      <h1 className='software-page'>Software</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem
        voluptas, tempore dolore, facere odio dolorem quae laboriosam
        cupiditate dignissimos suscipit aperiam animi eius, totam fuga fugiat
        ab! Fuga recusandae ratione tempora aperiam inventore. Dicta
        doloremque distinctio temporibus voluptas sapiente nulla repellendus
        enim est in magnam, officia, totam amet assumenda illum blanditiis
        expedita, eum deserunt corrupti pariatur nemo modi veritatis.
        Aspernatur laborum recusandae dolorem ab voluptates, officia facilis
        ex ducimus laboriosam rerum eius aliquam iste voluptas delectus sunt
        cumque aliquid quisquam vitae dolorum expedita facere! In vitae velit
        ut quia inventore autem nulla necessitatibus beatae laborum soluta.
        Ipsam quos a at sint sequi quia architecto, amet cum eligendi alias
        quidem dolore doloribus magni fugit et officia aliquid eaque vitae
        odit autem voluptates consequuntur consequatur eveniet? Officia modi
        totam et ullam voluptatibus sed quae fugit tenetur ducimus expedita,
        vero recusandae tempore libero impedit harum, fugiat atque voluptates
        similique adipisci beatae culpa optio aliquid a unde? Quia inventore
        neque facere sed est excepturi ut voluptatibus cumque architecto dicta
        assumenda officia earum repellat, magnam molestias, veniam, deserunt
        ipsam amet labore veritatis non cupiditate! Ducimus possimus suscipit
        sapiente, consequatur cupiditate dolor optio quos ipsam quod eveniet,
        nobis aut molestias libero! Expedita illum accusamus quas? ligendi
        alias quidem dolore doloribus magni fugit et officia aliquid eaque
        vitae odit autem voluptates consequuntur consequatur eveniet? Officia
        modi totam et ullam voluptatibus sed quae fugit tenetur ducimus
        expedita, vero recusandae tempore libero impedit harum, fugiat atque
        voluptates similique adipisci beatae culpa optio aliquid a unde? Quia
        inventore neque facere sed est excepturi ut voluptatibus cumque
        architecto dicta assumenda officia earum repellat, magnam molestias,
        veniam, deserunt ipsam amet labore veritatis non cupiditate! Ducimus
        possimus suscipit sapiente, consequatur cupiditate dolor optio quos
        ipsam quod eveniet, nobis aut molestias libero! Expedita illum
        accusamus quas?
      </p>
      <div>
        <pre className="language-javascript">
          <code>
           <span className='variable'>const</span> name = software;
            <br />
           <span className='variable'>let </span>
            <span>
            <span className="result">isTrue</span> = name.length &gt; 5 ? 'true' : 'false'
            </span>
            <br />
            console.<span style={{ color:'blue' }}>log</span>(<span className='result'>isTrue</span>)
          </code>
        </pre>
      </div>
    </Container>
  </>
   );
}

