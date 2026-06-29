import { Injectable } from '@angular/core';
import { IReview } from '../models/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  reviewsArr: IReview[] = [
    {
      reviewId: "REV101",
      reviewerName: "Rahul Sharma",
      movieName: "Silicon Towers",
      rating: 5,
      reviewTitle: "Perfect Tech Drama",
      reviewDescription:
        "An inspiring movie with realistic startup challenges, excellent performances, and an engaging storyline.",
      reviewDate: "2025-02-10",
      likes: 412,
      isVerified: true,
      reviewerImage:
        "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      reviewId: "REV102",
      reviewerName: "Priya Patil",
      movieName: "Game Over",
      rating: 4,
      reviewTitle: "Suspense Till The End",
      reviewDescription:
        "Keeps you engaged throughout with unexpected twists and an excellent lead performance.",
      reviewDate: "2025-03-05",
      likes: 298,
      isVerified: true,
      reviewerImage:
        "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      reviewId: "REV103",
      reviewerName: "Amit Verma",
      movieName: "StartUp",
      rating: 5,
      reviewTitle: "Highly Motivational",
      reviewDescription:
        "A must-watch for aspiring entrepreneurs. Great performances and an inspiring story.",
      reviewDate: "2025-04-18",
      likes: 356,
      isVerified: true,
      reviewerImage:
        "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      reviewId: "REV104",
      reviewerName: "Sneha Kulkarni",
      movieName: "Silicon Towers",
      rating: 4,
      reviewTitle: "Realistic Office Culture",
      reviewDescription:
        "The workplace scenarios and software industry challenges felt authentic and relatable.",
      reviewDate: "2025-05-12",
      likes: 221,
      isVerified: false,
      reviewerImage:
        "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      reviewId: "REV105",
      reviewerName: "Rohan Mehta",
      movieName: "Game Over",
      rating: 5,
      reviewTitle: "Outstanding Thriller",
      reviewDescription:
        "One of the best suspense movies with brilliant cinematography and gripping storytelling.",
      reviewDate: "2025-05-28",
      likes: 487,
      isVerified: true,
      reviewerImage:
        "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
      reviewId: "REV106",
      reviewerName: "Neha Joshi",
      movieName: "StartUp",
      rating: 4,
      reviewTitle: "Dream Big",
      reviewDescription:
        "A heartwarming story about ambition, teamwork, and never giving up on your dreams.",
      reviewDate: "2025-06-15",
      likes: 273,
      isVerified: true,
      reviewerImage:
        "https://randomuser.me/api/portraits/women/60.jpg"
    }
  ];

  constructor() { }
}
