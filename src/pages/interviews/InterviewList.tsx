import { useState } from 'react'
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
    useTheme,
} from '@mui/material'
import { Interview } from '../../types'
import dayjs from 'dayjs'
import { getStatusColor } from './StatusColor'
import { DATE_FORMAT } from '../../global/formats'
import { InterviewDialog } from './InterviewDialog'

interface InterviewListProps {
    interviews: Array<Interview>
}

const InterviewList = ({ interviews }: InterviewListProps) => {
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
                                            DATE_FORMAT,
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
            <InterviewDialog
                open={open}
                close={handleClose}
                interview={selectedInterview}
            />
        </Box>
    )
}

export default InterviewList
