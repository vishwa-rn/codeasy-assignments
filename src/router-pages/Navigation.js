import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
}
