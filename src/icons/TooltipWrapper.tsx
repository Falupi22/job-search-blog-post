import { Icon } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'

export const TooltipWrapper: React.FC<{
    title: string
    src: string
    alt: string
}> = ({ title, src, alt }) => (
    <Tooltip title={title}>
        <Icon
            sx={{
                marginRight: 1,
                filter: theme =>
                    theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
            }}
        >
            <img src={src} alt={alt} style={{ width: 24, height: 24 }} />
        </Icon>
    </Tooltip>
)
