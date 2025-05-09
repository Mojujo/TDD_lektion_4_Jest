import { useState } from "react"

export enum ButtonState {
    idle = "idle",
    hover = "hover",
    clicked = "clicked"
}

interface CustomButtonProps {
    buttonText: string
}

export default function CustomButton(props: CustomButtonProps) {
    const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle)
    return (
        <input
            type="button"
            value={props.buttonText}
            className={buttonState}
            onMouseLeave={() => {
                setButtonState(ButtonState.idle)
            }}
            onMouseEnter={() => {
                setButtonState(ButtonState.hover)
            }}
            onClick={() => {
                setButtonState(ButtonState.clicked)
            }}
        />
    )
}