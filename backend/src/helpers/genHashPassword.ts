import bcrypt from 'bcrypt';

export async function genHashPassword(password: string) {
  return await bcrypt.hash(password, process.env.SALT as string);
}
