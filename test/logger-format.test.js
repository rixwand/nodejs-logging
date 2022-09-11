import winston from "winston";

test("logger format", () => {
  const logger = new winston.createLogger({
    format: winston.format.simple(),
    level: "verbose",
    transports: [new winston.transports.Console({})],
  });

  logger.error("hello error");
  logger.warn("hello warn");
  logger.info("hello info");
  logger.http("hello http");
  logger.verbose("hello verbose");
});

test("logger format custom", () => {
  const logger = new winston.createLogger({
    format: winston.format.printf((log) => {
      return `${new Date()} \n ${log.level} : ${log.message}`;
    }),
    level: "verbose",
    transports: [new winston.transports.Console({})],
  });

  logger.error("hello error");
  logger.warn("hello warn");
  logger.info("hello info");
  logger.http("hello http");
  logger.verbose("hello verbose");
});
