import React from 'react'

function MenuIcon(props) {
    return (
        <div className="Menu">

            <div onClick={props.menutoggle} className="Menu--box">

              <svg className="Menu--box__line1" xmlns="http://www.w3.org/2000/svg" width="14" height="49.916" viewBox="0 0 14 49.916">
                <g id="Component_11_1" data-name="Component 11 – 1" transform="translate(1)">
                  <path id="Path_731" data-name="Path 731" d="M-344,520.707v49.916" transform="translate(356 -520.707)" fill="none" stroke={props.color} strokeWidth="2" />
                </g>
              </svg>
              <svg className="Menu--box__line2" xmlns="http://www.w3.org/2000/svg" width="14" height="49.916" viewBox="0 0 14 49.916">
                <g id="Component_11_1" data-name="Component 11 – 1" transform="translate(1)">
                  <path id="Path_732" data-name="Path 732" d="M-344,520.707v49.916" transform="translate(344 -520.707)" fill="none" stroke={props.color} strokeWidth="2" />
                </g>
              </svg>

            </div>

          </div>
    )
}

export default MenuIcon
