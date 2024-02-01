// switch
let day = 'Monday';
let message;

switch (day.toLowerCase()) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        message = 'It\'s a weekday. Work hard!';
        break;
    case 'saturday':
    case 'sunday':
        message = 'It\'s the weekend. Relax and enjoy!';
        break;
    default:
        message = 'Invalid day. Please enter a valid day of the week.';
}

console.log(message);
