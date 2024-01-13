import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(null);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionInput = (e) => {
    setDescription(e.target.value);
  }

  const handleClick = () => {
    if (update !== null) {
      const updatedList = [...list];
      updatedList[update] = { title, description };
      setList(updatedList);
      setUpdate(null);
    } else {
      setList([...list, { title, description }]);
    }

    setTitle("");
    setDescription("");
  }

  const handleDeleted = (i) => {
    const filterList = list.filter((_, index) => index !== i);
    setList(filterList);
  }

  const handleEdit = (i) => {
    const editedItem = list[i];
    setTitle(editedItem.title);
    setDescription(editedItem.description);
    setUpdate(i);
  }

  return (
    <div className='main'>
      <h2>TODO APPLICATION</h2>
      <div className="container">
        <div className="input-box">
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleInput(e)}
            placeholder='Enter Todo Title...'
          />
          <input
            type="text"
            value={description}
            onChange={(e) => handleDescriptionInput(e)}
            placeholder='Enter Todo Description...'
          />
          <button onClick={handleClick}>{update !== null ? "Update" : "Add Item"}</button>
        </div>
        <div className="list">
          <ul>
            {list.map((item, i) => (
              <li key={i}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
                <button onClick={() => handleDeleted(i)} className='delbtn'>Delete</button>
                <button onClick={() => handleEdit(i)} className='editbtn'>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
