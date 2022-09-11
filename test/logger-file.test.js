import winston from "winston";

test("logger level", () => {
  const logger = new winston.createLogger({
    level: "verbose",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.simple()
    ),
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        level: "warn",
        filename: "application.log",
      }),
    ],
  });

  logger.error("hello error");
  logger.warn("hello warn");
  logger.info("hello info");
  logger.http("hello http");
  logger.verbose("hello verbose");
});
