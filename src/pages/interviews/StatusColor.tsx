import { Interview } from '../../types'

export const getStatusColor = (status: Interview['status']) => {
    const colors = {
        passed: 'success',
        failed: 'error',
        mismatch: 'idle',
        match: 'success',
        pending: 'warning',
    }

    return colors[status]
}
