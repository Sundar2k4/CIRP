import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DomainPage.css";

const DomainPage = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [Domains, setDomains] = useState([]);

  const getdomain = async () => {
    try {
      const response = await axios.get("https://cirp.onrender.com/domains");
      console.log(response.data);
      setDomains(response.data);
    } catch (error) {
      console.error("Error fetching domains:", error);
    }
  };

  const handleLevelClick = (domainId, level) => {
    const domain = Domains.find((d) => d._id === domainId);
    if (domain) {
      navigate(`/domains/${domain.title.toLowerCase()}/${level}`);
    }
  };

  const handleDomainClick = (domainId) => {
    const domain = Domains.find((d) => d._id === domainId);
    if (domain) {
      navigate(`/domains/${domain.title.toLowerCase()}/${domainId}`);
    }
  };

  const handleTopLevelClick = (level) => {
    setSelectedLevel(level === selectedLevel ? null : level);
  };

  const handleAddDomainClick = () => {
    navigate("/domainform");
  };

  useEffect(() => {
    getdomain();
  }, []);

  return (
    <div className="domain-page">
      <h1 className="domain-page-title">All Domains</h1>

      <div className="level-filters">
        <button
          className={`level-filter ${selectedLevel === "easy" ? "active" : ""}`}
          onClick={() => handleTopLevelClick("easy")}
        >
          Easy
        </button>
        <button
          className={`level-filter ${
            selectedLevel === "medium" ? "active" : ""
          }`}
          onClick={() => handleTopLevelClick("medium")}
        >
          Medium
        </button>
        <button
          className={`level-filter ${selectedLevel === "hard" ? "active" : ""}`}
          onClick={() => handleTopLevelClick("hard")}
        >
          Hard
        </button>
      </div>

      <div className="domains-container">
        {Domains.map((domain) => (
          <div
            key={domain._id}
            className="domain-card"
            onClick={() => handleDomainClick(domain._id)}
          >
            <div className="top-image">
              <img
                src={`https://cirp.onrender.com${domain.imageurl}`}
                alt={domain.title}
              />
            </div>
            <h2 className="domain-title">{domain.title}</h2>
            <p className="domain-description">{domain.description}</p>

            <div className="hover-content">
              <h2 className="hover-domain-title">{domain.title}</h2>
              <div className="hover-topics">
                {selectedLevel ? (
                  domain.topics[selectedLevel].map((topic, index) => (
                    <p key={index}>{topic}</p>
                  ))
                ) : (
                  <>
                    {domain.topics.easy.slice(0, 2).map((topic, index) => (
                      <p key={`easy-${index}`}>{topic}</p>
                    ))}
                    {domain.topics.medium.slice(0, 2).map((topic, index) => (
                      <p key={`medium-${index}`}>{topic}</p>
                    ))}
                    {domain.topics.hard.slice(0, 2).map((topic, index) => (
                      <p key={`hard-${index}`}>{topic}</p>
                    ))}
                  </>
                )}
              </div>
              {!selectedLevel && (
                <div className="hover-levels">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLevelClick(domain._id, "easy");
                    }}
                  >
                    Easy
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLevelClick(domain._id, "medium");
                    }}
                  >
                    Medium
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLevelClick(domain._id, "hard");
                    }}
                  >
                    Hard
                  </button>
                </div>
              )}
            </div>

            <button className="click-button">Click Here</button>
          </div>
        ))}

        {/* Add Domain Card */}
        <div
          className="domain-card add-domain-card"
          onClick={handleAddDomainClick}
        >
          {/* Removed top-image div */}
          {/*<div className="top-image">
            <img src="/images/add-domain.png" alt="Add Domain" />
          </div>*/}
          <h2 className="domain-title">Add New Domain</h2>
          <p className="domain-description">Click here to add a new domain</p>
          <button className="click-button">Add Domain</button>
        </div>
      </div>
    </div>
  );
};

export default DomainPage;
