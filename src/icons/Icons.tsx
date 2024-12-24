import { ProductType } from '../types'
import { TooltipWrapper } from './TooltipWrapper'

const EcommerceTooltip = () => (
    <TooltipWrapper
        title='E-commerce'
        src='/icons/ecommerce.svg'
        alt='E-commerce'
    />
)
const AviationTooltip = () => (
    <TooltipWrapper title='Aviation' src='/icons/aviation.svg' alt='Aviation' />
)
const CybersecurityTooltip = () => (
    <TooltipWrapper
        title='Cybersecurity'
        src='/icons/cybersecurity.svg'
        alt='Cybersecurity'
    />
)
const AITooltip = () => (
    <TooltipWrapper title='AI' src='/icons/ai.svg' alt='AI' />
)
const VirtualizationTooltip = () => (
    <TooltipWrapper
        title='Virtualization'
        src='/icons/virtualization.svg'
        alt='Virtualization'
    />
)
const EnvironmentalTooltip = () => (
    <TooltipWrapper
        title='Environmental'
        src='/icons/environmental.svg'
        alt='Environmental'
    />
)
const ITTooltip = () => (
    <TooltipWrapper title='IT' src='/icons/ai.svg' alt='ai icon' />
)
const CloudTooltip = () => (
    <TooltipWrapper title='Cloud' src='/icons/cloud.svg' alt='Cloud' />
)
const CommunicationTooltip = () => (
    <TooltipWrapper
        title='Communication'
        src='/icons/communication.svg'
        alt='Communication'
    />
)
const EncryptionTooltip = () => (
    <TooltipWrapper
        title='Encryption'
        src='/icons/encryption.svg'
        alt='Encryption'
    />
)
const BackofficeTooltip = () => (
    <TooltipWrapper
        title='Backoffice'
        src='/icons/backoffice.svg'
        alt='Backoffice'
    />
)

const Icons: Record<ProductType, React.FC> = {
    [ProductType.Ecommerce]: EcommerceTooltip,
    [ProductType.Aviation]: AviationTooltip,
    [ProductType.Cybersecurity]: CybersecurityTooltip,
    [ProductType.AI]: AITooltip,
    [ProductType.Virtualization]: VirtualizationTooltip,
    [ProductType.Environmental]: EnvironmentalTooltip,
    [ProductType.IT]: ITTooltip,
    [ProductType.Cloud]: CloudTooltip,
    [ProductType.Communication]: CommunicationTooltip,
    [ProductType.Encryption]: EncryptionTooltip,
    [ProductType.Backoffice]: BackofficeTooltip,
}

export const IconWithToolTip: React.FC<{ type: ProductType }> = ({ type }) => {
    const IconComponent = Icons[type]
    return IconComponent ? <IconComponent /> : null
}
