import { createContext, useContext, useReducer, useCallback } from 'react';

const GlobalStateContext = createContext<any[]>([]);

const initialState = {
  loggedInUser: {},
  emailModalVisibility: false,
};

const GlobalStateReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_LOGGED_IN_USER':
      return {
        ...state,
        loggedInUser: action.user,
      };

    case 'SET_EMAIL_MODAL_VISIBILITY':
      return {
        ...state,
        emailModalVisibility: action.visibility,
      };

    default:
      return state;
  }
};

export const GlobalStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = (): {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loggedInUser: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setLoggedInUser: (user: any) => void;
  emailModalVisibility: boolean;
  setEmailModalVisibility: (visibility: boolean) => void;
} => {
  //eslint-disable-next-line
  const [state, dispatch] = useContext(GlobalStateContext);

  const setLoggedInUser = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (user: any) => {
      dispatch({ type: 'SET_LOGGED_IN_USER', user });
    },
    [dispatch],
  );

  const setEmailModalVisibility = useCallback(
    (visibility: boolean) => dispatch({ type: 'SET_EMAIL_MODAL_VISIBILITY', visibility }),
    [dispatch],
  );

  return {
    loggedInUser: state.loggedInUser,
    setLoggedInUser,
    emailModalVisibility: state.emailModalVisibility,
    setEmailModalVisibility
  };
};

export default useGlobalState;
