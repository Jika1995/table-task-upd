import { HeaderObj } from '@/utils/types'
import { Box, Paper, Text } from '@mantine/core'
import React from 'react'

type Props = {
    header: HeaderObj[]
}

const TableHeader = ({ header }: Props) => {
    return (
        <Paper p='md' shadow='xs' className='sticky z-10' style={{ top: '60px' }}>

        </Paper>
    )
}

export default TableHeader