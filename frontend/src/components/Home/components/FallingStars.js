import React, {useState} from "react";
import styled from "styled-components";
import {useSpring, animated} from "react-spring";
import useWindowDimensions from "../../../scripts/hooks/useWindowDimensions";

const Star = styled(animated.div)`
    transform: rotateZ(45deg);
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: white;
    z-index: -1;
    
    :before {
        width: 100px;
        background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(255,255,255,0.5) 100%);
        height: 5px;
        right: 1px;
        position: absolute;
        content: "";
    }
`;

const config = {
    clamp: true,
    mass: 400,
    tension: 100,
    friction: 30
};

const generateStartingAxes = width => ({
    top: -Math.floor(Math.random() * 100 + 5),
    left: Math.floor(Math.random() * (width - 400) + 400 - 787)
});

const generateEndingAxes = (width, height, startingAxes) => {
    const topDifference = height - startingAxes.top - 20;
    const leftDifference = width - startingAxes.left + 105;
    const minDifference = Math.min(topDifference, leftDifference);
    return {
        top: startingAxes.top + minDifference,
        left: startingAxes.left + minDifference
    }
};

const FallingStar = () => {
    const [width, height] = useWindowDimensions();
    const [startingAxes, setStartingAxes] = useState(generateStartingAxes(width));
    const [endingAxes, setEndingAxes] = useState(generateEndingAxes(width, height, startingAxes));
    const animationStyle = useSpring({
        from: {top: startingAxes.top, left: startingAxes.left},
        to: {top: endingAxes.top, left: endingAxes.left},
        reset: true,
        config,
        delay: Math.random() * 5000,
        onRest: () => {
            setTimeout(() => {
                const newStartingAxes = generateStartingAxes(width);
                const newEndingAxes = generateEndingAxes(width, height, newStartingAxes);
                setStartingAxes(newStartingAxes);
                setEndingAxes(newEndingAxes);
            }, Math.random() * 1000)
        }
    });

    return (
        <Star style={animationStyle}/>
    );
};

const FallingStars = () => {
    let starArray = [];
    for (let i = 0; i < 20; i++) {
        starArray.push(<FallingStar key={i}/>)
    }
    return (
        <>
            {starArray}
        </>
    )
};

export default FallingStars;
