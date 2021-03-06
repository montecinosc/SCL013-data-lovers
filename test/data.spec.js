import {
  filterDataHouse,
  filterDataEstudiante,
  filterDataProfesor,
  filterDataOtros,
  filterDataPatronus,
  filterDataVarita,
  buscador,
  orden
} from "../src/data.js";
//Data casas


const dataHouse = [{
  name: 'Harry Potter',
  house: 'Gryffindor'
}];

//test casa
describe('filterDataHouse', () => {
  test('is a function', () => {
    expect(typeof filterDataHouse).toBe('function');
  });

  it('deberia retornar Gryffindor ', () => {
    expect(filterDataHouse(dataHouse).house);

  });

});

const filterEstudiante = [{
  name: 'Harry Potter',
  house: 'Gryffindor',
  patronus: 'stag',
  hogwartsStudent: true,
}];

describe('filterDataEstudiante', () => {
  test('is a function', () => {
    expect(typeof filterDataEstudiante).toBe('function');
  });

  it('deberia retornar true ', () => {
    expect(filterDataEstudiante(filterEstudiante)[0].hogwartsStudent).toEqual(true);
  });

})

const filterProfesor = [{
  name: 'Minerva McGonagall',
  house: 'Gryffindor',
  hogwartsStudent: false,
  hogwartsStaff: true,
}];

describe('filterDataProfesor', () => {
  test('is a function', () => {
    expect(typeof filterDataProfesor).toBe('function');
  });

  it('deberia retornar true ', () => {
    expect(filterDataProfesor(filterProfesor)[0].hogwartsStaff).toEqual(true);
  });

})

const filterOtros = [{
  name: 'Bellatrix Lestrange',
  house: 'Slytherin',
  hogwartsStudent: false,
  hogwartsStaff: false,
}];

describe('filterDataOtros', () => {
  test('is a function', () => {
    expect(typeof filterDataOtros).toBe('function');
  });

  it('deberia retornar false ', () => {
    expect(filterDataOtros(filterOtros)[0].hogwartsStudent).toEqual(false) &&
      expect(filterDataOtros(filterOtros)[0].hogwartsStaff).toEqual(false);
  });

})

const dataPatronus = [{
  name: 'Harry Potter',
  house: 'Gryffindor',
  patronus: 'stag'
}];

describe('filterDataPatronus', () => {
  test('is a function', () => {
    expect(typeof filterDataPatronus).toBe('function');
  });

  it('deberia retornar stag ', () => {
    expect(filterDataPatronus(dataPatronus)[0].patronus).toEqual("stag");
  });

})

const dataVaritas = [{
    name: 'Harry Potter',
    house: 'Gryffindor',
    patronus: 'stag',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    }
  },
  {
    name: 'Kingsley Shacklebolt',
    wand: {
      wood: '',
      core: '',
      length: '',
    }
  },

];

describe('filterDataVarita', () => {
  test('is a function', () => {
    expect(typeof filterDataVarita).toBe('function');
  });

  it('deberia retornar holly', () => {
    expect(filterDataVarita(dataVaritas).wand) === ("holly") &&
      expect(filterDataVarita(dataVaritas).wand) === ("phoenix feather") &&
      expect(filterDataVarita(dataVaritas).wand) === ("11");
  });

})




const dataOrdenOriginal = [{
    name: 'Arthur Weasley'
  },
  {
    name: 'Bellatrix Lestrange'
  },
  {
    name: 'Argus Filch'
  }
];

const dataOrdenAZ = [{
    name: 'Argus Filch'
  },
  {
    name: 'Arthur Weasley'
  },
  {
    name: 'Bellatrix Lestrange'
  }
];
const dataOrdenZA = [{
    name: 'Bellatrix Lestrange'
  },
  {
    name: 'Arthur Weasley'
  },
  {
    name: 'Argus Filch'
  }
];

describe('orden', () => {
  test('is a function', () => {
    expect(typeof orden).toBe('function');
  });

  it('deberia retornar AZ ', () => {
    expect(orden(dataOrdenOriginal)).toEqual(dataOrdenAZ);
  });
  it('deberia retornar ZA ', () => {
    expect(orden(dataOrdenOriginal).reverse()).toEqual(dataOrdenZA);
  });


})


const dataBuscador = [{
    name: 'Argus Filch'
  },
  {
    name: 'Arthur Weasley'
  },
  {
    name: 'Bellatrix Lestrange'
  }
];
const buscar = "bel" || "BEL" || "Bel"
const buscado = [{
    name: 'Rubeus Hagrid'
  },
  {
    name: 'Bellatrix Lestrange'
  },
  {
    name: 'Vincent Crabbe'
  }
];

describe('buscador', () => {
  test('is a function', () => {
    expect(typeof buscador).toBe('function');
  });
  it('deberia retornar Bellatrix ', () => {
    expect(buscador(dataBuscador, buscar)) === (buscado)


  });
})