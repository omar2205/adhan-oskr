import { Adhan } from "https://esm.sh/islamic-adhan@1.0.8"

export function get_times() {
  const player = new Adhan('Egypt')

  const times = player.getTimes(
    new Date(),
    [31.223, 30.035],
    'auto'
  )

  return times
}

