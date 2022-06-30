export class AppError extends Error {
  public message: string;
  public httpStatus: number;

  constructor(message: string, httpStatus: number) {
    super();
    this.message = message;
    this.httpStatus = httpStatus;
  }
}
