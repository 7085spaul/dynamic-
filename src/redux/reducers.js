import categories from '../data/categories.json';

const initialState = {
  categories: categories
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: [
            ...state.categories[action.payload.category],
            action.payload.widget
          ]
        }
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: state.categories[action.payload.category].filter(
            widget => widget.id !== action.payload.widgetId
          )
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
