interface IRightTextLeftImageProps {
    mainBackgroundColor: string;
    text: string;
    imagePath: string;
    textColor: string;
  }
  
  export const RightTextLeftImage: React.FC<IRightTextLeftImageProps> = (
    props: IRightTextLeftImageProps
  ) => {
    const { mainBackgroundColor, text, imagePath, textColor } = props;
    return (
      <div className="diagonal-lines p-3">
        <div className="d-flex justify-content-center align-items-center container">
          <div
            style={{
              backgroundImage: `url(${imagePath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              width: "700px",
              borderRadius: "10px"
            }}
          ></div>
          <div className="mx-5 p-5" style={{ flex: 1, color: textColor, backgroundColor: mainBackgroundColor }}>
            {text}
          </div>
        </div>
      </div>
    );
  };
  