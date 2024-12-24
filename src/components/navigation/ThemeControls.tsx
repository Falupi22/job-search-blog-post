import { IconButton } from '@mui/material'
import { Sun, Moon } from 'lucide-react'
import { useThemeContext } from '../../context/ThemeContext'

const iconStyle = {
    size: 20
}

export const ThemeControls = () => {
    const { toggleMode, mode } = useThemeContext()

    return (<>
            <IconButton color='inherit' onClick={toggleMode}>
                {mode === 'dark' ? <Sun {...iconStyle} /> : <Moon {...iconStyle}/>}
                </IconButton>
        </>)
}

export default ThemeControls
