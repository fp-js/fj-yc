export default (le) => ((f) => f(f))((f) => le((x) => f(f)(x)));