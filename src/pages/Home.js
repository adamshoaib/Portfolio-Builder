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
import Experience from "../components/organisms/Experience";
import GitHubCalender from "../components/organisms/GitHubCalender";

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
      experienceData,
      githubData,
    } = MyInformation;
    return (
      <div className="root-container">
        <ToolBar
          toolbarData={toolbarData}
          selected={selection}
          changeSelection={(data) => {
            this.onSelectionChange(data);
          }}
          themeChanged={(data) => {
            this.props.themeChanged(data);
          }}
        />
        {selection === "Home" ? (
          <>
            <Overview overviewData={overviewData} />
            {experienceData && <Experience experienceData={experienceData} />}
            <Projects projectsData={projectsData} />
            {certificatesData && certificatesData.certificates && (
              <Certificate certificatesData={certificatesData} />
            )}
            <Skills skillsData={skillsData} />
            {testimonialsData &&
              testimonialsData.TestimonialsList &&
              testimonialsData.TestimonialsList.length > 0 && (
                <Testimonials testimonialsData={testimonialsData} />
              )}
            {githubData && <GitHubCalender githubData={githubData} />}
            <Footer footerData={footerData} />
          </>
        ) : (
          <>
            <AboutMe
              aboutMeData={aboutMeData}
              timeLineData={timeLineData}
              githubData={githubData}
            />
          </>
        )}
      </div>
    );
  }
}

export default Home;
