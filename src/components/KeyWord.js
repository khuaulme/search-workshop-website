const KeyWord = ({ children, bg = "black", tc = "white" }) => {
  return (
    <span className={`px-2 py-1 bg-${bg} text-${tc} rounded mx-1`}>
      {children}
    </span>
  );
};

export default KeyWord;
