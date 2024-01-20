"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

interface LatLng {
  lat: number;
  lng: number;
}

const SET_ORIGIN = "setOrigin";
const SET_DESTINATION = "setDestination";
const SET_CURRENT = "setCurrent";
const SET_ORIGIN_CONFIRM = "setOriginConfirm";
const SET_DESTINATION_CONFIRM = "setDestinationConfirm";
const SET_PRICE = "setPrice";

interface IHomeLocation {
  origin?: LatLng | null;
  destination?: LatLng | null;
  current?: LatLng | null;
  originConfirm: boolean;
  destinationConfirm: boolean;
  price: number;
  isLoading: boolean;
}

interface IAction {
  type: string;
  payload?: unknown;
}

const initialState: IHomeLocation = {
  isLoading: false,
  price: 0,
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

function isLatLng(payload: unknown): payload is LatLng {
  return (
    typeof payload === "object" &&
    !!payload?.hasOwnProperty("lat") &&
    !!payload?.hasOwnProperty("lng")
  );
}

const setLocation = (props: ISetLocation) => {
  const {payload, state, key} = props;
  if (isLatLng(payload) || payload === null) {
    if (payload === null) {
      return {
        ...state,
        [key]: payload,
        [`${key}Confirm`]: false,
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
    isLoading: key === "destinationConfirm",
    [key]: true,
  };
};

const setPrice = (props: ISetLocation) => {
  const {state, payload, key} = props;
  if (typeof payload === "number") {
    return {
      ...state,
      isLoading: false,
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
    case SET_ORIGIN_CONFIRM:
      return setConfirm({state, key: "originConfirm"});
    case SET_DESTINATION_CONFIRM:
      return setConfirm({
        state,
        key: "destinationConfirm",
      });
    case SET_PRICE:
      return setPrice({state, key: "price", payload: action.payload});
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

export const setPriceHomeLocation = (payload: number) => ({
  type: SET_PRICE,
  payload,
});

export function useHomeLocation() {
  return useContext(HomeLocationContext);
}

export function useHomeLocationAction() {
  return useContext(HomeLocationAction);
}
