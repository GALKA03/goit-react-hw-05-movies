import React from "react";
import { useState, useEffect } from "react";
import styles from "components/ScrollUp/ScrollUpBtn.module.css"
export const ScrollUpBtn = () => {
    const [scrollUpBtn, setscrollUpBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setscrollUpBtn(true)
            } else {
                setscrollUpBtn(false)
            }
        })
    }, [])
    
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }
    return (
    <>
        {scrollUpBtn && (
                <button className={styles.btn}
                   
                onClick={scrollUp}>^</button>     
        )}
        </>
    )
}