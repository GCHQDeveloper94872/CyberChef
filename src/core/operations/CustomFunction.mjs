/**
 * @author GCHQDeveloper94872 []
 * @copyright Crown Copyright 2025
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";

/**
 * Custom Function operation
 */
class CustomFunction extends Operation {

    /**
     * CustomFunction constructor
     */
    constructor() {
        super();

        this.name = "Custom Function";
        this.module = "Default";
        this.description = "An operation which accepts JavaScript code as input and outputs the result after execution.";
        this.infoURL = ""; // Usually a Wikipedia link. Remember to remove localisation (i.e. https://wikipedia.org/etc rather than https://en.wikipedia.org/etc)
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                "name": "Function Code",
                "type": "toggleString",
                "value": "5+4",
                "toggleValues": ["JavaScript"]
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const [functionCode] = args;
        // eslint-disable-next-line no-console
        console.log(functionCode);
        const func = "function myFunc(input)) {" +
            functionCode +
        "};  func(" + input + ")";
        // eslint-disable-next-line no-eval
        return eval(func).toString();
        // return eval(input);
        // return input.toLowerCase();
    }

}

export default CustomFunction;
