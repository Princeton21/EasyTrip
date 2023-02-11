import React from "react";
import "./AboutUs.css";

// import Steps from '../Home/Steps/Steps'
import linkedin from "../../assets/socials/linkedin.svg";
import github from "../../assets/socials/github.svg";
import bhushan from "../../assets/members/Bhushan.jpg";
const AboutUs = () => {
  return (
    <>
      <div className="about_us">
        <div className="story">
          <h2 className="story_heading">
            Our <span>Story</span>
          </h2>
          <hr />
          <p>
            lorem Lorem ipsum dolor sit amet. Ab vero dolor quo esse
            voluptatibus non officia inventore Lorem ipsum dolor sit amet. Ab
            vero dolor quo esse voluptatibus non officia inventore.lorem Lorem
            ipsum dolor sit amet. Ab vero dolor quo esse voluptatibus non
            officia inventore Lorem ipsum dolor sit amet. Ab vero dolor quo esse
            voluptatilorem Lorem ipsum dolor sit amet. Ab vero dolor quo esse
            voluptatibus non officia inventore Lorem ipsum dolor sit amet. Ab
            vero dolor quo esse voluptati
          </p>
        </div>

        <div className="team">
          <h2 className="team_heading">
            Our <span>Team</span>
          </h2>
          <hr />
          <div className="members_cards">
            <div className="card">
              <div className="bg">
                <img src={bhushan} className="card_img" alt="pic" />
                <div className="info_social">
                  <div className="card_info">
                    <h3 className="member_name">Princeton </h3>
                    <div className="member_class">TE COMP B</div>
                    <div className="designation">Team Leader</div>
                  </div>
                  <div className="socials">
                    <img className="github_icon" src={linkedin} alt="pic" />
                    <img className="linkedin_icon" src={github} alt="pic" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="bg">
                <img src={bhushan} className="card_img" alt="pic" />
                <div className="info_social">
                  <div className="card_info">
                    <h3 className="member_name">Princeton </h3>
                    <div className="member_class">TE COMP B</div>
                    <div className="designation">Team Leader</div>
                  </div>
                  <div className="socials">
                    <img className="github_icon" src={linkedin} alt="pic" />
                    <img className="linkedin_icon" src={github} alt="pic" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="bg">
                <img src={bhushan} className="card_img" alt="pic" />
                <div className="info_social">
                  <div className="card_info">
                    <h3 className="member_name">Princeton </h3>
                    <div className="member_class">TE COMP B</div>
                    <div className="designation">Team Leader</div>
                  </div>
                  <div className="socials">
                    <img className="github_icon" src={linkedin} alt="pic" />
                    <img className="linkedin_icon" src={github} alt="pic" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="bg">
                <img src={bhushan} className="card_img" alt="pic" />
                <div className="info_social">
                  <div className="card_info">
                    <h3 className="member_name">Princeton </h3>
                    <div className="member_class">TE COMP B</div>
                    <div className="designation">Team Leader</div>
                  </div>
                  <div className="socials">
                    <img className="github_icon" src={linkedin} alt="pic" />
                    <img className="linkedin_icon" src={github} alt="pic" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="bg">
                <img src={bhushan} className="card_img" alt="pic" />
                <div className="info_social">
                  <div className="card_info">
                    <h3 className="member_name">Princeton </h3>
                    <div className="member_class">TE COMP B</div>
                    <div className="designation">Team Leader</div>
                  </div>
                  <div className="socials">
                    <img className="github_icon" src={linkedin} alt="pic" />
                    <img className="linkedin_icon" src={github} alt="pic" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer />
      </div>
    </>
  );
};

export default AboutUs;
