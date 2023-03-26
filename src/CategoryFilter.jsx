import { useStates } from "./utilities/states";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

export default function Category() {
  const s = useStates("main");

  return (
    <Container className="bg-primary py-3" fluid>
      <Dropdown>
      <Dropdown.Toggle variant="light" className="text-primary">
        Categories
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ minWidth: "50%" }}>
        <Dropdown.Item
          onClick={() => (s.selectedCategory = "All")}
          active={s.selectedCategory === "All"}
        >
          All
        </Dropdown.Item>
        {s.categories.map(({ title }) => (
          <Dropdown.Item
            onClick={() => (s.selectedCategory = title)}
            active={s.selectedCategory === title}
          >
            {title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
      <h1 className="pt-3 text-center text-white">{s.selectedCategory}</h1>
    </Container>
  );
}
