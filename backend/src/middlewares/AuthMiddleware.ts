import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function AuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({
      message: 'Token as missing a type',
    });
  }

  try {
    const [, token] = authorization.split(' ');

    verify(token, process.env.SECRET as string);

    request.token = token

    next();
  } catch (err) {
    return response.status(401).json({
      message: 'Token is invalid',
    });
  }
}
