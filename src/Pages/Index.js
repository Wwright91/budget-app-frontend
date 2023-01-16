import Transactions from "../Components/Transactions";

function Index({entries, setEntries}) {
  return (
    <div>
      <h3 className="p-2">Transactions</h3>
      <Transactions entries={entries} setEntries={ setEntries} />
    </div>
  );
}

export default Index;
