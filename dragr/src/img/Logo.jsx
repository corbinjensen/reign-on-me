import React from 'react';

const Logo = () => {
    return(
        <svg 
        id="Layer_1" 
        data-name="Layer 1" 
        viewBox="0 0 170 114.67">
            <defs>  
                <linearGradient 
                    id="linear-gradient" 
                    x1="15" 
                    y1="87.66" 
                    x2="185" 
                    y2="87.66" 
                    gradientUnits="userSpaceOnUse"
                >
                        <stop offset="0" stop-color="#887de0"/>
                        <stop offset="0.05" stop-color="#8086e5"/>
                        <stop offset="0.15" stop-color="#6ba0f3"/>
                        <stop offset="0.21" stop-color="#57b7ff"/>
                        <stop offset="0.25" stop-color="#5dbaed"/>
                        <stop offset="0.32" stop-color="#6dc3bd"/>
                        <stop offset="0.42" stop-color="#85d078"/>
                        <stop offset="0.47" stop-color="#9ed271"/>
                        <stop offset="0.57" stop-color="#ddd961"/>
                        <stop offset="0.62" stop-color="#fddc58"/>
                        <stop offset="0.82" stop-color="#ffac35"/>
                        <stop offset="0.99" stop-color="#ff533f"/>
                </linearGradient>
            </defs>
            <path 
            fill='url(#linear-gradient)'
            class="cls-1" 
            d="M185,129.89V45h0L142.45,69.56,100,30.34h0L57.48,69.62,15.72,45.51,15,45V145H185V129.89Zm-23.11,0L107.93,98.75l33.35-19.26,35.51,32.82v17.58Zm-16,0H54l45.92-26.51ZM176.79,59v42.3l-28.18-26ZM100,41.34,135.12,73.8,99.91,94.12,64.81,73.85Zm-48.68,34-28,25.87v-42Zm-28,36.88L58.64,79.55,91.9,98.75,38,129.89H23.32Z" 
            transform="translate(-15 -30.33)"
            />
        </svg>
    )
}

export default Logo;

