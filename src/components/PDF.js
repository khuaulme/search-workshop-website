import samplePDF from "../images/AtlasSearchWorkshopSetUp.pdf";

const PDF = () => {
  return (
    <div className="w-full">
      {" "}
      <iframe
        className="w-full h-[60vh] mx-auto"
        title="pdf"
        src={samplePDF}
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default PDF;
