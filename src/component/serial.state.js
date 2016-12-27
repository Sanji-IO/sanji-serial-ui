//-------------------------------------------------------------------
// Constants
//-------------------------------------------------------------------
export const GET_SERIALS = 'GET_SERIALS';
export const UPDATE_SERIAL = 'UPDATE_SERIAL';

//-------------------------------------------------------------------
// Actions
//-------------------------------------------------------------------

export const SerialAction = ($q, serialService) => {
  'ngInject';

  const getSerials = options => {
    return (dispatch, getState) => {
      const { serials } = getState();

      if((options && !options.force) && serials.length) {
        return $q.when(serials)
          .then(() => dispatch({ type: GET_SERIALS, payload: serials }));
      } else {
        return serialService.get()
          .then(data => dispatch({ type: GET_SERIALS, payload: data }));
      }
    };
  };

  const updateSerial = payload => {
    return dispatch => {
      return serialService.update(payload)
        .then(() => dispatch({ type: UPDATE_SERIAL, payload }));
    };
  };

  return {
    getSerials,
    updateSerial
  };
};

//-------------------------------------------------------------------
// Reducers
//-------------------------------------------------------------------
export const serials = (state = [], {type, payload}) => {
  switch (type) {
    case GET_SERIALS:
      return payload || state;
    case UPDATE_SERIAL:
      return state.map(data => serial(data, {type, payload}));
    default:
      return state;
  }
};

const serial = (state, {type, payload}) => {
  switch (type) {
    case UPDATE_SERIAL:
      if (state.content.id !== payload.content.id) {
        return state;
      }
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
