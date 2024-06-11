import { format, parse } from 'date-fns'
import { enUS } from 'date-fns/locale'

const updateTime = (date, time) => {
    const parsedDate = parse(`${date} ${time}`, 'yyyy-MM-dd HH:mm', new Date());
    const formattedDate = format(parsedDate, 'EEEE, MMMM do, yyyy', { locale: enUS });
    const formattedTime = format(parsedDate, 'hh:mm aa', { locale: enUS });

    const domDate = document.querySelector('.date');
    domDate.textContent = formattedDate;

    const domTime = document.querySelector('.time');
    domTime.textContent = formattedTime 
    
}

export default updateTime;
