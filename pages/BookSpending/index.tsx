import React, { useCallback, useState } from "react";

import {
    Container,
    ToolBar,
} from '@pages/BookSpending/style';

import Button from '@mui/material/Button';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
 
import BaseTable from "@components/BaseTable";
import ClassificationTable from "@components/ClassificationTable";

import { 
    Book,
    headCells,
 } from '@typings/data'

//임시 생성함수 추후에 삭제하거나 다른 함수로 대체됨.
function createData(
    username : string,
    categoryName : string,
    assetName : string,
    price : number,
    memo : string,
    localDateTime : string
) : Book {
    return {
        bookId : 1, 
        teamName : 'team1', 
        username, 
        categoryName, 
        categoryType : 'EXPENSE',
        assetName, 
        price, 
        memo,
        filePath : '',
        localDateTime
    };
}

const BookSpending = ()=>{
    //추후에 swr로 변경
    const [rows, setRows] = useState<Book[]>([
        createData('경호', '병원비', '지갑', 70000, '처방약', '2022-03-10'),
        createData('동학', '적금', '카카오뱅크', 500000, '청년희망저축', '2022-03-10'),
        createData('은채', '대중교통', '신한은행', 10800, '후불교통카드', '2022-03-10'),
        createData('예슬', '플랫폼 포인트 충전', '하나은행', 20000, '카카오페이지', '2022-03-10'),
        createData('경호', '병원비', '지갑', 70000, '처방약', '2022-03-10'),
        createData('동학', '적금', '카카오뱅크', 500000, '청년희망저축', '2022-03-10'),
        createData('은채', '대중교통', '신한은행', 10800, '후불교통카드', '2022-03-10'),
        createData('예슬', '플랫폼 포인트 충전', '하나은행', 20000, '카카오페이지', '2022-03-10'),
        createData('경호', '병원비', '지갑', 70000, '처방약', '2022-03-10'),
        createData('동학', '적금', '카카오뱅크', 500000, '청년희망저축', '2022-03-10'),
        createData('은채', '대중교통', '신한은행', 10800, '후불교통카드', '2022-03-10'),
        createData('예슬', '플랫폼 포인트 충전', '하나은행', 20000, '카카오페이지', '2022-03-10'),
        createData('경호', '병원비', '지갑', 70000, '처방약', '2022-03-10'),
        createData('동학', '적금', '카카오뱅크', 500000, '청년희망저축', '2022-03-10'),
        createData('은채', '대중교통', '신한은행', 10800, '후불교통카드', '2022-03-10'),
        createData('예슬', '플랫폼 포인트 충전', '하나은행', 20000, '카카오페이지', '2022-03-10'),
        createData('경호', '병원비', '지갑', 70000, '처방약', '2022-03-10'),
        createData('동학', '적금', '카카오뱅크', 500000, '청년희망저축', '2022-03-10'),
        createData('은채', '대중교통', '신한은행', 10800, '후불교통카드', '2022-03-10'),
        createData('예슬', '플랫폼 포인트 충전', '하나은행', 20000, '카카오페이지', '2022-03-10'),
    ]);

    const [ classification, setClassification ] = useState<keyof Book | ''>('');

    //분류 버튼 클릭
    const onClickClassification = useCallback((e : React.MouseEvent<HTMLButtonElement>)=>{
        const value = e.currentTarget.value as keyof Book | '';
        setClassification(value);
    }, [classification]);

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
                    <Button onClick={onClickClassification} value="localDateTime" variant="text">일자별</Button>
                    <Button onClick={onClickClassification} value="assetName" variant="text">자산별</Button>
                    <Button onClick={onClickClassification} value="categoryName" variant="text">분류별</Button>
                    <Button onClick={onClickClassification} value="username" variant="text">작성자별</Button>
                    <Button onClick={onClickClassification} value="" variant="text">그룹해제</Button>
                </span>
                <span className="toolbar-right">
                    <Button onClick={onClickPrint} variant="text"><PrintIcon fontSize="small"/></Button>
                    <Button onClick={onClickExcel} variant="text">Excel</Button>
                    <Button onClick={onClickAdd} variant="text"><AddIcon fontSize="small"/> 추가</Button>
                    <Button onClick={onClickDelete} variant="text"><RemoveIcon fontSize="small"/> 삭제</Button>
                </span>
            </ToolBar>
            {classification === '' ?
                <BaseTable rows={rows} headCells={headCells}></BaseTable> :
                <ClassificationTable rows={rows} headCells={headCells} classification={classification}></ClassificationTable>
            }
            
        </Container>
    )
}

export default BookSpending;