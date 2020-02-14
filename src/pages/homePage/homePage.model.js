export const columns = [
    { id: 'number', 
      label: ' № ', 
      minWidth: 60,
      type: 'number' 
    },  
    { id: 'taxCode', 
      label: 'ИИН', 
      minWidth: 170, 
      align: 'center',
      type: 'string' 
    },
    { id: 'userName', 
      label: 'Имя', 
      minWidth: 100, 
      align: 'center',
      type: 'string' 
    },
    {
      id: 'userSurName',
      label: 'Фамилия',
      minWidth: 170,
      align: 'center',
      type: 'string'
    },
    {
      id: 'dateOfBirth',
      label: 'День рождения',
      minWidth: 170,
      align: 'center',
      type: 'date'
    },
    {
      id: 'depositSum',
      label: 'Сумма в депозите',
      minWidth: 170,
      align: 'center',
      format: value => value.toFixed(2),
      type: 'number'
    },
    {
      id: 'currency',
      label: 'Валюта',
      minWidth: 170,
      align: 'center',
      type: 'string'
    },
];


export function formatDate(dateOfBirth) {
  const day = +(String(dateOfBirth).slice(0,2));
  const month = +(String(dateOfBirth).slice(3,5));
  const year = +(String(dateOfBirth).slice(6,10));
  let date = null;

  if (day && month && year) {
    date = new Date(year, month-1, day);
  } 
  
  return date;
}


function createUser(taxCode, userName, userSurName, dateOfBirth, depositSum, currency) {
  return { taxCode, userName, userSurName, dateOfBirth, depositSum, currency };
}
  
export const rows = [
      createUser('042520123420', 'Марат1', 'Алмат8', '01.01.2020', 451.56, 'KZT'),
      createUser('042520123220', 'Марат2', 'Алмат7', '03.01.2020', 42.56, 'USD'),
      createUser('042520123020', 'Марат3', 'Алмат7', '05.02.2020', 252.56, 'EUR'),
      createUser('142520121020', 'Марат4', 'Алмат6', '05.09.2020', 352.56, 'KZT'),
      createUser('242520123020', 'Марат5', 'Алмат5', '06.01.2020', 452.56, 'USD'),
      createUser('342520123020', 'Марат6', 'Алмат4', '01.01.2020', 652.56, 'EUR'),
      createUser('142520123020', 'Марат7', 'Алмат3', '02.01.2020', 152.56, 'KZT'),
      createUser('242520123020', 'Марат8', 'Алмат2', '03.01.2020', 252.56, 'USD'),
      createUser('344520123020', 'Марат9', 'Алмат1', '04.01.2020', 352.56, 'EUR'),
      createUser('052520123020', 'Марат0', 'Алмат0', '05.01.2020', 452.56, 'KZT'),
      createUser('042520123020', 'Марат1', 'Алмат', '01.03.2020', 462.56, 'USD'),
      createUser('042520123020', 'Марат', 'Алмат1', '01.04.2020', 458.56, 'EUR'),
      createUser('042520123020', 'Марат', 'Алмат2', '01.03.2020', 4.56, 'KZT'),
      createUser('042520123020', 'Марат', 'Алмат3', '01.02.2020', 4.6, 'USD'),
      createUser('042520123020', 'Марат', 'Алмат4', '01.01.2020', 52.56, 'EUR'),
      createUser('042520123020', 'Марат', 'Алмат5', '12.01.2020', 1452.56, 'KZT'),
      createUser('042520123020', 'Марат', 'Алмат6', '13.01.2020', 5452.56, 'USD'),
      createUser('042520123020', 'Марат', 'Алмат7', '01.01.2021', 6452.56, 'EUR'),
      createUser('042520123020', 'Марат', 'Алмат8', '01.01.2022', 352.56, 'KZT'),
      createUser('042520123020', 'Марат', 'Алмат9', '01.01.2022', 652.56, 'USD'),
      createUser('042520123020', 'Марат', 'Алмат0', '01.01.2023', 852.56, 'EUR'),
      createUser('042520123020', 'Марат', 'Алмат1', '01.01.2020', 952.56, 'KZT'),      
      createUser('042520123020', 'Марат', 'Алмат2', '01.01.2020', 52.56, 'USD'),
      createUser('042520123020', 'Марат', 'Алмат3', '01.01.2020', 952.56, 'EUR'),
      createUser('042520123020', 'Марат', 'Алмат4', '01.01.2020', 452.56, 'KZT'),
      createUser('042520123020', 'Марат', 'Алмат5', '01.03.2020', 452.56, 'USD'),
      createUser('042520123020', 'Марат', 'Алмат6', '01.04.2020', 452.56, 'EUR'),
      createUser('042520123020', 'Марат', 'Алмат5', '01.01.2020', 452.56, 'KZT'),
      createUser('042520123020', 'Марат', 'Алмат6', '02.01.2020', 452.56, 'USD'),
      createUser('042520123020', 'Марат', 'Алмат5', '01.03.2020', 452.56, 'EUR'),
];