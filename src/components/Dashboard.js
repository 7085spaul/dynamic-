import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Widget from './Widget';
import AddWidget from './AddWidget';
import { addWidget, removeWidget } from '../redux/actions';

const Dashboard = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const [showAddWidget, setShowAddWidget] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddWidget = (category, widget) => {
    dispatch(addWidget(category, widget));
    setShowAddWidget(false);
  };

  const handleRemoveWidget = (category, widgetId) => {
    dispatch(removeWidget(category, widgetId));
  };

  const filteredCategories = Object.keys(categories).reduce((acc, category) => {
    acc[category] = categories[category].filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return acc;
  }, {});

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {Object.keys(filteredCategories).map(category => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="widgets">
            {filteredCategories[category].map(widget => (
              <Widget 
                key={widget.id} 
                widget={widget} 
                onRemove={() => handleRemoveWidget(category, widget.id)} 
              />
            ))}
          </div>
          <button onClick={() => setShowAddWidget(category)}>+ Add Widget</button>
        </div>
      ))}
      {showAddWidget && <AddWidget category={showAddWidget} onAdd={handleAddWidget} />}
    </div>
  );
};

export default Dashboard;

