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
const SET_ORIGIN_CONFIRM = "setOriginConfirm";
const SET_DESTINATION_CONFIRM = "setDestinationConfirm";

interface IHomeLocation {
  origin?: LatLng | null;
  destination?: LatLng | null;
  current?: LatLng | null;
  originConfirm: boolean;
  destinationConfirm: boolean;
}

interface IAction {
  type: string;
  payload?: unknown;
}

const initialState: IHomeLocation = {
  destinationConfirm: false,
  originConfirm: false,
};

const HomeLocationContext = createContext<IHomeLocation>(initialState);
const HomeLocationAction = createContext<Dispatch<IAction>>(() => null);

interface ISetLocation {
  state: IHomeLocation;
  key: keyof IHomeLocation;
  payload: unknown;
}

const setLocation = (props: ISetLocation) => {
  const {payload, state, key} = props;
  if (payload instanceof LatLng || payload === null) {
    if (payload === null) {
      return {
        ...state,
        [`${key}Confirm`]: payload,
      };
    }
    return {
      ...state,
      [key]: payload,
    };
  }
  return state;
};

const setConfirm = (props: Omit<ISetLocation, "payload">) => {
  const {state, key} = props;
  return {
    ...state,
    [key]: true,
  };
};

function reducer(state: IHomeLocation, action: IAction): IHomeLocation {
  switch (action.type) {
    case SET_ORIGIN:
      return setLocation({state, key: "origin", payload: action.payload});
    case SET_DESTINATION:
      return setLocation({state, key: "destination", payload: action.payload});
    case SET_CURRENT:
      return setLocation({state, key: "current", payload: action.payload});
    case SET_ORIGIN_CONFIRM:
      return setConfirm({state, key: "originConfirm"});
    case SET_DESTINATION_CONFIRM:
      return setConfirm({
        state,
        key: "destinationConfirm",
      });
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

export const setOriginHomeLocation = (payload: LatLng | null) => ({
  type: SET_ORIGIN,
  payload,
});

export const setDestinationHomeLocation = (payload: LatLng | null) => ({
  type: SET_DESTINATION,
  payload,
});

export const setCurrentHomeLocation = (payload: LatLng | null) => ({
  type: SET_CURRENT,
  payload,
});

export const setOriginConfirmHomeLocation = () => ({
  type: SET_ORIGIN_CONFIRM,
});

export const setDestinationConfirmHomeLocation = () => ({
  type: SET_DESTINATION_CONFIRM,
});

export function useHomeLocation() {
  return useContext(HomeLocationContext);
}

export function useHomeLocationAction() {
  return useContext(HomeLocationAction);
}
