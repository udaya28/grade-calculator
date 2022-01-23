// import { createLogger, format, transports } from 'winston'

// /**
//  * @function prodFormat
//  * @description formatter for prod
//  * @returns return formatter
//  */
// const prodFormat = () => {
//     const replaceError = ({ label, level, message, stack }: any) => ({
//         label,
//         level,
//         message,
//         stack,
//     })
//     const replacer = (key: string, value: any) => (value instanceof Error ? replaceError(value) : value)
//     return format.combine(format.json({ replacer }))
// }

// /**
//  * @function devFormat
//  * @description formatter for dev
//  * @returns return formatter
//  */
// const devFormat = () => {
//     const formatMessage = (info: any) => `${info.level} ${info.message}`
//     const formatError = (info: any) => `${info.level} ${info.message}\n\n${info.stack}\n`
//     const fmt = (info: any) => (info instanceof Error ? formatError(info) : formatMessage(info))
//     return format.combine(format.colorize(), format.printf(fmt))
// }

// const Logger = createLogger({
//     exitOnError: false,
//     format: process.env.NODE_ENV === 'production' ? prodFormat() : devFormat(),
//     level: 'info',
//     transports: [
//         new transports.Console(),
//         // new winston.transports.File({ filename: "errors.log" }),
//     ],
// })

// export default Logger
export {}
