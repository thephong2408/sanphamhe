import CryptoJS from "crypto-js";

const SECRET_KEY = "your_secret_key_here"; // Thay đổi thành chuỗi bí mật của bạn

export function encryptData(data: string): string {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
}

export function decryptData(ciphertext: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}
