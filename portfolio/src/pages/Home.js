import React from 'react';

const Home = () => {
    return (
        <div>
        <main className="container rounded">
    <section className="row">
      <div className="col-md-8">
        <article className="block">
          <h1 className="block-header">Ricardo Russ</h1>
          <hr />
          <img src="assets\imgs\MainProfilePic.jpg" alt="Profile pic of me" id="about-image" />
          <p>Full Stack Web-Developer with professional experience in the international relations and political science fields, 
            and a passion for inclusive and cohesive web design and workplaces. 
            Recently graduated with a certificate in Web Development from Georgia Tech’s School of Professional Development. 
            Proficient in React, CSS, Javascript, jQuery, MySQL, and MongoDB, and actively learning Python and AWS. Strong team player with a devotion to ensuring the highest quality product at all times.  
          </p>
          <br />
          <p>Of course, I'm not all business! I'm also a competitive ballroom dancer, focusing on the dances in the Latin style. When I'm not working or dancing, I love reading and I run a blog in my free time!
            I'm also an avid fan of FC Barcelona, the Atlanta Falcons, and the University of Georgia's athletic teams. I'm also learning Korean and Russian, and plan on traveling to (or living in!) both countries in the future.
          </p>
          <h1 className="block-header">
            Contact Information:
           </h1>
           <p><a href="ricardoruss@live.com">Email</a></p>
           <p><a href="assets\imgs\Ricardo-Russ_Resume.pdf">Resume</a></p>
            <p><a href="https://github.com/RicardoLRjr">Github</a> </p>
            <p><a href="https://www.linkedin.com/in/ricardo-russ-574a2a1a2/">LinkedIn</a></p>
        </article>
      </div>
    </section>
  </main>
        </div>
    );
};

export default Home;