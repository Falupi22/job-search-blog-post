import {
    Dialog,
    DialogContent,
    DialogTitle,
    Chip,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material'
import dayjs from 'dayjs'
import { Box } from '@mui/material'
import { IconWithToolTip } from '../../icons/Icons'
import { Interview } from '../../types'
import { getStatusColor } from './StatusColor'

interface InterviewDialogProps {
    interview: Interview | null
    open: boolean
    close: () => void
}

export const InterviewDialog = ({
    interview,
    open,
    close,
}: InterviewDialogProps) => {
    const {
        date,
        companyType,
        productType,
        position,
        stage,
        method,
        status,
        location,
        duration,
        interviewer,
        summary,
    } = interview || {}

    return (
        <Dialog open={open} onClose={close}>
            <DialogContent>
                {interview && (
                    <Box>
                        <Box
                            display='flex'
                            justifyContent='flex-start'
                            alignItems='center'
                            width='100%'
                            p={0}
                        >
                            <DialogTitle sx={{ paddingLeft: 0, flexGrow: 1 }}>
                                Interview Details
                            </DialogTitle>
                            <Chip
                                label={interview.status}
                                color={
                                    getStatusColor(interview.status) as
                                        | 'default'
                                        | 'primary'
                                        | 'secondary'
                                        | 'error'
                                        | 'info'
                                        | 'success'
                                        | 'warning'
                                }
                                size='small'
                                sx={{ marginLeft: 3 }}
                            />
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                marginLeft={1}
                            >
                                {interview.productType.map(productType => (
                                    <IconWithToolTip type={productType} />
                                ))}
                            </Box>
                        </Box>
                        <DialogContentText>
                            <strong>Date:</strong>{' '}
                            {dayjs(date).format('DD/MM/YYYY')}
                        </DialogContentText>
                        <DialogContentText>
                            <strong>Company Type:</strong> {companyType}
                        </DialogContentText>
                        <DialogContentText>
                            <strong>Product Type:</strong>{' '}
                            {productType?.join(', ')}
                        </DialogContentText>
                        <DialogContentText>
                            <strong>Position:</strong> {position}
                        </DialogContentText>
                        <DialogContentText>
                            <strong>Stage:</strong> {stage}
                        </DialogContentText>
                        <DialogContentText>
                            <strong>Method:</strong> {method}
                        </DialogContentText>
                        <DialogContentText>
                            <strong>Status:</strong> {status}
                        </DialogContentText>
                        <DialogContentText>
                            <strong>Location:</strong> {location}
                        </DialogContentText>
                        <DialogContentText>
                            <strong>Duration:</strong> {duration}
                        </DialogContentText>
                        <DialogContentText>
                            <strong>Interviewer:</strong> {interviewer}
                        </DialogContentText>
                        <DialogContentText>
                            <strong>Summary:</strong> {summary}
                        </DialogContentText>
                    </Box>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={close} color='primary'>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
