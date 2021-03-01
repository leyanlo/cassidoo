function numberOfCans(room, canCoverage) {
  return Math.ceil(
    (2 * room.height * (room.length + room.width)) / canCoverage
  );
}

const room = { length: 12, width: 10, height: 9 };
const canCoverage = 200;

console.log(numberOfCans(room, canCoverage));
// 2 // (1292)+(1092) = 396, so two cans will cover it
