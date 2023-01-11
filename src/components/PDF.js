import samplePDF from "../images/AtlasSearchWorkshopSetUp.pdf";

const PDF = () => {
  return (
    <div className="w-full">
      {" "}
      <iframe
        className="w-full h-[50vh] mx-auto my-10 "
        title="pdf"
        src={samplePDF}
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default PDF;
