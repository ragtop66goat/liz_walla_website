import "./App.css";
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
    <>
      <Navigation />
      <div>
        <LeftTextRightImageSection
          mainBackgroundColor="var(--light-pink-color)"
          text={firstTextSection}
          imagePath="/images/flowers.jpg"
          textColor="white"
        />
        <LeftVideoRightText text={videoSectionText} videoId="3xPkwNu2o8g"  textColor="var(--dark-purple-color)"/>
        <RightTextLeftImage
          mainBackgroundColor="var(--light-purple-color)"
          text={secondTextSection}
          imagePath="/images/collaboration.jpg"
          textColor="white"
        />
      </div>
    </>
  );
}

export default App;
