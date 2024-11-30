import React from 'react'
import { render, screen } from '@testing-library/react'
import Greet from "../../src/components/Greet"


describe('Greet', () => {
    it('should render with hello with the name when name is provided', () => {
        render(<Greet name="bandhan" />)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/bandhan/i)
    }),

        it('should render login buttton when name is not provided', () => {
            render(<Greet />)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
            expect(button).toHaveTextContent(/login/i)
        })

})