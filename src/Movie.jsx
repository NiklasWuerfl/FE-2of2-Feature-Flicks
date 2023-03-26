import {Container, Col, Button} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useParams, Link } from "react-router-dom";
import { useStates } from "./utilities/states";

export default function Movie() {

    const { slug } = useParams();

    const s = useStates("main");
  
    // find the movie and deconstruct properties from it to variables
    const movie = s.movies.find((movie) => movie.slug == slug);
    const { id, title, description } = movie;
    const { length, categories, posterImage } = description;
    const screenings = s.screenings
      .filter((sc) => sc.movieId === id)
      .sort(
        ({ time: aTime }, { time: bTime }) => new Date(aTime) - new Date(bTime)
      );

  return (
    <div className="bg-light">
      <Container
        className="d-flex flex-column flex-md-row align-items-center text-black"
        fluid="lg"
      >
        <Col md={6} className="mt-3">
          <h1>{title}</h1>
          <h4>
            Duration: {Math.floor(length / 60)} h {length % 60} m{" "}
          </h4>
          <h4>Categories: {categories.join(", ")}</h4>
          <Image
            className="my-3 border-primary"
            fluid
            thumbnail
            src={"https://cinema-rest.nodehill.se" + posterImage}
              />
        </Col>
        <Col lg={6} className="mt-3 mt-md-0 text-center">
          <h3>Our next screenings!</h3>
          {screenings.map((sc) => (
            <Button className="mb-3">
            <Link className="fs-3 text-white text-decoration-none" to={`/booking/${sc.id}`}>
              {new Intl.DateTimeFormat("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              }).format(new Date(sc.time))}
              </Link>
              </Button>
          ))}
        </Col>
      </Container>
    </div>
  );
}