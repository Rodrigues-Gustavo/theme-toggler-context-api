import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Button } from '../button/button'

export const ThemeTogglerButton = () => {

    const { themes } = useContext(ThemeContext)

    console.log('ThemeTogglerButton', themes)

    return (
        <div>
            <Button>Clique Aqui</Button>
        </div>
    )
}