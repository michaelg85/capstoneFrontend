import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      
      <NavLink to={"/"}>1 v 1</NavLink>
      {" • "}
      <NavLink to={"/search"}>Search</NavLink>
      {" • "}
      <NavLink to={"/help"}>Help</NavLink>
      {" • "}
      <NavLink to={"/aboutUs"}>About Us</NavLink>
      {" • "}
      <NavLink to={"/contact"}>Contact</NavLink>
      {" • "}
      <NavLink to={"/list"}>List</NavLink>
      <h1 style={{ fontSize: "60px", color: "yellow" }}>Whose Movie?!</h1>
    </nav>
  );
}
