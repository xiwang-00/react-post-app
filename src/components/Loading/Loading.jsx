export const Loading = (props) => {
  return (
    <div
      style={{ top: "0", left: "0", right: "0", bottom: "0" }}
      className="position-absolute m-auto d-flex align-items-center justify-content-center "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          "--darkreader-inline-bgimage": "initial",
          "--darkreader-inline-bgcolor": "#1f2223",
          shapeRendering: "auto",
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        data-darkreader-inline-bgimage=""
        data-darkreader-inline-bgcolor=""
        {...props}
      >
        <g>
          <circle
            cx={60}
            cy={50}
            r={4}
            fill="#dfa950"
            data-darkreader-inline-fill=""
            style={{
              "--darkreader-inline-fill": "#e1ae59",
            }}
          >
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              values="95;35"
              keyTimes="0;1"
              begin="-0.67s"
            />
            <animate
              attributeName="fill-opacity"
              repeatCount="indefinite"
              dur="1s"
              values="0;1;1"
              keyTimes="0;0.2;1"
              begin="-0.67s"
            />
          </circle>
          <circle
            cx={60}
            cy={50}
            r={4}
            fill="#dfa950"
            data-darkreader-inline-fill=""
            style={{
              "--darkreader-inline-fill": "#e1ae59",
            }}
          >
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              values="95;35"
              keyTimes="0;1"
              begin="-0.33s"
            />
            <animate
              attributeName="fill-opacity"
              repeatCount="indefinite"
              dur="1s"
              values="0;1;1"
              keyTimes="0;0.2;1"
              begin="-0.33s"
            />
          </circle>
          <circle
            cx={60}
            cy={50}
            r={4}
            fill="#dfa950"
            data-darkreader-inline-fill=""
            style={{
              "--darkreader-inline-fill": "#e1ae59",
            }}
          >
            <animate
              attributeName="cx"
              repeatCount="indefinite"
              dur="1s"
              values="95;35"
              keyTimes="0;1"
              begin="0s"
            />
            <animate
              attributeName="fill-opacity"
              repeatCount="indefinite"
              dur="1s"
              values="0;1;1"
              keyTimes="0;0.2;1"
              begin="0s"
            />
          </circle>
        </g>
        <g transform="translate(-15 0)">
          <path
            d="M50 50L20 50A30 30 0 0 0 80 50Z"
            fill="#eb7f19"
            transform="rotate(90 50 50)"
            data-darkreader-inline-fill=""
            style={{
              "--darkreader-inline-fill": "#b96210",
            }}
          />
          <path
            d="M50 50L20 50A30 30 0 0 0 80 50Z"
            fill="#eb7f19"
            data-darkreader-inline-fill=""
            style={{
              "--darkreader-inline-fill": "#b96210",
            }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;45 50 50;0 50 50"
              keyTimes="0;0.5;1"
            />
          </path>
          <path
            d="M50 50L20 50A30 30 0 0 1 80 50Z"
            fill="#eb7f19"
            data-darkreader-inline-fill=""
            style={{
              "--darkreader-inline-fill": "#b96210",
            }}
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;-45 50 50;0 50 50"
              keyTimes="0;0.5;1"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};
