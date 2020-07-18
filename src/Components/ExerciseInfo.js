// This components has been put on hold until further notice


// import React, { Component } from 'react'

// export class ExerciseInfo extends Component {

// constructor (props){
//   super(props);
//   this.state = {
//     items:[],
//     isLoaded: false,
//   }
// }

// componentDidMount() {
//   fetch('https://wger.de/api/v2/exerciseinfo/')
//     .then(res => res.json ())
//     .then(json => {
//         this.setState({
//           isLoaded: true,
//           items: json,
//         })
//     }); 
// }

//   render() {
//       const {isLoaded, items} = this.state;
      
//       if (!isLoaded){
//         return <div> Loading...</div>;
//       }

//       else {
//         return(
//           <div className="ExerciseInfo">
//             <ul>
//               {items.map(item=>(
//                 <li key = { item.id}>
//                     Name: {item.name}
//                     <br></br>
//                     Muscle Group: {item.category.name}
//                     <br></br>
//                     Description:{item.description}
//                 </li>
//               ))};
//             </ul>
//           </div>
//         )
//       }

//   }
// }
// export default ExerciseInfo;
