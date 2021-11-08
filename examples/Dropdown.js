import styled from "@emotion/styled"
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StyledDropdown = styled.div`
    button {
        background-color: transparent;
        border: 2px solid #ddd;
        border-radius: 5px;
        color: #585958;
        cursor: pointer;
        padding: 0.5em 1em;

        &:before {
            content: '❯';
            color: inherit;
            display: inline-block;
            margin: 0 1em 0 0.5em;
            transform: rotate(90deg);
        }
    }
    div {
        display: none;
    }
    &.active {
        button {
            &:before {
                transform: rotate(-90deg);
            }
        }
        div {
            display: block;
        }
    }
`
const Dropdown = ({buttonName = '', children}) => {
    const [active, setActive] = useState(false)

    const keyHandler = (event) => {
        if (event.key === 'Escape' && active === true) {
            setActive(false)
        }
    }

    return (
        <StyledDropdown
            className={active === true ? 'active' : ''}
            onKeyUp={(event) => { keyHandler(event) }}
        >
            <button
                aria-haspopup="true"
                aria-expanded={active ? 'true' : 'false'}
                className="dropdown-btn"
                data-testid="dropdown-btn"
                onClick={() => { setActive(!active) }}
            >
                {buttonName}
            </button>
            <div className="dropdown-content">
                {children}
            </div>
        </StyledDropdown>
    )
}
export default Dropdown