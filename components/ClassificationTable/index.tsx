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
} from '@typings/data';

import { classify } from '@utils/utils';

interface tableProps {
    rows : Book[],
    headCells : HeadCell[],
    classification : keyof Book | ''
}

const ClassificationTable = ({rows, headCells, classification} : tableProps)=>{
    const [order, setOrder] = useState<Order>('desc');
    const [orderBy, setOrderBy ] = useState<keyof Book>('localDateTime');

    const createSortHandler = useCallback(
        (property : keyof Book) => (event: React.MouseEvent<unknown>) => {
            const isAsc = orderBy === property && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(property);
            
            console.log(classify(rows, classification as keyof Book));

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
                                {/* headCell에 맞게 cell생성 */}
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


export default ClassificationTable;

//                     <TableRow>
//                         <TableCell colSpan={7}>
//                             <IconButton
//                                 aria-label="expand row"
//                                 size="small"
//                                 onClick={() => setOpen(!open)}
//                             >
//                                 {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                             </IconButton>
//                             대분류 : 병원비
//                         </TableCell>
//                     </TableRow>
//                     <TableRow>
//                         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
//                             <Collapse in={open} timeout="auto" unmountOnExit>
//                                 <Table sx={{ minWidth: 960 }} size="small">
//                                     <TableBody>
//                                         <TableRow>
//                                             <TableCell>temp</TableCell>
//                                             <TableCell>temp</TableCell>
//                                             <TableCell>temp</TableCell>
//                                             <TableCell>temp</TableCell>
//                                             <TableCell>temp</TableCell>
//                                             <TableCell align="right">temp</TableCell>
//                                             <TableCell>temp</TableCell>
//                                         </TableRow>
//                                         <TableRow>
//                                             <TableCell colSpan={2}>합계</TableCell>
//                                             <TableCell colSpan={5}>50000</TableCell>
//                                         </TableRow>
//                                     </TableBody>
//                                 </Table>

//                             </Collapse>
//                         </TableCell>
//                     </TableRow>