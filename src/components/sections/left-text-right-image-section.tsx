import { ILeftTextRightImageSection } from "../../types";

export const LeftTextRightImageSection: React.FC<ILeftTextRightImageSection> = (
  props: ILeftTextRightImageSection
) => {
  const { mainBackgroundColor, text, imagePath, textColor, altText } = props;

  return (
    <div style={{ background: mainBackgroundColor, padding: 20 }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 p-4">
            <div
              className="mx-5"
              style={{ color: textColor, textAlign: "center" }}
            >
              {text}
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};
