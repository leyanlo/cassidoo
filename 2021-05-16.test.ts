type TimeSlot = {
  start: Date;
  end: Date;
};

type Person = {
  name: string;
  timeSlots: TimeSlot[];
};

function firstAvailable(
  people: Person[],
  meetingLengthMs: number
): Date | null {
  for (let a of people) {
    for (let { start: aStart, end: aEnd } of a.timeSlots) {
      const aStartTime = aStart.getTime();
      const aEndTime = aEnd.getTime();
      if (aEndTime - aStartTime < meetingLengthMs) {
        // time slot cannot contain meeting
        continue;
      }
      if (
        people.every((b) => {
          if (b.name === a.name) {
            // skip same person
            return true;
          }
          return b.timeSlots.some(({ start: bStart, end: bEnd }) => {
            const bStartTime = bStart.getTime();
            const bEndTime = bEnd.getTime();
            if (bStartTime > aStartTime) {
              // b cannot start after potential solution time
              return false;
            } else {
              // return if the meeting works for both a and b
              return bEndTime - aStartTime >= meetingLengthMs;
            }
          });
        })
      ) {
        // meeting works for a and everyone else
        return aStart;
      }
    }
  }
  // meeting does not work for everyone
  return null;
}

describe('firstAvailable', () => {
  const time = (h: number) =>
    new Date(`2021-05-17T${h.toString().padStart(2, '0')}:00:00`);
  const hToMs = (h: number) => h * 60 * 60 * 1000;

  const alice: Person = {
    name: 'Alice',
    // 8am – 12pm
    timeSlots: [{ start: time(8), end: time(12) }],
  };
  const bob: Person = {
    name: 'Bob',
    // 11am – 3pm
    timeSlots: [{ start: time(11), end: time(15) }],
  };
  const chuck: Person = {
    name: 'Chuck',
    // 9am – 10am, 1pm – 2pm
    timeSlots: [
      { start: time(9), end: time(10) },
      { start: time(13), end: time(14) },
    ],
  };

  it('returns the first available meeting time', () => {
    expect(firstAvailable([alice], hToMs(1))).toEqual(time(8));
    expect(firstAvailable([alice, bob], hToMs(1))).toEqual(time(11));
    expect(firstAvailable([alice, chuck], hToMs(1))).toEqual(time(9));
    expect(firstAvailable([bob, chuck], hToMs(1))).toEqual(time(13));
  });
  it('returns null if no people', () => {
    expect(firstAvailable([], hToMs(1))).toBe(null);
  });
  it('returns null if no available meeting time', () => {
    expect(firstAvailable([alice, bob], hToMs(2))).toBe(null);
    expect(firstAvailable([alice, bob, chuck], hToMs(1))).toBe(null);
  });
});
