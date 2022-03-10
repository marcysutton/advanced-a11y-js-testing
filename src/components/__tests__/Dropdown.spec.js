import React from 'react'
import {render, screen, getByText} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Dropdown  from '../Dropdown'

describe('Dropdown', () => {
    it('labels the dropdown button', () => {
        const textFixture = "Hamburgers"
        const { getByText } = render(<Dropdown buttonName={textFixture} />)

        const buttonText = getByText(textFixture)

        expect(buttonText).toBeInTheDocument()
    })
    it('can be operated with the keyboard', () => {
        render(<Dropdown buttonName="Settings" />)

        const dropdownWrapper = screen.getByTestId('dropdown-wrapper')
        const dropdownButton = screen.getByTestId('dropdown-btn')

        userEvent.tab()
        expect(dropdownButton).toHaveFocus()

        userEvent.click(dropdownButton)
        expect(dropdownButton).toHaveAttribute('aria-expanded', 'true')

        userEvent.type(dropdownWrapper, '{esc}', {skipClick: true})
        expect(dropdownButton).toHaveAttribute('aria-expanded', 'false')
    })
})