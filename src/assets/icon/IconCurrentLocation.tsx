import {IIConsProps} from "@fash-q/assets/icon/index";

function IconCurrentLocation({className}: IIConsProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
    >
      <path
        stroke="url(#currentLocation)"
        strokeWidth="2"
        d="M14.4 3.24v.879l.873.112a9.856 9.856 0 0 1 8.496 8.498l.112.872h.88L26.6 13.6a.4.4 0 0 1 .068.794l-.097.006h-2.69l-.112.873a9.856 9.856 0 0 1-8.496 8.496l-.872.112v.88L14.4 26.6a.4.4 0 0 1-.794.068l-.006-.097v-1.81l.001-.88-.872-.112a9.856 9.856 0 0 1-8.498-8.496L4.12 14.4h-.88L1.4 14.4a.4.4 0 0 1-.068-.794l.097-.006h1.81l.88.001.112-.872A9.856 9.856 0 0 1 12.73 4.23l.872-.112v-.88L13.6 1.4a.4.4 0 0 1 .794-.068l.006.097v1.81ZM14 4.95a9.05 9.05 0 1 0 0 18.1 9.05 9.05 0 0 0 0-18.1Zm0 4.45a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Z"
      />
      <defs>
        <linearGradient
          id="currentLocation"
          x1="14"
          x2="14"
          y1="0"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2C3036" />
          <stop offset="1" stopColor="#575F6B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default IconCurrentLocation;
