"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import {LatLng} from "leaflet";

const SET_ORIGIN = "setOrigin";
const SET_DESTINATION = "setDestination";
const SET_CURRENT = "setCurrent";

interface IHomeLocation {
  origin?: LatLng;
  destination?: LatLng;
  current?: LatLng;
}

interface IAction {
  type: string;
  payload?: unknown;
}

const initialState: IHomeLocation = {};

const HomeLocationContext = createContext<IHomeLocation>(initialState);
const HomeLocationAction = createContext<Dispatch<IAction>>(() => null);

interface ISetLocation {
  state: IHomeLocation;
  key: keyof IHomeLocation;
  payload: unknown;
}

const setLocation = (props: ISetLocation) => {
  const {payload, state, key} = props;
  if (payload instanceof LatLng) {
    return {
      ...state,
      [key]: payload,
    };
  }
  return state;
};

function reducer(state: IHomeLocation, action: IAction): IHomeLocation {
  switch (action.type) {
    case SET_ORIGIN:
      return setLocation({state, key: "origin", payload: action.payload});
    case SET_DESTINATION:
      return setLocation({state, key: "destination", payload: action.payload});
    case SET_CURRENT:
      return setLocation({state, key: "current", payload: action.payload});
    default:
      return state;
  }
}

function HomeLocationProvider({children}: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HomeLocationContext.Provider value={state}>
      <HomeLocationAction.Provider value={dispatch}>
        {children}
      </HomeLocationAction.Provider>
    </HomeLocationContext.Provider>
  );
}

export default HomeLocationProvider;

export const setOriginHomeLocation = (payload: LatLng) => ({
  type: SET_ORIGIN,
  payload,
});

export const setDestinationHomeLocation = (payload: LatLng) => ({
  type: SET_ORIGIN,
  payload,
});

export const setCurrentHomeLocation = (payload: LatLng) => ({
  type: SET_ORIGIN,
  payload,
});

export function useHomeLocation() {
  return useContext(HomeLocationContext);
}

export function useHomeLocationAction() {
  return useContext(HomeLocationAction);
}
