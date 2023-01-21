import Badge from "../../common/components/Badge";
import List from '../../common/components/List';

export default function BugDetails({ item }) {
  const { name, type, info, impact, recommendation, beneficiaries } = item;

  return (
    <div className='BugDetails'>
      <h1>{name}</h1>
      <Badge type={type} />
      <p>{info}</p>
      <p>{impact}</p>
      <List list={recommendation} listStyle='disc' />
      <List list={beneficiaries} listStyle='disc' />
    </div>
  );
}
