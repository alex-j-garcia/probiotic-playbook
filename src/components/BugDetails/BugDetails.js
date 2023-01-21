import List from '../../common/components/List';
import Badge from "../../common/components/Badge";

export default function BugDetails() {
  // const { name, type, info, impact, recommendation, beneficiaries } = item;
  return (
    <div className='BugDetails'>
      <h1>Bug Details Component</h1>
    </div>
  );

  // return (
  //   <div className='BugDetails'>
  //     <h1>{name}</h1>
  //     <Badge type={type} />
  //     <h2>General Info</h2>
  //     <p>{info}</p>
  //     <h2>Possible Impacts</h2>
  //     <p>{impact}</p>
  //     <h2>Recommendations</h2>
  //     <List list={recommendation} listStyle='disc' />
  //     <h2>Downstream Beneficiaries</h2>
  //     <List list={beneficiaries} listStyle='disc' />
  //   </div>
  // );
}
