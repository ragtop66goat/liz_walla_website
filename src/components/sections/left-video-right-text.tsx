import { VideoIFrame } from "./video-iframe";

interface ILeftVideoRightTExtProps {
    text: string;
    videoId: string;
    textColor: string;
}

export const LeftVideoRightText: React.FC<ILeftVideoRightTExtProps> = (props: ILeftVideoRightTExtProps) => {
    const {text, videoId, textColor} = props;

    return (
        <div className="d-flex justify-content-center align-items-center container p-5">
            <VideoIFrame videoId={videoId}/>
            <div className="m-4" style={{ color: textColor, maxWidth: "40%"}}>{text}</div>
        </div>
    )
}