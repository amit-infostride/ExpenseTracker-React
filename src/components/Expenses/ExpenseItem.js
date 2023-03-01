import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import './ExpenseItem.css'
import React from 'react';

function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title);
  // console.log('expense item evaluated by react');        //   Expense item is called 4 times 

  //  let title =props.title;
  // const clickHandler = () => {

    // setTitle('updated !')     // when componenet is called state is updated 
    // we call react that the component which in which state 
    //was registered with use state*(props.title) should be re evaluated and react will exceute the code again and jsx code
    // only this specific instance is updated  others are not effected by state change


    // console.log('clicked');
    // title ='updated !';
  //   console.log(title);           // it is triggered in console but not updated in dom (does not parse the jsx code)
  // }

  return (
    <li>
    <Card className='expense-item'>I
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title </button> */}
    </Card>
    </li> 
  );
} 

export default ExpenseItem;

