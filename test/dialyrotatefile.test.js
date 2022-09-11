import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logger level", () => {
  const log = new winston.createLogger({
    level: "verbose",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.simple()
    ),
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: "app-%DATE%.log",
        zippedArchive: true,
        maxSize: "1m",
        maxFiles: "14d",
      }),
    ],
  });

  for (let i = 0; i < 100000; i++) {
    log.info("Hello World");
  }
});
