import React from 'react'

export const NextArrow = (props) => {
    // const { className, style, onClick } = props;
    return (
        < >
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "rgba(105,105,105,0.4)", padding: '0', width: '40px', height: '40px', display: "flex", justifyContent: "center", alignItems: 'center', borderRadius: '7px 0 0 7px' }}
                onClick={props.onClick}
            />
        </>
    )
}

export const PrevArrow = (props) => {
    // const { className, style, onClick } = props;
    return (
        <>
            <div
                className={props.className}
                style={{ ...props.style, backgroundColor: "rgba(105,105,105,0.4)", padding: '0', width: '40px', height: '40px', display: "flex", justifyContent: "center", alignItems: 'center', borderRadius: '0 7px 7px 0' }}
                onClick={props.onClick}
            />
        </>
    )
}