const { createLogger, transports, format } = require("winston");

const printFormat = format.printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level} : ${message} `
});

const printLogFormat = {
    file: format.combine(
        format.label({
            label: "백엔드 맛보기"
        }),
        // format.colorize(),
        format.timestamp({
            format: "YYYY-MM-DD HH:mm:dd",
        }),
        //메시지 커스텀
        printFormat,
    ),
    console: format.combine(
        format.colorize(),
        format.simple(),
    ),
}

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        //error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
        //자신 보다 상위 레벨은 안나옴
        level: "info",
        //말 그대로 콘솔창에 출력되는 로그 스타일을 지정
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
    }),
}

const logger = createLogger({
    transports: [
        opts.file,
    ],
});

//배포모드가 아닐경우 로그를 콘솔로도 출력
if (process.env.NODE_ENV !== "production") {
    logger.add(
        //콘솔출력
        opts.console
    )
}

module.exports = logger;
