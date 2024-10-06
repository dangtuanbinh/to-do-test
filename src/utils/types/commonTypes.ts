export interface IPaginationProps {
  current:number;
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}


