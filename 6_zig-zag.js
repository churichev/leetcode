var convert = function (s, numRows) {
    if (numRows <= 2) return s

    let cr = 0; // Carriage Return
    let lf = 0; // Line Feed || New Line
    let result_word = '';

    while (result_word.length < s.length) {
        const i = ((numRows + numRows - 2) * cr) + lf;
        const next_i = ((numRows + numRows - 2) * (cr + 1)) + lf;
        const diagonal_i = next_i - lf * 2;

        if (!s.at(i)) {
            lf++
            cr = 0;
            continue;
        }

        result_word+=s.at(i)
        if (lf > 0 && lf < numRows - 1 && s.at(diagonal_i)) {
            result_word+=s.at(diagonal_i)
        }
        ++cr
    }

    return result_word
};