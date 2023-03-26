import { useStates } from "./utilities/states"
import { Link } from "react-router-dom"
import {Card, Container, Col, Row, Button} from "react-bootstrap"
import CategoryFilter from "./CategoryFilter"

export default function MovieList() {
  const s = useStates("main")
  let filteredMovies =
    s.selectedCategory === "All"
      ? s.movies
      : s.movies.filter((m) => {
          return m.description.categories.includes(s.selectedCategory)
        })
  return (
    <div className="bg-light">
      <CategoryFilter></CategoryFilter>
      <Container fluid="md" className="bg-light">
        <Row xs={1} sm={2} md={3} xl={4} xxl={5} gap={3}>
          {filteredMovies.map(({ slug, title, description: d }) => (
            <Col className="my-3">
              <Link to={"/movie/" + slug} className="movie-link">
                <Card className="movie bg-primary">
                  <Card.Title className="text-center text-white py-1">
                    {title}
                  </Card.Title>
                  <Card.Img
                    variant="bottom"
                    src={"https://cinema-rest.nodehill.se" + d.posterImage}
                    style={{ objectFit: "cover", maxHeight: "14rem" }}
                  />
                  <Card.Body>
                    <Card.Text className="text-center text-white">
                      Duration: {Math.floor(d.length / 60)} h {d.length % 60} min
                      <br />
                      {d.categories.map(cat => <Button size="sm" disabled className="bg-light text-primary m-1 mt-2">
                        {cat}
                      </Button>)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
