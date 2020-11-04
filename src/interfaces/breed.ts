interface IUnits {
  imperial: string;
  metric: string;
}

export default interface IBreed {
  name: string;
  id: number;
  weight: IUnits;
  height: IUnits;
  origin: string;
  life_span: string;
  temperament: string;
  bred_for: string;
}
