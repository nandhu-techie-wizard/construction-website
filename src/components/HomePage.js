import React from "react";

export default function HomePage() {

    return(
        <>
        

      {/* Hero Section */}
      <header className="bg-light text-center py-5">
        <h1>Building Excellence, Creating the Future</h1>
        <p>Delivering high-quality construction and infrastructure solutions with innovation and precision.</p>
        <a href="#contact" className="btn btn-primary">Get a Quote</a>
      </header>

      {/* Services Section */}
      <section id="services" className="container py-5">
        <h2 className="text-center">Our Services</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h4>Construction</h4>
            <p>Building durable and modern structures with expert craftsmanship.</p>
          </div>
          <div className="col-md-4">
            <h4>Infrastructure</h4>
            <p>Developing robust infrastructure for sustainable growth.</p>
          </div>
          <div className="col-md-4">
            <h4>Civil Engineering</h4>
            <p>Innovative engineering solutions for complex projects.</p>
          </div>
          <div className="col-md-4">
            <h4>Architecture Services</h4>
            <p>Designing aesthetic and functional spaces with creativity.</p>
          </div>
          <div className="col-md-4">
            <h4>Structural Design</h4>
            <p>Ensuring safe and efficient structural planning.</p>
          </div>
          <div className="col-md-4">
            <h4>Interior</h4>
            <p>Crafting elegant and personalized interior designs.</p>
          </div>
          <div className="col-md-4">
            <h4>Electrical Services</h4>
            <p>Providing reliable and advanced electrical solutions.</p>
          </div>
          <div className="col-md-4">
            <h4>Layout Formation</h4>
            <p>Expert planning for seamless and efficient layouts.</p>
          </div>
          <div className="col-md-4">
            <h4>Plan Sanctions & Corporation Works</h4>
            <p>Ensuring hassle-free approvals and regulatory compliance.</p>
          </div>
          <div className="col-md-4">
            <h4>Complete Project Solutions</h4>
            <p>End-to-end project management and execution.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-light py-5">
        <div className="container text-center">
          <h2>About Us</h2>
          <p>With years of expertise, Elite Builders delivers high-quality construction, infrastructure, and engineering solutions. Our mission is to shape the future with innovative designs and exceptional service.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-5 text-center">
        <h2>Contact Us</h2>
        <p>Email: info@elitebuilders.com | Phone: (123) 456-7890</p>
        <a href="mailto:info@elitebuilders.com" className="btn btn-primary">Email Us</a>
      </section>


        </>
    )
    
}