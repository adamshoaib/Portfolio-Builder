import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "../atoms/Typography";
import Btn from "../atoms/Btn";
import Pagination from "@mui/material/Pagination";
import Splitter from "../atoms/Splitter";
import Line from "../atoms/Line";

function Testimonials({ testimonialsData }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(
      (prevActiveStep) =>
        (prevActiveStep + 1) % testimonialsData?.TestimonialsList?.length
    );
  };

  const handleBack = () => { 
    setActiveStep(
      (prevActiveStep) =>
        (prevActiveStep - 1 + testimonialsData?.TestimonialsList?.length) %
        testimonialsData?.TestimonialsList?.length
    );
  };

  return (
    <div className="testimonials-root">
      <div className="project-root-header">
        <Typography className={"title-heading"}>{"Testimonials"}</Typography>
        <Line />
      </div>
      <div className="testimonials-root-container">
        <Btn
          color="primary"
          onClick={() => {
            handleBack();
          }}
          labelClassName="testimonials-arrow"
        >
          {"<"}
        </Btn>

        {testimonialsData?.TestimonialsList?.map(
          (step, index) =>
            index === activeStep && (
              <div key={index} className="testimonials-recommendation-root">
                <div className="testimonials-recommendation-info">
                  <div>
                    <img
                      className="testimonials-recommendation-picture"
                      src={step.picture}
                      alt="My Icon"
                    />
                  </div>
                  <div className="testimonials-recommendation-personalInfo">
                    <Typography
                      className={
                        "testimonials-recommendation-personalInfo-name"
                      }
                    >
                      {step.name}
                    </Typography>
                    <Typography
                      className={
                        "testimonials-recommendation-personalInfo-details"
                      }
                    >
                      {step.designation}
                    </Typography>
                    <div className="testimonials-recommendation-relation">
                      <Typography className={"about-me-para"}>
                        {step.date}
                      </Typography>
                      <Splitter />
                      <Typography className={"about-me-para"}>
                        {step.relation}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div>
                  {
                    <Typography className={"about-me-para"}>
                      {step.recommendation.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Typography>
                  }
                </div>
              </div>
            )
        )}
        <Btn
          color="primary"
          onClick={() => {
            handleNext();
          }}
          labelClassName="testimonials-arrow"
        >
          {">"}
        </Btn>
      </div>
      <div className="testimonials-recommendation-pagination">
        <Pagination
          count={testimonialsData?.TestimonialsList?.length}
          boundaryCount={testimonialsData?.TestimonialsList?.length}
          hideNextButton
          hidePrevButton
          page={activeStep + 1}
          onChange={(ele, value) => {
            setActiveStep(value - 1);
          }}
          color="primary"
        />
      </div>
    </div>
  );
}

export default Testimonials;
