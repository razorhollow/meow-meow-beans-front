/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Vote {
  value: number;
  profileId: number;
  voterId: number;
}

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  votesReceived: Vote[];
  votesGiven?: Vote[];
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
