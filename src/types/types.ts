export type IReview = {
    _id: string;
    comment: string;
  };
  
export  type IBookDetails = {
    _id: string;
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
    reviews: IReview[];
  };