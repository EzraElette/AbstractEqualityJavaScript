/* eslint-disable max-lines-per-function */
// eslint-disable-next-line complexity
function equal(x, y) {
  if (typeof x === typeof y) {
    return x === y;
  }

  if (x === undefined || x === null) {
    if (y === undefined || y === null) return true;
  }

  if (typeof x === "number" && typeof y === "string") {
    return equal(x, Number(y));
  }

  if (typeof x === "string" && typeof y === "number") {
    return equal(Number(x), y);
  }

  if (typeof x === "string" && typeof y === "bigint") {
    // eslint-disable-next-line id-length
    let n;
    try {
      // eslint-disable-next-line no-undef
      n = BigInt(x);
    } catch (error) {
      console.log(error);
      return false;
    }
    return equal(n, y);
  }

  if (typeof x === "bigint" && typeof y === "string") {
    return equal(y, x);
  }

  if (typeof x === "boolean") {
    return equal(Number(x), y);
  }

  if (typeof y === "boolean") {
    return equal(x, Number(y));
  }

  if (
    ["string", "number", "bigint", "symbol"].includes(typeof x) &&
    typeof y === "object"
  ) {
    return equal(x, y + "");
  }

  if (
    typeof x === "object" &&
    ["string", "number", "bigint", "symbol"].includes(typeof y)
  ) {
    // eslint-disable-next-line no-unused-vars
    return equal(x + "", y);
  }

  if (
    (typeof x === "bigint" && typeof y === "number") ||
    (typeof x === "number" && typeof y === "bigint")
  ) {
    if (Number.isNaN(x) || Number.isNaN(y)) {
      return false;
    } else if (
      [Infinity, -Infinity].includes(x) ||
      [Infinity, -Infinity].includes(y)
    ) {
      return false;
    } else if (Number(x) === Number(y)) {
      return true;
    }
  }
  return false;
}
