// // function List(){
// // const fruits = ["apple", "banana", "Orange", "mango"]

// // const listItems = fruits.map(fruit => <li>{fruit}</li> )

// //     return(<ul>{listItems}</ul>);
// //     // return(<ol>{listItems}</ol>);
// // }


//   // const listItems = fruits.map(fruit => <li key={fruit.id}>
//     //                 {fruit.name} : &nbsp; <b>{fruit.calories}</b>
//     // </li>);



// function List(props){

// //   //Displaying high calories friots only
// //   const highCalories = fruits.filter(fruit => fruit.calories > 200);
// //   const listItems = highCalories.map(highCalorie => 
// //     <tr key={highCalorie.id}>
// //         <td>{highCalorie.name}</td>
// //         <td>{highCalorie.calories}</td>
// //     </tr>
// // );


// //     // Displaying low calories fruits only
// //     const lowCalories = fruits.filter(fruit => fruit.calories < 200);
// //     const lowFruitData = lowCalories.map(lowCalorie => 
// //         <tr key={lowCalorie.id}>
// //             <td>{lowCalorie.name}</td>
// //             <td>{lowCalorie.calories}</td>
// //         </tr>
// //     );


//   //Displaying ALl data ie friots in the array
//     // const listItems = fruits.map(fruit => 
//     //     <tr key={fruit.id}>
//     //         <td>{fruit.name}</td>
//     //         <td>{fruit.calories}</td>
//     //     </tr>
//     // );


//     return (
//         <table border="1">
//             <thead>
//                 <tr>
//                     <th>Fruit Name</th>
//                     <th>Calories</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {listItems}
//                 <tr>
//                     <td>Low Calorie fruits</td>
//                     <td>Caloreis</td>
                   
//                 </tr>
//                 {lowFruitData}
//             </tbody>
//         </table>
//     );
// }

//     // return (<ol>{listItems}</ol>)

import PropTypes from 'prop-types';
function List (props){
    const category = props.categories;
    const itemList = props.items;

    const listItems = itemList.map(item => 
        <li key={item.id}>
        {item.name} : &nbsp;
        {item.calories}
        </li>
    )

    return(
        <>
        <h3 className="Category">{category}</h3>
        <ul className="List-item">{listItems}</ul>
        </>
    );
}

List.defaultProps = {
    category : "Category",
    itemList : [],
}
export default List;