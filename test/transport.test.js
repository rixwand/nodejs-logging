import winston from "winston";
import TransportStream from "winston-transport";

class MyTransport extends TransportStream {
  constructor(option) {
    super(option);
  }
  log(info, next) {
    console.log(`${info.level} : ${info.message}`);
    next();
  }
}

test("logger with mytransport", () => {
  const logger = new winston.createLogger({
    level: "warn",
    transports: [new MyTransport({})],
  });

  logger.error("hello error");
  logger.warn("hello warn");
  logger.info("hello info");
  logger.http("hello http");
  logger.verbose("hello verbose");
});
