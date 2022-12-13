export default function List({
  list,
  display = '',
  listStyle = 'none',
}) {
  const lis = list.map((item, index) => <li key={index}>{item}</li>);

  const styles = {
    listStyleType: listStyle,
    display: display,
    flexWrap: display === 'flex' ? 'wrap' : '',
  };

  return (
    <ul style={styles}>
      {lis}
    </ul>
  );
}
