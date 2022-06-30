import bcrypt from 'bcrypt';

export async function genHashPassword(password: string) {
  const SALT = 10;
  return await bcrypt.hash(password, SALT);
}
