// cryptoUtils.ts
import CryptoJS from "crypto-js";

// Function to encrypt a message
export function encryptMessage(text: string, secretKey: string): string {
  const ciphertext = CryptoJS.AES.encrypt(text, secretKey).toString();
  return ciphertext;
}

// Function to decrypt a message
export function decryptMessage(ciphertext: string, secretKey: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}
