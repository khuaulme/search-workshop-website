const PDF = () => {
  return (
    <div className="w-full">
      {" "}
      <iframe
        className="w-full h-[60vh] mx-auto"
        title="pdf"
        src={
          "https://kwh-demos.s3.amazonaws.com/AtlasSearchWorkshopSetUp_Nov2023.pdf"
        }
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default PDF;
