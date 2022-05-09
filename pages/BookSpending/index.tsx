import React, { useCallback, useState } from "react";

import {
    Container,
    ToolBar,
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
import Collapse from '@mui/material/Collapse';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import TableSortLabel from '@mui/material/TableSortLabel';

type Align = 'right' | 'left';

interface Data {
    date : string;
    account : string;
    mainCategory : string;
    subCategory : string;
    detail : string;
    price : number;
    income_expenses : string;
}

interface HeadCell {
    id : keyof Data;
    label : string;
    align : Align;
}

function createData(
    date : string,
    account : string,
    mainCategory : string,
    subCategory : string,
    detail : string,
    price : number,
    income_expenses : string,
) : Data {
    return { date, account, mainCategory, subCategory, detail, price, income_expenses };
}

const rows = [
    createData('2022-03-10', '소비 계좌', '병원비', '', '감기약', 70000, '지출'),
    createData('2022-03-10', '소비 계좌', '적금', '', '청년희망적축', 500000, '지출'),
    createData('2022-03-10', '소비 계좌', '적금', '', '저금통', 697, '지출'),
    createData('2022-03-10', '소비 계좌', '용돈', '코인충전', '카카오페이지', 3000, '지출'),
    createData('2022-03-11', '소비 계좌', '교통/차량', '대중교통', '후불교통대금', 11702, '지출'),
    createData('2022-03-11', '소비 계좌', '용돈', '음악/도서', '리디북스', 8000, '지출'),
    createData('2022-03-12', '소비 계좌', '식비', '간식', '식빵, 소시지, 딸기잼', 13000, '지출'),
    createData('2022-03-13', '소비 계좌', '용돈', '꾸밈비', '자켓 구매', 62400, '지출'),
    createData('2022-03-14', '소비 계좌', '용돈', '코인충전', '네이버 시리즈', 3000, '지출'),
    createData('2022-03-14', '소비 계좌', '적금', '', '저금통', 402, '지출'),
    createData('2022-03-15', '소비 계좌', '용돈', '코인충전', '네이버 시리즈', 929, '지출'),
    createData('2022-03-15', '소비 계좌', '용돈', '코인충전', '네이버 시리즈', 3000, '지출'),
    createData('2022-03-15', '소비 계좌', '식비', '외식', '햄버거', 12700, '지출'),
    createData('2022-03-15', '소비 계좌', '용돈', '코인충전', '카카오 페이지', 3000, '지출'),
    createData('2022-03-16', '소비 계좌', '적금', '', '주택청약', 20000, '지출'),
    createData('2022-03-16', '소비 계좌', '적금', '', '저금통', 371, '지출'),
    createData('2022-03-17', '소비 계좌', '용돈', '코인충전', '카카오 페이지', 10000, '지출'),
    createData('2022-03-17', '소비 계좌', '용돈', '전자기기', '3M USB', 5000, '지출'),
    createData('2022-03-17', '소비 계좌', '용돈', '음악/도서', '리디북스', 12500, '지출'),
    createData('2022-03-17', '소비 계좌', '구독결제', '', '구글 유튜브 프리미엄', 9200, '지출'),
];

const headCells : HeadCell[] = [
    {
        id : 'date',
        label : '날짜',
        align : 'left'
    },
    {
        id : 'account',
        label : '계좌',
        align : 'left'
    },
    {
        id : 'mainCategory',
        label : '대분류',
        align : 'left'
    },
    {
        id : 'subCategory',
        label : '소분류',
        align : 'left'
    },
    {
        id : 'detail',
        label : '내용',
        align : 'left'
    },
    {
        id : 'price',
        label : '금액',
        align : 'right'
    },
    {
        id : 'income_expenses',
        label : '수입/지출',
        align : 'left'
    },
];

const BookSpending = ()=>{

    const [order, setOrder] = useState<Order>('desc');
    const [orderBy, setOrderBy ] = useState<keyof Data>('date');
    const [open, setOpen] = React.useState(false);

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

    const createSortHandler = useCallback(
    (property : keyof Data) => (event: React.MouseEvent<unknown>) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      }, [order, orderBy]); 

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
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.account}</TableCell>
                                    <TableCell>{row.mainCategory}</TableCell>
                                    <TableCell>{row.subCategory}</TableCell>
                                    <TableCell>{row.detail}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell>{row.income_expenses}</TableCell>
                                </TableRow>
                            ))
                        }
                        {/* 일자별, 자산별... 로 분류하는 Table을 위한 예제 */}
                        <TableRow>
                            <TableCell colSpan={7}>
                                <IconButton
                                    aria-label="expand row"
                                    size="small"
                                    onClick={() => setOpen(!open)}
                                >
                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                                대분류 : 병원비
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <Table sx={{ minWidth: 960 }} size="small">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>temp</TableCell>
                                                <TableCell>temp</TableCell>
                                                <TableCell>temp</TableCell>
                                                <TableCell>temp</TableCell>
                                                <TableCell>temp</TableCell>
                                                <TableCell align="right">temp</TableCell>
                                                <TableCell>temp</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell colSpan={2}>합계</TableCell>
                                                <TableCell colSpan={5}>50000</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>

                                </Collapse>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default BookSpending;