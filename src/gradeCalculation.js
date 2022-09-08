const averageExam = (examValues) => {
  if (Array.isArray(examValues) === false)
    throw new Error("please input array");
  if (examValues.every((exam) => typeof exam !== "number"))
    throw new Error("please input number");

  const sumValues = examValues.reduce((acc, curr) => acc + curr, 0);

  return sumValues / examValues.length;
};

const isPassExam = (valuesExam, name) => {
  const minValue = 75;

  const average = averageExam(valuesExam);

  if (average > minValue) {
    console.log(`${name} pass the exam`);
    return true;
  } else {
    console.log(`${name} fail the exam`);
    return false;
  }
};

export { averageExam, isPassExam };
