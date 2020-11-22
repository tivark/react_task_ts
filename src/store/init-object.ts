const initObject = {
  items: {},
  columns: {
    'available': {
      id: 'available',
      title: 'Доступные',
      itemsId: []
    },
    'selected': {
      id: 'selected',
      title: 'Выбранные',
      itemsId: []
    },
  },
  columnOrder: ['available', 'selected'],
  datePeriod: {
    startDate:(new Date(Date.now())).toJSON().substring(0, 16),
    endDate: (new Date(Date.now())).toJSON().substring(0, 16)
  },
  sidePanel: [
    {
      title: 'Home',
      path: '/',
      icon: 'home'
    },
    {
      title: 'Export',
      path: '/export/',
      icon: 'export'
    },
    {
      title: 'Blank page',
      path: '/blank/',
      icon: 'bookmark'
    }
  ],
  requestSend: false,
  baseUpdated: false,
  lastUpdate:[],
  currentPath: '/',
  filterByName: '',
  requestOptions: {
    'group-1': {
      id: 'group-1',
      title: 'Учёт по дате',
      optionsID:['option-1'],
      options: [
        {
          id: 'option-1',
          title: '',
          type: 'single',
          variants: [
            {id: 'create', label: 'Создания'},
            {id: 'public', label: 'Публикации'}
          ]
        }
      ]
    },
    'group-2': {
      id: 'group-2',
      title: 'Алкоголь',
      optionsID: ['option-2'],
      options: [
        {
          id: 'option-2',
          title: 'Все',
          type: 'multi',
          variants: [
            {id: 'w_abv', label: 'Алкогольное'},
            {id: 'wo_abv', label: 'Безалкогольное'}
          ]
        }
      ]
    },
    'group-3': {
      id: 'group-3',
      title: 'Blank',
      optionsID: ['option-3'],
      options: [
        {
          id: 'option-3',
          title: 'Blank',
          type: 'multi',
          variants: [
            {id: 'b1', label: 'Blank option 1'},
            {id: 'b2', label: 'Blank option 2'},
            {id: 'b3', label: 'Blank option 3'},
            {id: 'b4', label: 'Blank option 4'},
            {id: 'b5', label: 'Blank option 5'},
            {id: 'b6', label: 'Blank option 6'},
            {id: 'b7', label: 'Blank option 7'},
            {id: 'b8', label: 'Blank option 8'},
            {id: 'b9', label: 'Blank option 9'},
            {id: 'b10', label: 'Blank option 10'},
            {id: 'b11', label: 'Blank option 11'},
            {id: 'b12', label: 'Blank option 12'},
            {id: 'b13', label: 'Blank option 13'}
          ]
        }
      ]
    }
  },
  selectedOptions: {
    'option-1':'create',
    'option-2':['w_abv', 'wo_abv'],
    'option-3':[]
  }
}

export {initObject};