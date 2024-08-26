interface ILeftTextRightImageSection {
  mainBackgroundColor: string;
  text: string;
  imagePath: string;
  textColor: string;
}

export const LeftTextRightImageSection: React.FC<ILeftTextRightImageSection> = (
  props: ILeftTextRightImageSection
) => {
  const { mainBackgroundColor, text, imagePath, textColor } = props;
  return (
    <div style={{ background: mainBackgroundColor, padding: 20 }}>
      <div className="d-flex justify-content-center align-items-center container">
        <div className="mx-5" style={{ flex: 1, color: textColor }}>
          {text}
        </div>
        <div
          style={{
            backgroundImage: `url(${imagePath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
            width: "700px",
          }}
        ></div>
      </div>
    </div>
  );
};
