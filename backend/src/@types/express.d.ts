declare namespace Express {
  export type Request = {
    user_id?: string;
  };

  export type Response = {
    user_id?: string | JwtPayload;
  };
}
