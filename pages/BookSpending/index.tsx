import React, { useCallback } from "react";

import {
    Container,
    ToolBar,
    TableContainer
} from '@pages/BookSpending/style';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Button from '@mui/material/Button';


import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const BookSpending = ()=>{

    //분류 버튼 클릭
    const onClickCategory = useCallback((e)=>{
        
    }, []);

    const onClickPrint = useCallback((e)=>{

    }, []);

    const onClickExcel = useCallback((e)=>{

    }, []);

    const onClickAdd = useCallback((e)=>{

    }, []);

    const onClickDelete = useCallback((e)=>{

    }, []);

    return(
        <Container>
            <ToolBar>
                <span className="toolbar-left">
                    <Button onClick={onClickCategory} value="date" variant="text">일자별</Button>
                    <Button onClick={onClickCategory} value="asset" variant="text">자산별</Button>
                    <Button onClick={onClickCategory} value="maincategory" variant="text">대분류별</Button>
                    <Button onClick={onClickCategory} value="subcategory" variant="text">소분류별</Button>
                    <Button onClick={onClickCategory} value="release"  variant="text">그룹해제</Button>
                </span>
                <span className="toolbar-right">
                    <Button onClick={onClickPrint} variant="text"><PrintIcon fontSize="small"/></Button>
                    <Button onClick={onClickExcel} variant="text">Excel</Button>
                    <Button onClick={onClickAdd} variant="text"><AddIcon fontSize="small"/> 추가</Button>
                    <Button onClick={onClickDelete} variant="text"><RemoveIcon fontSize="small"/> 삭제</Button>
                </span>
            </ToolBar>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>날짜</TableCell>
                            <TableCell >계좌</TableCell>
                            <TableCell >대분류</TableCell>
                            <TableCell >소분류</TableCell>
                            <TableCell >내용</TableCell>
                            <TableCell align="right">금액</TableCell>
                            <TableCell>수입/지출</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default BookSpending;