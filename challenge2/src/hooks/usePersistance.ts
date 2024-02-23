export const usePersistance = (lastClosedTime: string | null) => {
  if (lastClosedTime) {
    const lastClosedTimeMs = Number(lastClosedTime);
    const nowMs = Date.now();
    const timeDifferenceMs = nowMs - lastClosedTimeMs;
    return Math.floor(timeDifferenceMs / 1000); // Divide by 1000 to get seconds
  } else {
    return 0;
  }
};
