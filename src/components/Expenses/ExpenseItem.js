import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28 )
  // const expenseTitle = "car insurance";
  // const expenseAmount = 213.337;

  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div>
       */}
      <ExpenseDate date = {props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
    // <div className = "expense-item">
    //     <div>{expenseDate.toISOString()}</div>
    //     <div className = "expense-item__description">
    //         <h2>{expenseTitle}</h2>
    //     <div className = "expense-item__price">
    //         {expenseAmount}</div>
    //     </div>
    // </div>
    // <div className = "expense-item">
    //     <div>March 28 2021</div>
    //     <div className = "expense-item__description">
    //         <h2>Car insurance</h2>
    //     <div className = "expense-item__price">
    //         $213.43</div>
    //     </div>
    // </div>
  );
}

export default ExpenseItem;
