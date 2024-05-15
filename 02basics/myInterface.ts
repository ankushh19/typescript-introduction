interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const Ankush: Admin = {
  dbId: 22,
  role: "admin",
  email: "a@a.com",
  userId: 112,
  githubToken: "wjiwjiw",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "ankush", off: 10) => {
    return 10;
  },
};
