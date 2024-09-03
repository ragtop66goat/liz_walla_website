import { IRightTextLeftImageProps } from "../../types";

export const RightTextLeftImage: React.FC<IRightTextLeftImageProps> = (
  props: IRightTextLeftImageProps
) => {
  const { mainBackgroundColor, text, imagePath, textColor, altText } = props;
  return (
    <div className="diagonal-lines p-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <img
              src={imagePath}
              alt={altText}
              className="img-fluid rounded"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div
            className="col-12 col-md-6 p-4"
            style={{
              color: textColor,
              backgroundColor: mainBackgroundColor,
              textAlign: "center",
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};
