import { describe, expect, it } from 'vitest';
import { crc1 } from './crc1.js';

describe('crc1', () => {
  it('should return correct result', () => {
    expect(crc1([1, 2])).toBe(3);
  });
});
