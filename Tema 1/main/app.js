const compress = (a, b = true) => {
    if (typeof a !== "string" && !(a instanceof String)) {
        throw new TypeError("InvalidType");
    }

    if (a === "") return "";

    if (b) {
        let compressed = "";
        let count = 1;

        for (let i = 1; i <= a.length; i++) {
            if (a[i] === a[i - 1]) {
                count++;
            } else {
                compressed += a[i - 1] + count;
                count = 1;
            }
        }

        return compressed;
    } else {
        let decompressed = "";
        let i = 0;

        while (i < a.length) {
            let char = a[i];
            let count = "";

            while (!isNaN(a[i + 1])) {
                count += a[i + 1];
                i++;
            }

            decompressed += char.repeat(count === "" ? 1 : parseInt(count));
            i++;
        }

        return decompressed;
    }
};

module.exports = compress;