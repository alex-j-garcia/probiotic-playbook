export default function List({ list, listStyle = 'none', }) {
  const lis = list.map((item, index) => (
    <li className='List-item' key={index}>{item}</li>
  ));

  return <ul className='List' style={{ listStyleType: listStyle }}>{lis}</ul>;
}
