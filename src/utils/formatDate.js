export default function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份是从0开始计数的，所以需要加1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const dayOfWeek = date.getDay(); // 星期几（0表示周日，1表示周一，以此类推）

  // 将星期几转换为对应的汉字
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  const weekday = weekdays[dayOfWeek];

  // 将日期和时间信息拼接成字符串
  const formattedDate = `${year}年${month}月${day}日 周${weekday} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return formattedDate;
}