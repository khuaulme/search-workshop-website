import KeyWord from "./KeyWord";

const ClauseTable = () => {
  return (
    <table className="table-auto space-x-20 w-full">
      <thead className="text-green-700">
        <tr>
          <th>CLAUSE</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>{" "}
      <br></br>
      <tbody>
        <tr>
          <td>
            <KeyWord type="variable">must</KeyWord>
          </td>
          <td>
            Each operator subclause MUST match to be included in the search
            results. Contributes greatly to the searchScore. Maps to the{" "}
            <KeyWord type="variable">AND</KeyWord> boolean operator.
          </td>
        </tr>
        <br></br>

        <tr>
          <td>
            <KeyWord type="variable">mustNot</KeyWord>
          </td>
          <td>
            Clauses that must not match for a document to be included in the
            results. mustNot clauses don't contribute to a returned document's
            score. Maps to the <KeyWord type="variable">AND NOT</KeyWord>{" "}
            boolean.
          </td>
        </tr>
        <br></br>

        <tr>
          <td>
            <KeyWord type="variable">should</KeyWord>
          </td>
          <td>
            Clauses that you prefer to match in documents that are included in
            the results. Contributes to the searchScore. Maps to the{" "}
            <KeyWord type="variable">OR</KeyWord> boolean.
          </td>
        </tr>
        <br></br>

        <tr>
          <td>
            <KeyWord type="variable">filter</KeyWord>
          </td>
          <td>
            Clauses MUST all match for a document to be included in the results-
            BUT filter clauses DO NOT contribute to the document's searchScore.
          </td>
        </tr>
      </tbody>{" "}
    </table>
  );
};

export default ClauseTable;
