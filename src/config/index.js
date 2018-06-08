export const API_KEY = 'd2eeaf4dae5c05563d31da5c8f85d62d';

const baseUrl = 'http://api.openweathermap.org/data/2.5';
export const sixteenUrl = `${baseUrl}/forecast/daily?appid=${API_KEY}&q=`;
export const fiveUrl = `${baseUrl}/forecast?appid=${API_KEY}&q=`;
export const currentUrl = `${baseUrl}/weather?appid=${API_KEY}&q=`;

export const cities = [
    {id: 0, value: 'kharkiv', label: 'Харьков' },
    {id: 1, value: 'kyiv', label: 'Киев' },
    {id: 2, value: 'london', label: 'Лондон' },
    {id: 3, value: 'odessa', label: 'Одесса' }
];

// http://api.openweathermap.org/data/2.5/forecast?q=kharkiv,ua&appid=d2eeaf4dae5c05563d31da5c8f85d62d
