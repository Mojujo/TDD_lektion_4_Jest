import CustomButton, { ButtonState } from "./CustomButton"
import {fireEvent, render} from "@testing-library/react"
import "@testing-library/jest-dom"
import "@testing-library/react"

describe("Easy Examples", () => {

    test ("2 + 2 = 4", () => {
        expect(2+2).toBe(4)
    })

    test ("2 + 4 > 0", () => {
        expect(2+4).toBeGreaterThan(0)
    })

    test ("2 - 2 = 0", () => {
        expect(2-2).toBe(0)
    })
})

describe("Custom Button Component States", () => {

    test("Check if Button Component starts idle", () => {
        const buttonText: string = "signup"
        const { getByText } = render(<CustomButton buttonText={buttonText} />)
        const customButtonComponent = getByText("signup")

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
    })

    test("Check if Button Component on hover state changes", () => {
        const buttonText: string = "signup"
        const { getByText } = render(<CustomButton buttonText={buttonText} />)
        const customButtonComponent = getByText("signup")

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.mouseEnter(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.hover)
    })

    test("Custom Button Component on click state change", () => {
        const buttonText: string = "signup"
        const { getByText } = render(<CustomButton buttonText={buttonText} />)
        const customButtonComponent = getByText("signup")

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.click(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.clicked)
    })
})
