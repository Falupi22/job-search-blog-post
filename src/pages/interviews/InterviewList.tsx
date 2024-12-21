import React, { useState } from 'react'
import {
    Box,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useTheme,
} from '@mui/material'
import { Interview } from '../../types'
import dayjs from 'dayjs'
import { IconWithToolTip } from '../../icons/Icons'

const getStatusColor = (status: Interview['status']) => {
    const colors = {
        passed: 'success',
        failed: 'error',
        mismatch: 'idle',
        match: 'success',
        pending: 'warning',
    }
    return colors[status]
}

interface InteviewListProps {
    interviews: Array<Interview>
}

const InterviewList = ({ interviews }: InteviewListProps) => {
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const [selectedInterview, setSelectedInterview] =
        useState<Interview | null>(null)
    if (selectedInterview) {
        // You can destructure selectedInterview here if needed
    }
    const [hoveredRow, setHoveredRow] = useState<string | null>(null)

    const handleClickOpen = (interview: Interview) => {
        setSelectedInterview(interview)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
        setSelectedInterview(null)
    }

    return (
        <Box>
            <Typography variant='h4' gutterBottom>
                Interview History
            </Typography>
            <Typography variant='body1' gutterBottom>
                Click on each interview to see its full summary
            </Typography>
            <br />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Company Type</TableCell>
                            <TableCell>Product Type</TableCell>
                            <TableCell>Position</TableCell>
                            <TableCell>Stage</TableCell>
                            <TableCell>Method</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Notes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {interviews
                            .map(interview => (
                                <TableRow
                                    key={interview.id}
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor:
                                            hoveredRow === interview.id
                                                ? theme.palette.idle.main
                                                : 'inherit',
                                    }}
                                    onMouseEnter={() =>
                                        setHoveredRow(interview.id)
                                    }
                                    onMouseLeave={() => setHoveredRow(null)}
                                    onClick={() => handleClickOpen(interview)}
                                >
                                    <TableCell>
                                        {dayjs(interview.date).format(
                                            'DD.MM.YYYY',
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {interview.companyType}
                                    </TableCell>
                                    <TableCell>
                                        {interview.productType.join(', ')}
                                    </TableCell>
                                    <TableCell>{interview.position}</TableCell>
                                    <TableCell>{interview.stage}</TableCell>
                                    <TableCell>{interview.method}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={interview.status}
                                            color={
                                                getStatusColor(
                                                    interview.status,
                                                ) as
                                                    | 'default'
                                                    | 'primary'
                                                    | 'secondary'
                                                    | 'error'
                                                    | 'info'
                                                    | 'success'
                                                    | 'warning'
                                            }
                                            size='small'
                                        />
                                    </TableCell>
                                    <TableCell>{interview.notes}</TableCell>
                                </TableRow>
                            ))
                            .reverse()}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    {selectedInterview && (
                        <Box>
                            <Box
                                display='flex'
                                justifyContent='flex-start'
                                alignItems='center'
                                width='100%'
                                p={0}
                            >
                                <DialogTitle
                                    sx={{ paddingLeft: 0, flexGrow: 1 }}
                                >
                                    Interview Details
                                </DialogTitle>
                                <Chip
                                    label={selectedInterview.status}
                                    color={
                                        getStatusColor(
                                            selectedInterview.status,
                                        ) as
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
                                    {selectedInterview.productType.map(
                                        productType => (
                                            <IconWithToolTip
                                                type={productType}
                                            />
                                        ),
                                    )}
                                </Box>
                            </Box>
                            <DialogContentText>
                                <strong>Date:</strong>{' '}
                                {dayjs(selectedInterview.date).format(
                                    'DD/MM/YYYY',
                                )}
                            </DialogContentText>
                            <DialogContentText>
                                <strong>Company Type:</strong>{' '}
                                {selectedInterview.companyType}
                            </DialogContentText>
                            <DialogContentText>
                                <strong>Product Type:</strong>{' '}
                                {selectedInterview.productType.join(', ')}
                            </DialogContentText>
                            <DialogContentText>
                                <strong>Position:</strong>{' '}
                                {selectedInterview.position}
                            </DialogContentText>
                            <DialogContentText>
                                <strong>Stage:</strong>{' '}
                                {selectedInterview.stage}
                            </DialogContentText>
                            <DialogContentText>
                                <strong>Method:</strong>{' '}
                                {selectedInterview.method}
                            </DialogContentText>
                            <DialogContentText>
                                <strong>Status:</strong>{' '}
                                {selectedInterview.status}
                            </DialogContentText>
                            <DialogContentText>
                                <strong>Location:</strong>{' '}
                                {selectedInterview.location}
                            </DialogContentText>
                            <DialogContentText>
                                <strong>Duration:</strong>{' '}
                                {selectedInterview.duration}
                            </DialogContentText>
                            <DialogContentText>
                                <strong>Interviewer:</strong>{' '}
                                {selectedInterview.interviewer}
                            </DialogContentText>
                            <DialogContentText>
                                <strong>Summary:</strong>{' '}
                                {selectedInterview.summary}
                            </DialogContentText>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default InterviewList
