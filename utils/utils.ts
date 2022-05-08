
export type Order = 'asc' | 'desc';

//a,b : Table의 Row.
//orderBy : Row를 정렬하기 위한 기준이 되는 colum을 선택
export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }

    return 0;
}


export function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
  ) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
    } //해당 함수가 반환된다.

//array : 정렬할 배열, comparator :두개의 값을 비교하는 함수
export function sort<T>(array : readonly T[], comparator: (a: T, b: T) => number){
    //[ {row, index} ] 인 배열 생성
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    //배열 sort
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      //두개를 비교해서 같은가?
      if (order !== 0) {
        return order;
      }
      //같다면 index로 정렬
      return a[1] - b[1];
    });

    //정렬된 rows 반환
    return stabilizedThis.map((el) => el[0]);
}