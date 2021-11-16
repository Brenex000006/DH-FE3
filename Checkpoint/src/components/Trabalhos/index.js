import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const Trabalhos = () => {
  const card = [
    {
      id: 1,
      imageUrl:
        "https://www.windowsclub.com.br/wp-content/uploads/2019/11/ea-access-1.jpg",
      nome: "Projeto Final de FrontEnd - 1",
      descricao: "https://vanessagomesdeoliveira.github.io/projetofinalFront1/",
      gitHub: "https://github.com/juniorvilas/projetofinalFront1",
    },
    {
      id: 2,
      imageUrl:
        "https://www.windowsclub.com.br/wp-content/uploads/2019/11/ea-access-1.jpg",
      nome: "Arroz",
      descricao: "oi",
      gitHub: "oq",
    },
    {
      id: 3,
      imageUrl:
        "https://www.windowsclub.com.br/wp-content/uploads/2019/11/ea-access-1.jpg",
      nome: "Leite",
      descricao: "Link do Projeto",
      gitHub: "oq",
    },
  ];
  return (
    <>

      <section id="trabalhos">

        {card.map(({id, imageUrl, nome, descricao, gitHub }) => {
          return (
            <article className={'card' + id}>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                  <Card.Title>{nome}</Card.Title>
                  <a href={descricao} target="blank">
                    Link do Site do Projeto.
                  </a>
                  <a href={gitHub} target="blank">
                    Link do GitHub do Projeto.
                  </a>
                </Card.Body>
              </Card>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Trabalhos;
