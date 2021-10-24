import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect } from "react"

const intersectionObserver = () => {

  // Observing Elements
  const elems = document.querySelectorAll('.animate')

  const options = {
    root: null,
    // rootMargin: '-50% 0px', // Center of viewport
    threshold: 0
  }
  
  const observer = new IntersectionObserver((entries) =>
  {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        // Check
        // console.log(entry.target.dataset)

        // Action
        entry.target.classList.add('animated')
      
      }
    })
  
  }, options)

  // Start Observing
  elems.forEach(box => {
    observer.observe(box)
  })

}

export default function DefaultLayout({ children }) {

  useEffect(() => {
    intersectionObserver()
  })
  
  return (
    <>
      <Header />
      <div className="container py-5 my-5 content">
        { children }
      </div>
      <Footer />
    </>
  )
}
