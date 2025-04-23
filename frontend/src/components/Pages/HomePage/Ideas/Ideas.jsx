import React from 'react';
import "./Ideas.css";
import { Link } from 'react-router-dom';

const IdeaCard = ({ imageUrl, title, description, linkTo }) => {
  return (
    <Link to={linkTo} className="mx-[5%] no-underline">
      <div className="service-card relative w-[350px] h-[400px] bg-[#E7EAEE] flex flex-col justify-around items-center rounded-[5%] p-[3%] border-4 border-[#CC1E4A]">
        <div className="top-image absolute top-0 left-[25%] w-1/2 max-h-[200px] p-[5%] -translate-y-[90px] bg-purple-600 rounded-[5%] shadow-[-2px_6px_2px_1px_rgba(0,0,0,0.6)]">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-[100px]"
          />
        </div>
        
        <div className="flex flex-col items-center mt-16">
          <h2 className="text-[2.5rem]">{title}</h2>
          <p className="text-[1.5rem]">{description}</p>
          <p className="click-button">
            Click Here
          </p>
        </div>
      </div>
    </Link>
  );
};

const Ideas = () => {
  const ideasData = [
    {
      imageUrl: "/images/Elelctricity.jpeg",
      title: "Electricity Generation",
      description: "Click to know more about Piezoelectric Materials",
      linkTo: "#three"
    },
    {
      imageUrl: "/images/wwdwyw.svg",
      title: "Solar Energy",
      description: "Explore sustainable solar energy solutions",
      linkTo: "#four"
    },
    {
      imageUrl: "/images/cwa.svg",
      title: "Wind Power",
      description: "Learn about wind energy technologies",
      linkTo: "#five"
    },
    {
      imageUrl: "/images/map.svg",
      title: "Hydro Power",
      description: "Discover hydroelectric power generation",
      linkTo: "#six"
    },
    {
      imageUrl: "/images/biomass.svg",
      title: "Biomass Energy",
      description: "Learn about organic matter energy conversion",
      linkTo: "#seven"
    },
    {
        imageUrl: "", // Remove the image URL for the eighth card
        title: "All Domains",
        description: "Click to view all the available Domains",
        linkTo: "/domains", // Changed from "#eight" to "/domains"
        isSpecial: true // Add a flag to identify the special card
    }
    
  ];

  return (
    <section id="two" className="min-h-screen bg-[#333] text-black flex justify-around items-center flex-wrap">
      <h1 id="ourservices" className="absolute bottom-0 right-0 text-[8rem] font-[900] text-[rgba(237,240,245,0.76)] font-poppins -translate-y-[50px] translate-x-0">
        Ideas
      </h1>
      
      <div className="ideas-container scrollbar-hide py-4">
        {ideasData.map((idea, index) =>
          index === 5 ? (
            <Link
              to="/domains" // Changed from href to to, and pointing to /domains
              key={index}
              className="mx-[5%] no-underline all-domains-card"
            >
              <div className="service-card relative w-[350px] h-[400px] bg-[#E7EAEE] flex flex-col justify-around items-center rounded-[5%] p-[3%] border-4 border-[#CC1E4A] overflow-hidden transition-all duration-300">
                {/* Title that moves further up on hover */}
                <h2 className="all-domain-title text-[2.5rem] absolute top-4 transition-all duration-300">
                  {idea.title}
                </h2>

                {/* Description that moves up and fades out on hover */}
                <p className="all-domain-description text-[1.5rem] transition-all duration-300">
                  {idea.description}
                </p>

                {/* Domains that appear with a delay on hover */}
                <div className="hover-domains">
                  <p>Water</p>
                  <p>Sun</p>
                  <p>Wind</p>
                  <p>Earth</p>
                </div>

                {/* Button that moves down on hover */}
                <p className="click-button transition-all duration-300">Click Here</p>
              </div>
            </Link>
          ) : (
            <IdeaCard
              key={index}
              imageUrl={idea.imageUrl}
              title={idea.title}
              description={idea.description}
              linkTo={idea.linkTo}
            />
          )
        )}
      </div>
      <style jsx>{`
        @media screen and (max-width: 768px) {
          #two {
            height: 110vh;
          }
          #two h1 {
            top: 6%;
            left: 0;
            font-size: 2.5rem;
          }
          .top-image {
            transform: translateY(10px);
            left: 38%;
            width: 25%;
            height: 26%;
          }
          .top-image img {
            width: 50px;
          }
          .service-card {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Ideas;