import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "../atoms/Typography";
import Btn from "../atoms/Btn";
import Pagination from "@mui/material/Pagination";
import Splitter from "../atoms/Splitter";
import Line from "../atoms/Line";
import { useSwipeable } from "react-swipeable";

function Testimonials({ testimonialsData }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(
      (prevActiveStep) =>
        (prevActiveStep + 1) % testimonialsData?.TestimonialsList?.length
    );
  };

  const scrollToTarget = (target) => {
    const targetSection = document.getElementById(target);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) =>
        (prevActiveStep - 1 + testimonialsData?.TestimonialsList?.length) %
        testimonialsData?.TestimonialsList?.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
  });

  return (
    <div className="testimonials-root">
      <div id="testimonials-root-header" className="testimonials-root-header">
        <Typography className={"project-header"}>{"Testimonials"}</Typography>
        <Line />
      </div>
      <div {...handlers}>
        <div
          id="testimonials-root-container"
          className="testimonials-root-container"
        >
          <div className="testimonials-buttons">
            <Btn
              color="primary"
              onClick={() => {
                handleBack();
              }}
              labelClassName="testimonials-arrow"
            >
              {"<"}
            </Btn>
          </div>

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
                        <Splitter className="testimonials-spllitter" />
                        <Typography className={"testimonials-realtion"}>
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
          <div className="testimonials-buttons">
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
        </div>
      </div>
      <div className="testimonials-recommendation-pagination">
        <Pagination
          count={testimonialsData?.TestimonialsList?.length}
          boundaryCount={testimonialsData?.TestimonialsList?.length}
          hideNextButton
          hidePrevButton
          page={activeStep + 1}
          onChange={(ele, value) => {
            scrollToTarget("testimonials-root-header");
            setActiveStep(value - 1);
          }}
          sx={{ color: 'red' }}
          color="primary"
          className="testimonials-pagination"
        />
      </div>
    </div>
  );
}

export default Testimonials;
