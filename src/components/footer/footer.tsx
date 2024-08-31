import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="p-3" style={{ backgroundColor: "var(--faded-purple-color)" }}>
      <div className="container d-flex justify-content-between align-items-start">
        <h3 style={{ color: "var(--light-pink-color)" }}>Logo/Company Name</h3>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column mx-3">
            <NavLink to="/contact" className="footer-link">Contact</NavLink>
            <NavLink to="/" className="footer-link">Home</NavLink>
          </div>
          <div className="d-flex flex-column">
          <NavLink to="/" className="footer-link">Another Link</NavLink>
          <NavLink to="/" className="footer-link">Another Link</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
