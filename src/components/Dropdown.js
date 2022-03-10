import styled from "@emotion/styled"
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StyledDropdown = styled.div`
    .dropdown-btn {
        background-color: transparent;
        border: 2px solid #ddd;
        border-radius: 5px;
        color: #585958;
        cursor: pointer;
        display: inline-block;
        font-family: inherit;
        padding: 0.5em 1em;

        &:before {
            content: '❯';
            color: inherit;
            display: inline-block;
            margin: 0 1em 0 0.5em;
            transform: rotate(90deg);
        }
    }
    .dropdown-content {
        display: none;
    }
    &.active {
        .dropdown-btn {
            &:before {
                transform: rotate(-90deg);
            }
        }
        .dropdown-content {
            display: block;
        }
    }
`
const Dropdown = ({buttonName = '', children}) => {
    const [active, setActive] = useState(false)

    const escapeKeyHandler = (event) => {
        if (event.key === 'Escape' && active === true) {
            setActive(false)
        }
    }
    return (
        <StyledDropdown className={active === true ? 'active' : ''} onKeyUp={(event)=> { escapeKeyHandler(event) }} data-testid="dropdown-wrapper">
            <button
                aria-expanded={active ? 'true' : 'false'}
                aria-haspopup="true"
                className="dropdown-btn"
                data-testid="dropdown-btn"
                onClick={() => { setActive(!active) }}>
                {buttonName}
            </button>
            <div className="dropdown-content">
                {children}
            </div>
        </StyledDropdown>
    )
}
export default Dropdown