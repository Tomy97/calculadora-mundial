import axios from 'axios'
import type { WorldCupDates } from '@/interfaces/WorldCupDates.interfaces'

export const worldCupDatesServices = async () => {
  const { data } = await axios.get<WorldCupDates[]>(
    'https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/fechas.json'
  )
  return data
}
