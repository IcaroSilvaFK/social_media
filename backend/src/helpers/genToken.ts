import { sign } from 'jsonwebtoken';

export function genToken({ payload }: { payload: string }) {
  return sign(
    {
      payload,
    },
    process.env.SECRET as string,
    {
      expiresIn: 300,
    }
  );
}
