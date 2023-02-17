import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Data {
  imagenSlider: string;
  tituloServicio: string;
  descripcionServicioCorta: string;
  descripcionServicioLarga: string;
  imagenServicio: string;
}
