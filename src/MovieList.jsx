import { useStates } from "./utilities/states";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Category from "./Category";

export default function MovieList() {
  const s = useStates("main");
  let filteredMovies =
    s.selectedCategory === "All"
      ? s.movies
      : s.movies.filter((m) => {
          return m.description.categories.includes(s.selectedCategory);
        });
  return (
    <div>
      <Category></Category>
      <Container fluid="md" className="bg-light">
        <Row xs={1} sm={2} md={3} xl={4} gap={3}>
          {filteredMovies.map(({ slug, title, description: d }) => (
            <Col className="my-3">
              <Link to={"/movie/" + slug} className="movie-link">
                <Card className="movie bg-primary">
                  <Card.Body>
                    <Card.Title className="text-center text-white">
                      {title}
                    </Card.Title>
                    <Card.Text className="text-center text-white">
                      Length: {Math.floor(d.length / 60)} h {d.length % 60} m
                      <br />
                      Categories: {d.categories.join(", ")}
                    </Card.Text>
                  </Card.Body>
                  <Card.Img
                    variant="bottom"
                    src={"https://cinema-rest.nodehill.se" + d.posterImage}
                    style={{ objectFit: "cover", maxHeight: "14rem" }}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
