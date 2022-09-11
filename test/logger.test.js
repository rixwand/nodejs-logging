import winston from "winston";

test("test new logger", () => {
  const logger = new winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "hello logger",
  });
});
