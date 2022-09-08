import { averageExam, isPassExam } from "../src/gradeCalculation";

test("test nilai rata rata siswa", () => {
  const listValueOfExams = [80, 100, 100, 80];

  expect(averageExam(listValueOfExams)).toEqual(90);
});

test("test kelulusan siswa", () => {
  const listValueOfExams = [80, 100, 100, 80];

  expect(isPassExam(listValueOfExams)).toEqual(true);
});

test("not array value", () => {
  expect(() => averageExam("jadhsjasdjh")).toThrow("please input array");
});

test("not number array", () => {
  expect(() => averageExam(["sdkhakj", "aksd8i"])).toThrow(
    "please input number"
  );
});

test("test kegagalan siswa", () => {
  expect(isPassExam([60, 54, 65, 34, 23], "johan")).toBeFalsy();
});
