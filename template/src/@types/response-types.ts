export interface ResponseTypes<ResponseList> {
    count?: number;
    next: string;
    previous?: string;
    results: ResponseList[];
  }