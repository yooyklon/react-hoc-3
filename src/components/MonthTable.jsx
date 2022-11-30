import DateList from "../hoc/DateList";

export default function MonthTable(props) {
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, i) => (
          <tr key={i}>
            <td>{item.month}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export const MonthTableContainer = DateList(MonthTable);
