import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>Page not found</h1>
      <p>This page doesn’t exist yet.</p>
      <Link to="/">Back to the home page</Link>
    </div>
  );
}
