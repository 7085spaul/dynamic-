export const addWidget = (category, widget) => ({
  type: 'ADD_WIDGET',
  payload: { category, widget }
});

export const removeWidget = (category, widgetId) => ({
  type: 'REMOVE_WIDGET',
  payload: { category, widgetId }
});
