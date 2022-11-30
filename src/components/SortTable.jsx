import DateList from "../hoc/DateList";

export default function SortTable(props) {
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, i) => (
          <tr key={i}>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export const SortTableContainer = DateList(SortTable);
