import { useState } from "react";

import Form from "./form";
import { nanoid } from "nanoid";
import Items from "./items";

import { ToastContainer , toast} from "react-toastify";

const App = () => {

  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id:nanoid(),
    }
    setItems([...items, newItem])
    toast.success('item added Successfully')
  }

  const removeItem = (itemId) => {
      const newItems = items.filter(item => item.id !== itemId )
      setItems(newItems);
    toast.success('item removed Successfully')
  }

  return <section className="section-center">
  <ToastContainer position="top-center"/>
    <Form addItem = {addItem} />
    <Items items={items} removeItem={removeItem}/>
  </section>;
};

export default App;
