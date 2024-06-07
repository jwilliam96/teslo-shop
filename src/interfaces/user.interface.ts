export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  password?: string | null;
  role: string;
  image?: string | null;
}
