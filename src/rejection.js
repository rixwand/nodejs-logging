import winston from "winston";

const hello = () => {
  return Promise.reject("ups");
};

const logger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      handleRejections: true,
      handleExceptions: true,
      filename: "rejection.log",
    }),
  ],
});

hello();
