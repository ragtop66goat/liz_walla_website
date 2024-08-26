interface IVideoIFrameProps {
    videoId: string;
}

export const VideoIFrame: React.FC<IVideoIFrameProps> = (props: IVideoIFrameProps) => {
const {videoId} = props;

  return (
    <div style={{ width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative' }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
};
