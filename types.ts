type RegisterFormT = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

type LoginFormT = {
  email: string;
  password: string;
};

export type { RegisterFormT, LoginFormT };
