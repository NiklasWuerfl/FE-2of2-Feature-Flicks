import { useStates } from "./utilities/states"
import { Link } from "react-router-dom"
import CategoryFilter from "./CategoryFilter"
import {Card, Container, Col, Row, Button} from "react-bootstrap"

export default function ScreeningList() {
  const s = useStates("main");
  let filteredScreenings =
    s.selectedCategory === "All"
      ? s.movieInfoScreenings
      : s.movieInfoScreenings.filter((sc) => {
          return sc.description.categories.includes(s.selectedCategory)
        })
  let dates = new Set(filteredScreenings.map((sc) => sc.time.substring(0, 10)));
  dates = [...dates]
  dates.sort((a, b) => new Date(a) - new Date(b));
  let screenInfos = []
  for (const date of dates) {
    screenInfos.push({
      date: new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(date)),
      screenings: filteredScreenings.filter((sc) => {
        return sc.time.substring(0, 10) == date
      }),
    })
  }
  return (
    <div className="bg-light">
      <CategoryFilter></CategoryFilter>
      <Container fluid="md">
        {screenInfos.map((screenInfo) => {
          return (
            <>
              <h1 className="text-primary">{screenInfo.date}</h1>
              <Row xs={1} sm={2} md={3} xl={4} xxl={5} gap={3}>
                {screenInfo.screenings.map(
                  ({ id, time, title, description: d, movieId: mid }) => (
                    <Col className="my-3">
                      <Link to={"/booking/" + id} className="screening-link">
                      <Card className="screening bg-primary">
                  <Card.Title className="text-center text-white py-1">
                    {title}
                  </Card.Title>
                  <Card.Img
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
                  )
                )}
              </Row>
            </>
          );
        })}
      </Container>
    </div>
  );
}
