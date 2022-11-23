import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 38px;
  user-select: none;
  transform: translate(-50%, -50%);
  transition: all .1s ease-in-out;
  &:hover, &.selected  {
    z-index: 9999;
    cursor: pointer
  }
  &:hover svg, &.selected svg {
    fill: rgb(0,64,92);
    scale: 1.1;
  }
`;



type Marker = {
    text: string;
    onClick: any;
    ordine?: any;
    isHover: any;
    onMouseOver: any;
    onMouseOut: any;
    href: any;
};
/*
export const Check = (isHover, ordine) => {
    isHover.isHovering = true;
    isHover.hoverIndex = ordine;
   *//* console.log(isHover)*//*
 return (<><p>{isHover}</p></>
     )
}
*/
const Marker = (props: Marker) => {
    const { text, onClick, ordine, isHover, onMouseOver, onMouseOut, href } = props;

    return (
        <Wrapper
            alt={text}
            onClick={onClick}
            className={isHover == ordine ? "selected" : ""}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            <span style={{ color: "white", position: "absolute", zIndex: "1", fontSize: "14px", bottom: "88%" }}>{ordine + 1}</span>

            <div style={{ position: "absolute", bottom: "50%", width: "100%", height: "100%" }} >
                <svg fill="rgb(0, 141, 201)" stroke="white" strokeWidth="5px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 90 125" xmlSpace="preserve" height="100%" width="100%">
                    <g><path className="st1" d="M27.81,96.57c4.42,7.04,9.2,15.57,13.92,23.86c1.75,3.06,3.33,3.52,5.43-0.11c4.56-7.91,9.04-16.1,13.76-23.74 c14.33-23.19,37.78-45.8,19.13-77.01C63.49-8.14,18.45-5.18,4.98,20.62C-10.46,50.19,13.65,74.03,27.81,96.57L27.81,96.57z"></path></g>
                </svg>
            </div>
            <a href={href} style={{ position: "absolute", bottom: "52%", left: "0", width: "100%", height: "100%", zIndex: '2' }}></a>
        </Wrapper>
    )
};

Marker.defaultProps = {
    onClick: null,
    onMouseOver: null,
    onMouseOut: null
};

Marker.propTypes = {
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    text: PropTypes.string,
    href: PropTypes.any,
    ordine: PropTypes.number,
    isHover: PropTypes.any
};

/*
export const IsSelected = (props) => {
    return (<>
        {props.ordine}
    </>
    )
}
*/
export default Marker;