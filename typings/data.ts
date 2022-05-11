

//'INCOME' : 수입 | 'EXPENSE' : 지출 | 'TRANSFER' : 이체
export type AssetType = 'INCOME' | 'EXPENSE' | 'TRANSFER';

export interface Book {
  bookId : number;
  teamName : string;
  username : string;
  categoryName : string;
  categoryType : AssetType;
  assetName : string;
  price : number;
  memo : string;
  filePath : string;
  localDateTime : string;
}

export type Align = 'right' | 'left';

export interface HeadCell {
  id : keyof Book;
  label : string;
  align : Align;
}

export const headCells : HeadCell[] = [
  {
    id : 'localDateTime',
    label : '날짜',
    align : 'left'
  },
  {
    id : 'assetName',
    label : '자산',
    align : 'left'
  },
  {
    id : 'categoryName',
    label : '분류',
    align : 'left'
  },
  {
    id : 'price',
    label : '금액',
    align : 'right'
  },
  {
    id : 'username',
    label : '작성자',
    align : 'left'
  },
  {
    id : 'memo',
    label : '내용',
    align : 'left'
  },
];

