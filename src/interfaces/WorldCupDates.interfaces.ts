export interface WorldCupDates {
  fecha?: Date
  numeroPartido?: number
  hora?: string
  grupo?: string
  instancia?: Instancia
  estadio?: string
  tv?: Tv
  sede?: Sede
  ciudad?: string
  idpartido?: string
  equipoA?: string
  equipoB?: string
}

export enum Instancia {
  Cuartos = 'cuartos',
  FaseGrupos = 'fase-grupos',
  Final = 'final',
  Octavos = 'octavos',
  Semis = 'semis',
  Tercero = 'tercero'
}

export enum Sede {
  Qatar = 'Qatar'
}

export enum Tv {
  Empty = '--'
}
