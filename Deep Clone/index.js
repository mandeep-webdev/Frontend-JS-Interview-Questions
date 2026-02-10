// Implement a deepClone function that performs a deep clone operation on JavaScript objects.
// You can assume the input only contains JSON-serializable values
// (null, boolean, number, string, Array, Object) and
// will not contain any other objects like Date, Regex, Map or Set.

const a = { user: { name: "Mandeep" }, skills: ["js", "react"] };

function deepClone(val) {
  if (typeof val !== "object") {
    return val;
  }

  if (Array.isArray(val)) {
    const result = [];

    for (let i = 0; i < val.length; i++) {
      result[i] = deepClone(val[i]);
    }

    return result;
  }

  const result = {};
  for (let key in val) {
    result[key] = deepClone(val[key]);
  }
  return result;
}

const newObj = deepClone(a);
newObj.skills.push("nodejs");
newObj.user.name = "Inder";
console.log(newObj);
console.log(a);
