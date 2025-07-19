import { useState } from "react";
import Checkboxes from "../components/Checkboxes";
import Modal from "../components/Modal";

export const checkboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];

const Feature = () => {
  const [checked, setChecked] = useState({})

  return (
    <div>
      <Checkboxes data={checkboxesData}  
        checked={checked}
        setChecked={setChecked}
      />


      <Modal isOpen={true}>
        <Modal.Title>New</Modal.Title>
        <Modal.Content>Content</Modal.Content>
        <Modal.Footer><button>Add</button></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Feature;
