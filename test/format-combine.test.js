import winston from "winston";

test("logger format", () => {
  const logger = new winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),

    level: "verbose",
    transports: [new winston.transports.Console({})],
  });

  logger.error("hello error");
  logger.warn("hello warn");
  logger.info("hello info");
  logger.http("hello http");
  logger.verbose("hello verbose");
});
