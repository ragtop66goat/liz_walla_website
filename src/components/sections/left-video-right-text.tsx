import { VideoIFrame } from "./video-iframe";

interface ILeftVideoRightTextProps {
  text: string;
  videoId: string;
  textColor: string;
}

export const LeftVideoRightText: React.FC<ILeftVideoRightTextProps> = (
  props: ILeftVideoRightTextProps
) => {
  const { text, videoId, textColor } = props;

  return (
    <div className="container p-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <VideoIFrame videoId={videoId} />
        </div>
        <div
          className="col-12 col-md-6"
          style={{
            color: textColor,
            textAlign: "center",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
