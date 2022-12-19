import React from "react";
import { useState } from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, deleteAllTodo } from "../Actions/index";

// export default function Todo() {
//   const [inputData, setInputData] = useState("");
//   const list = useSelector((state) => state.todoReducer.list);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div className="mainCont">
//         <div id="caption">
//           Add your Todos here
//           {/* <i class="fa-solid fa-thumbs-up"></i> */}
//         </div>
//         <div className="addItem">
//           <input
//             type="text"
//             value={inputData}
//             onChange={(event) => setInputData(event.target.value)}
//             placeholder="Type text here to add todo"
//           />
//           <div
//             className="addIcn"
//             onClick={() => dispatch(addTodo(inputData), setInputData(""))}
//           >
//             <i class="fa-solid fa-plus" id="icn"></i>
//           </div>
//         </div>

//         <div className="showItems">
//           {list.map((ele) => {
//             return (
//               <div className="eachItem" key={ele.id}>
//                 <h3>{ele.data}</h3>
//                 <span
//                   id="delIcn"
//                   class="material-icons"
//                   onClick={() => dispatch(deleteTodo(ele.id))}
//                 >
//                   delete_forever
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         <div className="removeAll">
//           <button id="remAllBtn" onClick={() => dispatch(deleteAllTodo())}>
//             Remove All
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
