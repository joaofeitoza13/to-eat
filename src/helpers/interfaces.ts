import type { Diet, RecomendedStatus } from "./types"

export interface Dish {
  name: string,
  diet?: Diet,
  status?: RecomendedStatus
}

export interface Restaurant {
  name: string,
  address?: string,
  status?: RecomendedStatus,
  dishes?: Dish[]
}
