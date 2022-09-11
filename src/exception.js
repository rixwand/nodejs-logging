import winston from "winston";

const logger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      handleExceptions: true,
      filename: "exceptions.log",
    }),
  ],
});

hello();
