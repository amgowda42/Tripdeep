import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-content-left">
            <h5>Established since 1991</h5>
            <h4>All About Malpe Beach</h4>
            <p className="about-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              mollitia alias, vitae laudantium unde aperiam laboriosam ex,
              aspernatur nesciunt perspiciatis architecto voluptate voluptatibus
              reprehenderit nam exercitationem beatae. Quas, ex verop
            </p>
            <p className="about-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              mollitia alias, vitae laudantium unde aperiam laboriosam ex,
              aspernatur nesciunt perspiciatis architecto voluptate voluptatibus
              reprehenderit nam exercitationem beatae. Quas, ex verop
            </p>
            <button className="about-btn">See More</button>
          </div>
          <div className="about-content-right">
            <img src="/utils/images/just_img.jpg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
