export function contieneCaracteresPeligrosos(str) {
  if (typeof str !== "string") return false;
  const pattern = /[;"'\\?%]/; // común en inyecciones SQL
  return pattern.test(str);
}

export function validarDatosEntrada(obj) {
  for (let key in obj) {
    const valor = obj[key];
    if (typeof valor === "string" && contieneCaracteresPeligrosos(valor)) {
      throw new Error(`El campo "${key}" contiene caracteres no permitidos.`);
    }
  }
}