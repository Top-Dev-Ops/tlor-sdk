export interface PaginationSortProps {
    limit?: number;
    page?: number;
    offset?: number;
    sort?: string;
}
export declare function getBooks(props?: PaginationSortProps): Promise<object>;
export declare function getBook(id: number): Promise<object>;
export declare function getMovies(props?: PaginationSortProps): Promise<object>;
export declare function getQuotes(props?: PaginationSortProps): Promise<object>;
export declare function getChapters(props?: PaginationSortProps): Promise<object>;
