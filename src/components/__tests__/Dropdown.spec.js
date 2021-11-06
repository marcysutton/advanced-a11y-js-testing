import React from 'react'
import {render, fireEvent, getByText} from '@testing-library/react'
import '@testing-library/jest-dom'

import Dropdown  from '../Dropdown'

describe('Dropdown', () => {
    it('labels the dropdown button', () => {
        const textFixture = "Hamburgers"
        const { getByText } = render(<Dropdown buttonName={textFixture} />)

        const buttonText = getByText(textFixture)

        expect(buttonText).toBeInTheDocument()
    })
})