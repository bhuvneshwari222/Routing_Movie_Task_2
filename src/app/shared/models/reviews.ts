export interface IReview {
    reviewId: string;
    reviewerName: string;
    movieName: string;
    rating: number;
    reviewTitle: string;
    reviewDescription: string;
    reviewDate: string;
    likes: number;
    isVerified: boolean;
    reviewerImage: string;
}