import { compare } from 'bcrypt';

export async function compareHash(
  currentPassword: string,
  isValidPassword: string
) {
  return await compare(currentPassword, isValidPassword);
}
