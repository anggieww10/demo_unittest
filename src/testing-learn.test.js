const discount = require('./discount');

// Test case untuk fungsi diskon
describe('Discount Function Tests', () => {
  // Test case 1: Harga di bawah 500 tanpa hari besar
  test('Harga 100 tanpa hari besar', () => {
    expect(discount(100, false)).toBe(100);
  });

  // Test case 2: Harga 500 tanpa hari besar (batas minimal diskon 10%)
  test('Harga 500 tanpa hari besar', () => {
    expect(discount(500, false)).toBe(450); // 500 * 0.9 = 450
  });

  // Test case 3: Harga 600 tanpa hari besar
  test('Harga 600 tanpa hari besar', () => {
    expect(discount(600, false)).toBe(540); // 600 * 0.9 = 540
  });

  // Test case 4: Harga 600 dengan hari besar
  test('Harga 600 dengan hari besar', () => {
    // 600 * 0.9 = 540 (diskon 10%)
    // 540 * 0.95 = 513 (diskon 5% tambahan untuk hari besar)
    expect(discount(600, true)).toBe(513);
  });

  // Test case 5: Harga 1000 dengan hari besar
  test('Harga 1000 dengan hari besar', () => {
    // 1000 * 0.9 = 900 (diskon 10%)
    // 900 * 0.95 = 855 (diskon 5% tambahan untuk hari besar)
    expect(discount(1000, true)).toBe(855);
  });

  // Test case 6: Harga di bawah 500 dengan hari besar
  test('Harga 400 dengan hari besar', () => {
    // 400 * 0.95 = 380 (hanya diskon 5% hari besar)
    expect(discount(400, true)).toBe(380);
  });

  // Test case 7: Harga di atas 100 tapi setelah diskon di bawah 100
  test('Harga 110 dengan hari besar', () => {
    // 110 * 0.95 = 104.5 -> 105 (pembulatan)
    expect(discount(110, true)).toBe(104.5);
  });

  // Test case 8: Harga di bawah 100 dengan hari besar
  test('Harga 90 dengan hari besar', () => {
    // 90 * 0.95 = 85.5 -> 86, tapi karena < 100, jadi 100
    expect(discount(90, true)).toBe(100);
  });
});