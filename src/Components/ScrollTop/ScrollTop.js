import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";


const Scroll = styled.div`
    position: fixed;
    bottom: 1.3rem;
    right: 0.7rem;
    text-align: center;
    background: #fff;
    box-shadow: 0 0 2px 0;
    z-index: 300;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        text-align: center;
        color: #024d4c;
    }
`

const ScrollTop = () => {
    const [lastYPos, setLastYPos] = useState(0);
    const [shouldShowActions, setShouldShowActions] = useState(false);
    
    const [scrollTop, setScrollTop] = useState(false);

    
    useEffect(() => {
        if(scrollTop) {
            window.scrollTo(0,0);
            setTimeout(() => {
                setScrollTop(false);
            }, 100);
        }
    });
    
    useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrolledDown = yPos > 100;

            setShouldShowActions(isScrolledDown);
            setLastYPos(yPos);
        }

        window.addEventListener("scroll", handleScroll, false);

        return () => {
        window.removeEventListener("scroll", handleScroll, false);
        };
    }, [lastYPos]);

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldShowActions ? 1 : 0 }}
            transition={{ opacity: { duration: 0.2 } }}
        >
            <Scroll onClick={() => setScrollTop(true)}>
                <FontAwesomeIcon icon={faChevronUp} />
            </Scroll>
        </motion.div>
    )
}

export default ScrollTop