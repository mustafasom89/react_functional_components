import React from "react";
const cards = [
  {
    header: "Certified Full Stack Web & Software Engineer bootcamp",
    body: "Learn to create complex and powerful software, apps, and websites in our most advanced Immersive bootcamp",
    period: "3 Months",
    footer: "View More...",
  },
  {
    header: "Software Engineer bootcamp",
    body: "Go from newbie to software engineer in no time. Learn everything you need to create amazing computer programs and software",
    period: "12 Months",
    footer: "View More...",
  },
  {
    header: "Data Science bootcamp",
    body: "Learn to use classic machine learning models and popular data science tools to work with data to empower business, research, and technology",
    period: "6 Months",
    footer: "View More...",
  },
  {
    header: "Full Stack Web Developer bootcamp",
    body: "Master frontend & backend web development to build database-driven web apps using the powerful MERN stack",
    period: "6 Months",
    footer: "View More...",
  },
];

function Bootcamps() {
  const rows = [];
  for (let i = 0; i < cards.length; i += 2) {
    rows.push(
      <div className="row" key={i}>
        <hr></hr>
        <div className="col">
          <div className="bootcamps">
            <div className="bootcamps-header">{cards[i].header}</div>
            <div className="bootcamps-body">{cards[i].body}</div>
            <div className="bootcamps-footer">{cards[i].footer}</div>
          </div>
        </div>
        {i + 1 < cards.length && (
          <div className="col">
            <div className="bootcamps">
              <div className="bootcamps-header">{cards[i + 1].header}</div>
              <div className="bootcamps-body">{cards[i + 1].body}</div>
              <div className="bootcamps-footer">
                <a href="#">{cards[i + 1].footer}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  return <div>{rows}</div>;
}

export default Bootcamps;
