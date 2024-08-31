import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { ContactForm } from "./components/forms/contact-form";
import { Navigation } from "./components/navigation/navigation";
import { LeftTextRightImageSection } from "./components/sections/left-text-right-image-section";
import { LeftVideoRightText } from "./components/sections/left-video-right-text";
import { RightTextLeftImage } from "./components/sections/right-text-left-image";
import {
  firstTextSection,
  secondTextSection,
  videoSectionText,
} from "./utils/text-utils";

function App() {
  return (
    <Router>
      <div className="app-container">
      <Navigation />
      <div className="main-content">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <LeftTextRightImageSection
                mainBackgroundColor="var(--light-pink-color)"
                text={firstTextSection}
                imagePath="/images/flowers.jpg"
                textColor="white"
              />
              <LeftVideoRightText
                text={videoSectionText}
                videoId="3xPkwNu2o8g"
                textColor="var(--dark-purple-color)"
              />
              <RightTextLeftImage
                mainBackgroundColor="var(--light-purple-color)"
                text={secondTextSection}
                imagePath="/images/collaboration.jpg"
                textColor="white"
              />
            </div>
          }
        />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      </div>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
