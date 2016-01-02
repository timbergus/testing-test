class Subtract {

    static twoNumbers (a, b) {

        return a - b;
    }

    static inPositive (a, b) {

        return Math.abs(a - b);
    }

    static nNumbers (numbers, inverse) {

        let reducer = (acc, value) => acc - value;

        if (inverse) {

            return numbers.reduceRight(reducer);

        } else {

            return numbers.reduce(reducer);
        }
    }
}

export default Subtract;
