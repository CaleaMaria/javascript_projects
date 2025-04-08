/**
 * The function renders an object to a tagged string and performs token substitution.
 * @param {object} input - a javascript object representing a hierarchical structure  
 * @param {object} values - a list of key-value pairs where the key is a token to be replaced with the value in strings present in input
 * @returns {string}
 * @throws {Error}
 */
function render(input, values){
    
    if (typeof input !== 'object' || typeof values !== 'object') {
        throw new Error('InvalidType');
    }

    
    if (Object.keys(input).length === 0) {
        return "";
    }

    function processNode(node) {
        if (typeof node === 'string') {
            return node.replace(/\$\{(.*?)\}/g, (match, key) => {
                return values[key] !== undefined ? values[key] : match;
            });
        }

        if (typeof node === 'object') {
            return Object.entries(node)
                .map(([key, content]) => `<${key}>${processNode(content)}</${key}>`)
                .join('');
        }

        return '';
    }

    return processNode(input);
}

module.exports = {
    render
}
