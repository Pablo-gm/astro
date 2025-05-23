const listProvincesIds = {
    'Otro país': 1,
    'Álava/Araba': 2,
    Albacete: 3,
    'Alicante/Alacant': 4,
    Almería: 5,
    Asturias: 6,
    Ávila: 7,
    Badajoz: 8,
    Barcelona: 9,
    Burgos: 10,
    Cáceres: 11,
    Cádiz: 12,
    Cantabria: 13,
    'Castellón/Castelló': 14,
    Ceuta: 15,
    'Ciudad Real': 16,
    Córdoba: 17,
    Cuenca: 18,
    Girona: 19,
    'Las Palmas': 20,
    Granada: 21,
    Guadalajara: 22,
    'Guipúzcoa/Gipuzkoa': 23,
    Huelva: 24,
    Huesca: 25,
    'Islas Baleares/Illes Balears': 26,
    Jaén: 27,
    'A Coruña': 28,
    'La Rioja': 29,
    León: 30,
    Lleida: 31,
    Lugo: 32,
    Madrid: 33,
    Málaga: 34,
    Melilla: 35,
    Murcia: 36,
    Navarra: 37,
    Ourense: 38,
    Palencia: 39,
    Pontevedra: 40,
    Salamanca: 41,
    Segovia: 42,
    Sevilla: 43,
    Soria: 44,
    Tarragona: 45,
    'Santa Cruz de Tenerife': 46,
    Teruel: 47,
    Toledo: 48,
    'Valencia/València': 49,
    Valladolid: 50,
    'Vizcaya/Bizkaia': 51,
    Zamora: 52,
    Zaragoza: 53,
  }
  
  export function getProvinceId(input: HTMLInputElement): void {
    const provinceId = listProvincesIds[input.value as keyof typeof listProvincesIds]
    input.setAttribute("value", provinceId !== undefined ? provinceId.toString() : "0")
  
    if (!provinceId) input.setAttribute("value", "0")
  }