import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="grid min-h-[100svh] place-content-center gap-2 p-6">
      <h1 className="m-0 font-display">Page not found</h1>
      <p className="m-0">This page doesn’t exist yet.</p>
      <Link to="/">Back to the home page</Link>
    </div>
  );
}
