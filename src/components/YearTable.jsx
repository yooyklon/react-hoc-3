import DateList from "../hoc/DateList";

export default function YearTable(props) {
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, i) => (
          <tr key={i}>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export const YearTableContainer = DateList(YearTable);
