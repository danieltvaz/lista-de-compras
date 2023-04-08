export function formatMoney(value: string | undefined) {
  try {
    if (!Number(value)) return "R$ 0,00";
    const [reais, centavos] = Number(value).toFixed(2).toString().split(".");
    const reaisFormatado = reais.replace(/^|(\d{3}(?=(\d{3})*(\.|$)))/g, (match) => `.${match}`);
    const reaisFormatadoFix = reaisFormatado.slice(1);
    const formattedNumber = `R$ ${reaisFormatadoFix},${centavos}`;
    return formattedNumber;
  } catch (err) {
    return value;
  }
}
