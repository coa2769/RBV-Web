import React, { useCallback, useState } from "react";

import {
    TableContainer
} from '@pages/BookSpending/style';

import {
    Order,
    getComparator,
    sort,
} from '@utils/utils';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import {
    Book,
    HeadCell,
} from '@typings/data'

interface tableProps {
    rows : Book[],
    headCells : HeadCell[],
}


const BaseTable = ({rows, headCells} : tableProps)=>{
    const [order, setOrder] = useState<Order>('desc');
    const [orderBy, setOrderBy ] = useState<keyof Book>('localDateTime');

    const createSortHandler = useCallback(
        (property : keyof Book) => (event: React.MouseEvent<unknown>) => {
            const isAsc = orderBy === property && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(property);
          }, [order, orderBy]); 

    return(
        <TableContainer>
            <Table stickyHeader sx={{ minWidth: 960 }} size="small">
                <TableHead>
                    <TableRow>
                        {headCells.map((headCell, index)=>(
                            <TableCell 
                                sortDirection={orderBy === headCell.id? order : false}
                                align={headCell.align}
                                key={index}
                            >
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id?order:'asc'}
                                    onClick={createSortHandler(headCell.id)}
                                ></TableSortLabel>
                                {headCell.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sort(rows, getComparator(order, orderBy))
                        .map((row, index)=>(
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* headCell??? ?????? cell?????? */}
                                {headCells.map((headCell, index)=>(
                                    <TableCell align={headCell.align} key={index}>{row[headCell.id]}</TableCell>
                                ))}
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>  
    )
}


export default BaseTable;