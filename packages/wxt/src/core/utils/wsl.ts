import isWsl_ from 'is-wsl';

/**
 * Returns true when running on WSL or WSL2.
 */
export async function isWsl(): Promise<boolean> {
  return isWsl_;
}
