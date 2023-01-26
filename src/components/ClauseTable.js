import KeyWord from "./KeyWord";

const ClauseTable = () => {
  return (
    <table className="table-auto space-x-20 w-full">
      <thead className="text-green-700">
        <tr>
          <th>CLAUSE</th>
          <th>DESCRIPTION</th>
          <th>BOOLEAN MAPPING</th>
        </tr>
      </thead>{" "}
      <tbody>
        <tr>
          <td>
            <span className="p-1  border border-green-900  font-bold text-lg rounded">
              must
            </span>
          </td>
          <td>
            Each operator subclause MUST match to be included in the search
            results. The returned score is the sum of the scores of all the
            subqueries in the clause.{" "}
            <div className="bg-fuchsia-800 h-1 w-full my-2"></div>
          </td>{" "}
          <td>
            <KeyWord type="variable">AND</KeyWord>
          </td>
        </tr>

        <tr>
          <td>
            <span className="p-1  border border-green-900  font-bold text-lg rounded">
              mustNot
            </span>
          </td>
          <td>
            Clauses that must not match for a document to be included in the
            results. mustNot clauses don't contribute to a returned document's
            score.<div className="bg-fuchsia-800 h-1 w-full my-2"></div>
          </td>
          <td>
            {" "}
            <KeyWord type="variable">AND NOT</KeyWord>
          </td>
        </tr>

        <tr>
          <td>
            <span className="p-1  border border-green-900 font-bold text-lg rounded">
              should
            </span>
          </td>
          <td>
            Clauses that you prefer to match in documents that are included in
            the results. The returned score is the sum of the scores of all the
            subqueries in the clause.
            <div className="bg-fuchsia-800 h-1 w-full my-2"></div>
          </td>
          <td>
            <KeyWord type="variable">OR</KeyWord>
          </td>
        </tr>

        <tr>
          <td>
            <span className="p-1  border border-green-900 font-bold text-lg rounded">
              filter
            </span>
          </td>
          <td>
            Clauses MUST all match for a document to be included in the results-
            BUT filter clauses DO NOT contribute to the document's searchScore.
            <div className="bg-fuchsia-800 h-1 w-full my-2"></div>
          </td>
          <td>
            <KeyWord type="variable">N/A</KeyWord>
          </td>
        </tr>
      </tbody>{" "}
    </table>
  );
};

export default ClauseTable;
