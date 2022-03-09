import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Global, css } from "@emotion/react";

const intersectionObserver = () => {
  // Observing Elements
  const elems = document.querySelectorAll(".animate");

  const options = {
    root: null,
    // rootMargin: '-50% 0px', // Center of viewport
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Check
        // console.log(entry.target.dataset)

        // Action
        entry.target.classList.add("animated");
      }
    });
  }, options);

  // Start Observing
  elems.forEach((box) => {
    observer.observe(box);
  });
};

export default function DefaultLayout({ children }) {
  useEffect(() => {
    intersectionObserver();
  });

  return (
    <>
      <Global
        styles={css`
          .animate {
            &[data-animation="title"] {
              opacity: 0;
              transform: matrix(1, 0, 0, 1, 0, 25);
              transition: ease 0.5s;

              &.animated {
                opacity: 1;
                transform: matrix(1, 0, 0, 1, 0, 0);
              }
            }
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
