import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/zh-cn'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Shanghai")

export default defineEventHandler((event) => {

  return {
    timestamp: dayjs().unix(),
    datetime: dayjs().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss'),
    date: dayjs().locale('zh-cn').format('YYYY-MM-DD'),
    time: dayjs().locale('zh-cn').format('HH:mm:ss'),
    ip: event.context.clientIp
  }
});
