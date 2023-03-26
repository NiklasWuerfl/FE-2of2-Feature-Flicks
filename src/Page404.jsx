import { Container } from "react-bootstrap";

export default function Page404() {
  return (
      <div className="text-center text-black bg-light">
        <h2 className="display-4 pt-5">Oops! This page was not found!</h2>
        <p>
          The route <b>{location.pathname}</b> is not part of this site...
        </p>
      </div>
  );
}
