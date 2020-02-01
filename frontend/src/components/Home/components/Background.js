import React from "react";

const Background = ({background, ...props}) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="100vh" viewBox="0 0 1077.18 1080" {...props}>
        <defs>
            <pattern id={background} width="1" height="1">
                <image href={background} width="1077.18" height="1080" preserveAspectRatio="xMidYMid slice"/>
            </pattern>
        </defs>
        <path fill={`url(#${background})`}
              d="M1077.18,0H938.63C814.66,85.8,699.37,170.33,596,251.26,565.65,275,536,298.7,507.89,321.7c-29.68,24.24-58.58,48.47-85.91,72-28.68,24.68-56.32,49.2-82.16,72.88-27.08,24.77-52.94,49.34-76.86,73-25,24.72-48.55,49.1-70,72.47-22.37,24.37-43.08,48.32-61.56,71.18-19.24,23.8-36.58,47.08-51.58,69.19-7.71,11.38-15,22.69-21.55,33.62-6.72,11.13-12.93,22.18-18.48,32.85-5.64,10.86-10.76,21.63-15.2,32-4.52,10.55-8.46,21-11.73,31.05a293,293,0,0,0-8.07,30,230.6,230.6,0,0,0-4.2,28.89A187.92,187.92,0,0,0,.44,968.5a159.83,159.83,0,0,0,4.1,26.37,148.05,148.05,0,0,0,8.55,25,149.93,149.93,0,0,0,13.18,23.49,291,291,0,0,0,21.09,27.14c2.78,3.17,5.7,6.37,8.7,9.5H1077.18Z"/>
    </svg>
);

export default Background;
