import React, { Component } from "react";
import ToolBar from "../components/organisms/ToolBar";
import Overview from "../components/organisms/Overview";
import Skills from "../components/organisms/Skills";
import Projects from "../components/organisms/Projects";
import Timeline from "../components/organisms/Timeline";
import AboutMe from "../components/organisms/AboutMe";
import { MyInformation } from "../Info/Info";
import Certificate from "../components/organisms/Certificate";
import Testimonials from "../components/organisms/Testimonials";
import Footer from "../components/organisms/Footer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      selection: "Home",
    };
  }

  onSelectionChange = (newSelection) => {
    this.setState({ selection: newSelection });
  };
  render() {
    const { selection } = this.state;
    const {
      toolbarData,
      overviewData,
      skillsData,
      projectsData,
      timeLineData,
      aboutMeData,
      certificatesData,
      testimonialsData,
      footerData,
    } = MyInformation;

    return (
      <div className="root-container">
        <ToolBar
          toolbarData={toolbarData}
          selected={selection}
          changeSelection={(data) => {
            this.onSelectionChange(data);
          }}
        />
        {selection === "Home" ? (
          <>
            <Overview overviewData={overviewData} />
            <Skills skillsData={skillsData} />
            {timeLineData && timeLineData.timeLineImage && (
              <Timeline timeLineData={timeLineData} />
            )}
            <Projects projectsData={projectsData} />
            {certificatesData && certificatesData.certificates && (
              <Certificate certificatesData={certificatesData} />
            )}
            {testimonialsData &&
              testimonialsData.TestimonialsList &&
              testimonialsData.TestimonialsList.length > 0 && (
                <Testimonials testimonialsData={testimonialsData} />
              )}
            <Footer footerData={footerData} />
          </>
        ) : (
          <>
            <AboutMe aboutMeData={aboutMeData} />
          </>
        )}
      </div>
    );
  }
}

export default Home;
