import { useParams } from "react-router-dom";

function Results() {
  const { name } = useParams();
  return (
    <div>No results for {name.slice(0, 1).toUpperCase() + name.slice(1)}.</div>
  );
}

export default Results;
