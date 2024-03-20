export type RegisterFormT = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormT = {
  email: string;
  password: string;
};

export type SelectOptionsT = {
  label: string | React.ReactNode;
  value: any;
};
