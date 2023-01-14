export default function List({
  list,
  listStyle = 'none',
}) {
  const lis = list.map((item, index) => <li key={index}>{item}</li>);

  const styles = {
    listStyleType: listStyle,
  };

  return (
    <ul style={styles}>
      {lis}
    </ul>
  );
}
