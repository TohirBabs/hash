import React from "react";

export const StatusProgress = (props: any) => {
  let {
    size = 50,
    progress = 50,
    trackWidth = 3,
    trackColor = `#ddd`,
    indicatorWidth = 3,
    indicatorColor = `#07c`,
    indicatorCap = `round`,
    label = `Loading...`,
    labelColor = `#333`,
    spinnerMode = false,
    spinnerSpeed = 1,
  } = props;
  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);
  let hideLabel = size < 100 || !label.length || spinnerMode ? true : false;

  return (
    <>
      <div
        className="svg-pi-wrapper relative"
        style={{ width: size, height: size }}
      >
        <svg className="svg-pi rotate-90" style={{ width: size, height: size }}>
          <circle
            className="svg-pi-track"
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <circle
            className={`svg-pi-indicator ${spinnerMode ? "origin-center" : ""}`}
            //   style={{ animationDuration: spinnerSpeed * 1000 }}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap={indicatorCap}
          />
        </svg>
      </div>
    </>
  );
};
