const formatNumber = (
  inputCryptoNumber: string | number | undefined,
  decimalPlaces = 8
) => {
  if (Number.isNaN(Number(inputCryptoNumber))) return "-";

  const formattedNumber = Number(inputCryptoNumber).toLocaleString(undefined, {
    maximumFractionDigits: decimalPlaces,
    useGrouping: true,
  });

  const parts = formattedNumber.split(".");
  const [wholePart, decimalPart] = parts;

  function removeTrailingZeros() {
    if (parts.length > 1) {
      parts[1] = decimalPart.replace(/0+$/, "");
    }
  }

  removeTrailingZeros();

  if (decimalPart === "") {
    return wholePart;
  }

  return parts.join(".");
};

export default formatNumber;
