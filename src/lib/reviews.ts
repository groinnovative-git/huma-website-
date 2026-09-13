export type Review = {
  id: string;
  name: string;
  isLocalGuide: boolean;
  reviewCount: number;
  photoCount?: number;
  isNew?: boolean;
  text?: string;
  likes?: number;
};

export const REVIEWS: Review[] = [
  {
    id: "vahid",
    name: "Vahid Randathani",
    isLocalGuide: false,
    reviewCount: 1,
    isNew: true,
    text: "I don't believe there is a more professional technician in Dubai than achayan (Shaju) at huma Electronics for repairing...",
  },
  {
    id: "arghi",
    name: "Arghi V B",
    isLocalGuide: true,
    reviewCount: 5,
    isNew: true,
    text: "Go to electronic repair shop. All services are done with at most care. Experienced and professional technicians are available here.",
  },
  {
    id: "sundar",
    name: "Sundar Naga",
    isLocalGuide: false,
    reviewCount: 3,

    isNew: true,
    text: "Good and immediate service",
  },
  {
    id: "shindo",
    name: "Shindo",
    isLocalGuide: false,
    reviewCount: 4,

    isNew: true,
    text: "Nice service",
  },
  {
    id: "tharsana",
    name: "Tharsana",
    isLocalGuide: false,
    reviewCount: 0,

    isNew: true,
  },
  {
    id: "melwin",
    name: "Melwin Thomas",
    isLocalGuide: true,
    reviewCount: 7,
    photoCount: 3,

    isNew: true,
    text: "I had a wonderful experience here. They diagnosed and fixed my television issue quickly, and their service is both genuine and professional.",
  },
  {
    id: "ben",
    name: "Ben Jacob",
    isLocalGuide: false,
    reviewCount: 8,

    isNew: true,
    text: "Very good service, my tv was not working and after bringing it here for service its been almost 3 years and no issue has...",
  },
  {
    id: "shaju",
    name: "Shaju Ka",
    isLocalGuide: false,
    reviewCount: 1,

    isNew: true,
  },
  {
    id: "rohith",
    name: "Rohith Shaju",
    isLocalGuide: false,
    reviewCount: 5,
    photoCount: 2,

    isNew: true,
    text: "Good service affordable cost",
  },
  {
    id: "avinkumar",
    name: "Avinkumar Subburam",
    isLocalGuide: false,
    reviewCount: 3,

    isNew: true,
    text: "Great service from Huma Electronics. I got my TV repaired, and the service was fast and reliable. The price was reasonable, and the staff were friendly and helpful. Highly recommended!",
  },
];
