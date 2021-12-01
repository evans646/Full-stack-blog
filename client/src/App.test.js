import '@testing-library/jest-dom';

import {timesTwo} from "./setupTests"




test("Multiplies by two", () => {//multiplies by two is the name of the function test
  expect(timesTwo(4)).toBe(8)
});