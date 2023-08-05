// // Import required libraries
// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Container,
//   List,
//   ListItem,
//   ListItemText,
// } from "@material-ui/core";
// import { AddCircleOutline, Delete } from "@material-ui/icons";
// import styled from "styled-components";

// // Styled components
// const TodoFormContainer = styled.div`
//   margin-top: 20px;
// `;

// const TodoListContainer = styled.div`
//   margin-top: 20px;
// `;

// const TodoListItem = styled(ListItem)`
//   &:hover {
//     background-color: #f5f5f5;
//   }
// `;

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [todoText, setTodoText] = useState("");

//   // Function to add a new todo
//   const addTodo = () => {
//     if (todoText.trim() !== "") {
//       setTodos([...todos, todoText]);
//       setTodoText("");
//     }
//   };

//   // Function to remove a todo by index
//   const removeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   return (
//     <Container>
//       <h1>Todo Form</h1>
//       <TodoFormContainer>
//         <TextField
//           label="Todo"
//           variant="outlined"
//           fullWidth
//           value={todoText}
//           onChange={(e) => setTodoText(e.target.value)}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<AddCircleOutline />}
//           onClick={addTodo}
//           style={{ marginTop: "10px" }}
//         >
//           Add Todo
//         </Button>
//       </TodoFormContainer>
//       <TodoListContainer>
//         <List>
//           {todos.map((todo, index) => (
//             <TodoListItem key={index}>
//               <ListItemText primary={todo} />
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 startIcon={<Delete />}
//                 onClick={() => removeTodo(index)}
//               >
//                 Delete
//               </Button>
//             </TodoListItem>
//           ))}
//         </List>
//       </TodoListContainer>
//     </Container>
//   );
// };

// export default App;
