import React from "react";
import logo from "/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer text-base-content p-10 w-[80%] mx-auto">
        <nav>
          <img src={logo} alt="" />
        </nav>
        <nav className="test-base font-normal text-slate-700">
          <a className="link link-hover">Home us</a>
          <a className="link link-hover">Our menus</a>
          <a className="link link-hover">Meal Plans</a>
          <a className="link link-hover">Catering</a>
        </nav>
        <nav className="test-base font-normal text-slate-700">
          <a className="link link-hover">How it Works</a>
          <a className="link link-hover">Testmonial</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <form>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-base font-semibold uppercase">
                Subscribe To Our email alart
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
              />
              <button className="btn btn-success join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <footer className="footer footer-center bg-[#1E1E1E] text-white p-4">
        <aside>
          <p>
          © All rights reserved by Simply Good Foods
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
