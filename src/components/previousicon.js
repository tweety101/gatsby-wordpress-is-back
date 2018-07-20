import React from 'react';


const PreviousIcon = (props) => {
    let color = props.color || '#3C539A';
    let width = props.width || '32';
    let height = props.height || '32';
    return (
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width={width} heigth={height}
	 viewBox="0 0 52.502 52.502" enable-background="new 0 0 52.502 52.502" aria-labelledby="title">
     <title id="title">Previous Icon</title>

	<path fill={color} d="M21.524,16.094V4.046L1.416,23.998l20.108,20.143V32.094c0,0,17.598-4.355,29.712,16
		c0,0,3.02-15.536-10.51-26.794C40.727,21.299,34.735,15.696,21.524,16.094z"/>
	<path fill={color} d="M51.718,50.857l-1.341-2.252C40.163,31.441,25.976,32.402,22.524,32.925v13.634L0,23.995
		L22.524,1.644v13.431c12.728-0.103,18.644,5.268,18.886,5.494c13.781,11.465,10.839,27.554,10.808,27.715L51.718,50.857z
		 M25.645,30.702c5.761,0,16.344,1.938,24.854,14.376c0.128-4.873-0.896-15.094-10.41-23.01c-0.099-0.088-5.982-5.373-18.533-4.975
		l-1.03,0.03V6.447L2.832,24.001l17.692,17.724V31.311l0.76-0.188C21.354,31.105,23.014,30.702,25.645,30.702z"/>
</svg>
    )
}

export default PreviousIcon;
