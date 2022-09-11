import winston from "winston";

test("logger level", () => {
  const logger = new winston.createLogger({
    level: "verbose",
    transports: [new winston.transports.Console({})],
  });

  logger.error("hello error");
  logger.warn("hello warn");
  logger.info("hello info");
  logger.http("hello http");
  logger.verbose("hello verbose");
});
