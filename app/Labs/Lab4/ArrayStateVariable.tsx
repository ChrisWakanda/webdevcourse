import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";

const containerStyle = {
  maxWidth: "350px",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#fff",
  fontFamily: "sans-serif",
};

const addButtonStyle = {
  marginBottom: "15px",
};

const ulStyle = {
  listStyleType: "none",
  paddingLeft: 0,
  margin: 0,
  border: "1px solid #ddd",
  borderRadius: "5px",
  overflow: "hidden",
};

const baseLiStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 15px",
  fontSize: "1.2rem",
  fontWeight: 500,
  borderBottom: "1px solid #eee",
};

const lastLiStyle = {
  ...baseLiStyle,
  borderBottom: "none",
};

export default function ArrayStateVariable() {

    const { todos } = useSelector((state: any) => state.todosReducer);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" style={containerStyle}>
      <h2>Array State Variable:</h2>

      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>
            {todo.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
      
      <button 
        className="btn btn-success" 
        style={addButtonStyle}
        onClick={addElement}
      >
        Add Element
      </button>

      <ul style={ulStyle}>
        {array.map((item, index) => {
          const isLastItem = index === array.length - 1;
          
          return (
            <li 
              key={index} 
              style={isLastItem ? lastLiStyle : baseLiStyle}
            >
              {item}
              <button 
                className="btn btn-danger" 
                onClick={() => deleteElement(index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}