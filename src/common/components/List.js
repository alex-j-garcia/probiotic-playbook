export default function List({ list, listStyle = 'none', }) {
  const lis = list.map((item, index) => <li key={index}>{item}</li>);

  return <ul style={{ listStyleType: listStyle }}>{lis}</ul>;
}
