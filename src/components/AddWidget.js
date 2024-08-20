import React, { useState } from 'react';

const AddWidget = ({ category, onAdd }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(category, { id: Date.now(), name, text });
  };

  return (
    <form onSubmit={handleSubmit} className="add-widget-form">
      <input 
        type="text" 
        placeholder="Widget Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Widget Text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidget;
