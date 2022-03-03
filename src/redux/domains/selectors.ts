import { AppState } from '../store'

export function getDomains(state: AppState): string[] {
  return state.domains;
}
export function getCountries(state: AppState): string[] {
  return state.domains.map(d => d.split(/[^A-Za-z]/)[0]).filter(
    (e, i, l) => l.indexOf(e) === i
  );
}
export function getClassifications(state: AppState): string[] {
  return state.domains.map(d => d.split(/[^A-Za-z]/)[1]).filter(
    (e, i, l) => l.indexOf(e) === i
  );
}
export function getSubClassifications(state: AppState): string[] {
  return state.domains.map(d => d.split(/[^A-Za-z]/)[2]).filter(
    (e, i, l) => l.indexOf(e) === i
  );
}
