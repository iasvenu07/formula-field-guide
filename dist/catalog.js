// Catalog based on Microsoft Support’s alphabetical Excel function index.
window.catalog = [
  {
    "name": "ABS",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get a number's magnitude.",
    "url": "https://support.microsoft.com/en-us/excel/functions/abs-function",
    "note": "",
    "syntax": "ABS(number)",
    "example": "=ABS(-12)"
  },
  {
    "name": "ACCRINT",
    "category": "Financial",
    "version": "",
    "summary": "Get the accrued interest for a security that pays periodic interest.",
    "url": "https://support.microsoft.com/en-us/excel/functions/accrint-function",
    "note": "",
    "syntax": "ACCRINT(issue, first_interest, settlement, rate, par, frequency, [basis], [calc_method])",
    "example": "=ACCRINT(DATE(2025,1,1), DATE(2025,7,1), DATE(2025,4,1), 5%, 1000, 2)"
  },
  {
    "name": "ACCRINTM",
    "category": "Financial",
    "version": "",
    "summary": "Get the accrued interest for a security that pays interest at maturity.",
    "url": "https://support.microsoft.com/en-us/excel/functions/accrintm-function",
    "note": "",
    "syntax": "ACCRINTM(issue, settlement, rate, par, [basis])",
    "example": "=ACCRINTM(DATE(2025,1,1), DATE(2025,10,1), 5%, 1000)"
  },
  {
    "name": "ACOS",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the arccosine of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/acos-function",
    "note": "",
    "syntax": "ACOS(number)",
    "example": "=ACOS(0.5)"
  },
  {
    "name": "ACOSH",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the inverse hyperbolic cosine of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/acosh-function",
    "note": "",
    "syntax": "ACOSH(number)",
    "example": "=ACOSH(2)"
  },
  {
    "name": "ACOT",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get the arccotangent of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/acot-function",
    "note": "",
    "syntax": "ACOT(number)",
    "example": "=ACOT(0.5)"
  },
  {
    "name": "ACOTH",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get the hyperbolic arccotangent of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/acoth-function",
    "note": "",
    "syntax": "ACOTH(number)",
    "example": "=ACOTH(2)"
  },
  {
    "name": "ADDRESS",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Get a reference as text to a single cell in a worksheet.",
    "url": "https://support.microsoft.com/en-us/excel/functions/address-function",
    "note": "",
    "syntax": "ADDRESS(row_num, column_num, [abs_num], [a1], [sheet_text])",
    "example": "=ADDRESS(5, 3)"
  },
  {
    "name": "AGGREGATE",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get an aggregate in a list or database.",
    "url": "https://support.microsoft.com/en-us/excel/functions/aggregate-function",
    "note": "",
    "syntax": "AGGREGATE(function_num, options, ref1, [ref2], …)",
    "example": "=AGGREGATE(9, 6, B2:B20)"
  },
  {
    "name": "AMORDEGRC",
    "category": "Financial",
    "version": "",
    "summary": "Get the depreciation for each accounting period by using a depreciation coefficient.",
    "url": "https://support.microsoft.com/en-us/excel/functions/amordegrc-function",
    "note": "",
    "syntax": "AMORDEGRC(cost, date_purchased, first_period, salvage, period, rate, [basis])",
    "example": "=AMORDEGRC(10000, DATE(2024,1,1), DATE(2024,12,31), 1000, 1, 0.15)"
  },
  {
    "name": "AMORLINC",
    "category": "Financial",
    "version": "",
    "summary": "Get the depreciation for each accounting period.",
    "url": "https://support.microsoft.com/en-us/excel/functions/amorlinc-function",
    "note": "",
    "syntax": "AMORLINC(cost, date_purchased, first_period, salvage, period, rate, [basis])",
    "example": "=AMORLINC(10000, DATE(2024,1,1), DATE(2024,12,31), 1000, 1, 0.15)"
  },
  {
    "name": "AND",
    "category": "Logical",
    "version": "",
    "summary": "Check whether every condition is true.",
    "url": "https://support.microsoft.com/en-us/excel/functions/and-function",
    "note": "",
    "syntax": "AND(logical1, [logical2], …)",
    "example": "=AND(TRUE, FALSE)"
  },
  {
    "name": "ARABIC",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Convert a Roman number to Arabic, as a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/arabic-function",
    "note": "",
    "syntax": "ARABIC( text )",
    "example": "=ARABIC(\"XLIX\")"
  },
  {
    "name": "AREAS",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Get the number of areas in a reference.",
    "url": "https://support.microsoft.com/en-us/excel/functions/areas-function",
    "note": "",
    "syntax": "AREAS(reference)",
    "example": "=AREAS((A1:B2,D1:E2))"
  },
  {
    "name": "ARRAYTOTEXT",
    "category": "Text",
    "version": "2021",
    "summary": "Get an array of text values from any specified range.",
    "url": "https://support.microsoft.com/en-us/excel/functions/arraytotext-function",
    "note": "",
    "syntax": "ARRAYTOTEXT(array, [format])",
    "example": "=ARRAYTOTEXT(A2:C5, 1)"
  },
  {
    "name": "ASC",
    "category": "Text",
    "version": "",
    "summary": "Change full-width (double-byte) English letters or katakana within a character string to half-width (single-byte) characters.",
    "url": "https://support.microsoft.com/en-us/excel/functions/asc-function",
    "note": "",
    "syntax": "ASC(text)",
    "example": "=ASC(\"ＡＢＣ\")"
  },
  {
    "name": "ASIN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the arcsine of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/asin-function",
    "note": "",
    "syntax": "ASIN(number)",
    "example": "=ASIN(0.5)"
  },
  {
    "name": "ASINH",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the inverse hyperbolic sine of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/asinh-function",
    "note": "",
    "syntax": "ASINH(number)",
    "example": "=ASINH(0.5)"
  },
  {
    "name": "ATAN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the arctangent of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/atan-function",
    "note": "",
    "syntax": "ATAN(number)",
    "example": "=ATAN(0.5)"
  },
  {
    "name": "ATAN2",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the arctangent from x- and y-coordinates.",
    "url": "https://support.microsoft.com/en-us/excel/functions/atan2-function",
    "note": "",
    "syntax": "ATAN2(x_num, y_num)",
    "example": "=ATAN2(3, 4)"
  },
  {
    "name": "ATANH",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the inverse hyperbolic tangent of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/atanh-function",
    "note": "",
    "syntax": "ATANH(number)",
    "example": "=ATANH(0.5)"
  },
  {
    "name": "AVEDEV",
    "category": "Statistical",
    "version": "",
    "summary": "Get the average of the absolute deviations of data points from their mean.",
    "url": "https://support.microsoft.com/en-us/excel/functions/avedev-function",
    "note": "",
    "syntax": "AVEDEV(number1, [number2], ...)",
    "example": "=AVEDEV(3, 7, 11)"
  },
  {
    "name": "AVERAGE",
    "category": "Statistical",
    "version": "",
    "summary": "Find the arithmetic mean.",
    "url": "https://support.microsoft.com/en-us/excel/functions/average-function",
    "note": "",
    "syntax": "AVERAGE(number1, [number2], …)",
    "example": "=AVERAGE(10, 20, 30)"
  },
  {
    "name": "AVERAGEA",
    "category": "Statistical",
    "version": "",
    "summary": "Get the average of the supplied inputs, including numbers, text, and logical values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/averagea-function",
    "note": "",
    "syntax": "AVERAGEA(value1, [value2], ...)",
    "example": "=AVERAGEA(3, 7, 11)"
  },
  {
    "name": "AVERAGEIF",
    "category": "Statistical",
    "version": "",
    "summary": "Average the values associated with matching cells.",
    "url": "https://support.microsoft.com/en-us/excel/functions/averageif-function",
    "note": "",
    "syntax": "AVERAGEIF(range, criteria, [average_range])",
    "example": "=AVERAGEIF(A2:A10, \"North\", B2:B10)"
  },
  {
    "name": "AVERAGEIFS",
    "category": "Statistical",
    "version": "",
    "summary": "Average the values associated with several conditions.",
    "url": "https://support.microsoft.com/en-us/excel/functions/averageifs-function",
    "note": "",
    "syntax": "AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2], …)",
    "example": "=AVERAGEIFS(C2:C10, A2:A10, \"North\")"
  },
  {
    "name": "BAHTTEXT",
    "category": "Text",
    "version": "",
    "summary": "Convert a number to text, using the ß (baht) currency format.",
    "url": "https://support.microsoft.com/en-us/excel/functions/bahttext-function",
    "note": "",
    "syntax": "BAHTTEXT(number)",
    "example": "=BAHTTEXT(123.25)"
  },
  {
    "name": "BASE",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Convert a number into a text representation with the given radix (base).",
    "url": "https://support.microsoft.com/en-us/excel/functions/base-function",
    "note": "",
    "syntax": "BASE(Number, Radix [Min_length])",
    "example": "=BASE(31, 16)"
  },
  {
    "name": "BESSELI",
    "category": "Engineering",
    "version": "",
    "summary": "Get the modified Bessel function In(x).",
    "url": "https://support.microsoft.com/en-us/excel/functions/besseli-function",
    "note": "",
    "syntax": "BESSELI(X, N)",
    "example": "=BESSELI(2, 1)"
  },
  {
    "name": "BESSELJ",
    "category": "Engineering",
    "version": "",
    "summary": "Get the Bessel function Jn(x).",
    "url": "https://support.microsoft.com/en-us/excel/functions/besselj-function",
    "note": "",
    "syntax": "BESSELJ(X, N)",
    "example": "=BESSELJ(2, 1)"
  },
  {
    "name": "BESSELK",
    "category": "Engineering",
    "version": "",
    "summary": "Get the modified Bessel function Kn(x).",
    "url": "https://support.microsoft.com/en-us/excel/functions/besselk-function",
    "note": "",
    "syntax": "BESSELK(X, N)",
    "example": "=BESSELK(2, 1)"
  },
  {
    "name": "BESSELY",
    "category": "Engineering",
    "version": "",
    "summary": "Get the Bessel function Yn(x).",
    "url": "https://support.microsoft.com/en-us/excel/functions/bessely-function",
    "note": "",
    "syntax": "BESSELY(X, N)",
    "example": "=BESSELY(2, 1)"
  },
  {
    "name": "BETA.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the beta cumulative distribution function.",
    "url": "https://support.microsoft.com/en-us/excel/functions/beta-dist-function",
    "note": "",
    "syntax": "BETA.DIST(x,alpha,beta,cumulative,[A],[B])",
    "example": "=BETA.DIST(0.4, 2, 3, TRUE)"
  },
  {
    "name": "BETA.INV",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the inverse of the cumulative distribution function for a specified beta distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/beta-inv-function",
    "note": "",
    "syntax": "BETA.INV(probability,alpha,beta,[A],[B])",
    "example": "=BETA.INV(0.7, 2, 3)"
  },
  {
    "name": "BETADIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the beta cumulative distribution function.",
    "url": "https://support.microsoft.com/en-us/excel/functions/betadist-function",
    "note": "",
    "syntax": "BETADIST(x,alpha,beta,[A],[B])",
    "example": "=BETADIST(0.4, 2, 3)"
  },
  {
    "name": "BETAINV",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the inverse of the cumulative distribution function for a specified beta distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/betainv-function",
    "note": "",
    "syntax": "BETAINV(probability,alpha,beta,[A],[B])",
    "example": "=BETAINV(0.7, 2, 3)"
  },
  {
    "name": "BIN2DEC",
    "category": "Engineering",
    "version": "",
    "summary": "Convert a binary number to decimal.",
    "url": "https://support.microsoft.com/en-us/excel/functions/bin2dec-function",
    "note": "",
    "syntax": "BIN2DEC(number)",
    "example": "=BIN2DEC(\"10110\")"
  },
  {
    "name": "BIN2HEX",
    "category": "Engineering",
    "version": "",
    "summary": "Convert a binary number to hexadecimal.",
    "url": "https://support.microsoft.com/en-us/excel/functions/bin2hex-function",
    "note": "",
    "syntax": "BIN2HEX(number, [places])",
    "example": "=BIN2HEX(\"10110\")"
  },
  {
    "name": "BIN2OCT",
    "category": "Engineering",
    "version": "",
    "summary": "Convert a binary number to octal.",
    "url": "https://support.microsoft.com/en-us/excel/functions/bin2oct-function",
    "note": "",
    "syntax": "BIN2OCT(number, [places])",
    "example": "=BIN2OCT(\"10110\")"
  },
  {
    "name": "BINOM.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the individual term binomial distribution probability.",
    "url": "https://support.microsoft.com/en-us/excel/functions/binom-dist-function",
    "note": "",
    "syntax": "BINOM.DIST(number_s,trials,probability_s,cumulative)",
    "example": "=BINOM.DIST(3, 10, 0.4, FALSE)"
  },
  {
    "name": "BINOM.DIST.RANGE",
    "category": "Statistical",
    "version": "2013",
    "summary": "Get the probability of a trial result using a binomial distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/binom-dist-range-function",
    "note": "",
    "syntax": "BINOM.DIST.RANGE(trials, probability_s, number_s, [number_s2])",
    "example": "=BINOM.DIST.RANGE(10, 0.4, 3, 5)"
  },
  {
    "name": "BINOM.INV",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the smallest value for which the cumulative binomial distribution is less than or equal to a criterion value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/binom-inv-function",
    "note": "",
    "syntax": "BINOM.INV(trials,probability_s,alpha)",
    "example": "=BINOM.INV(10, 0.4, 0.8)"
  },
  {
    "name": "BINOMDIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the individual term binomial distribution probability.",
    "url": "https://support.microsoft.com/en-us/excel/functions/binomdist-function",
    "note": "",
    "syntax": "BINOMDIST(number_s,trials,probability_s,cumulative)",
    "example": "=BINOMDIST(3, 10, 0.4, FALSE)"
  },
  {
    "name": "BITAND",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get a 'Bitwise And' of two numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/bitand-function",
    "note": "",
    "syntax": "BITAND(number1, number2)",
    "example": "=BITAND(12, 10)"
  },
  {
    "name": "BITLSHIFT",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get a value number shifted left by shift_amount bits.",
    "url": "https://support.microsoft.com/en-us/excel/functions/bitlshift-function",
    "note": "",
    "syntax": "BITLSHIFT(number, shift_amount)",
    "example": "=BITLSHIFT(8, 2)"
  },
  {
    "name": "BITOR",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get a bitwise OR of 2 numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/bitor-function",
    "note": "",
    "syntax": "BITOR(number1, number2)",
    "example": "=BITOR(12, 10)"
  },
  {
    "name": "BITRSHIFT",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get a value number shifted right by shift_amount bits.",
    "url": "https://support.microsoft.com/en-us/excel/functions/bitrshift-function",
    "note": "",
    "syntax": "BITRSHIFT(number, shift_amount)",
    "example": "=BITRSHIFT(8, 2)"
  },
  {
    "name": "BITXOR",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get a bitwise 'Exclusive Or' of two numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/bitxor-function",
    "note": "",
    "syntax": "BITXOR(number1, number2)",
    "example": "=BITXOR(12, 10)"
  },
  {
    "name": "BYCOL",
    "category": "Logical",
    "version": "2024",
    "summary": "Apply a LAMBDA to each column and returns an array of the results.",
    "url": "https://support.microsoft.com/en-us/excel/functions/bycol-function",
    "note": "",
    "syntax": "BYCOL(array, lambda)",
    "example": "=BYCOL(A2:C5, LAMBDA(values, SUM(values)))"
  },
  {
    "name": "BYROW",
    "category": "Logical",
    "version": "2024",
    "summary": "Apply a LAMBDA to each row and returns an array of the results.",
    "url": "https://support.microsoft.com/en-us/excel/functions/byrow-function",
    "note": "",
    "syntax": "BYROW(array, lambda)",
    "example": "=BYROW(A2:C5, LAMBDA(values, SUM(values)))"
  },
  {
    "name": "CALL",
    "category": "Add-in and Automation",
    "version": "",
    "summary": "Calls a procedure in a dynamic link library or code resource.",
    "url": "https://support.microsoft.com/en-us/excel/functions/call-function",
    "note": "",
    "syntax": "CALL(register_id, [argument1], …)",
    "example": ""
  },
  {
    "name": "CEILING",
    "category": "Compatibility",
    "version": "",
    "summary": "Round a number to the nearest integer or to the nearest multiple of significance.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ceiling-function",
    "note": "",
    "syntax": "CEILING(number, significance)",
    "example": "=CEILING(17, 5)"
  },
  {
    "name": "CEILING.MATH",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Round a number up, to the nearest integer or to the nearest multiple of significance.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ceiling-math-function",
    "note": "",
    "syntax": "CEILING.MATH(number, [significance], [mode])",
    "example": "=CEILING.MATH(17, 5)"
  },
  {
    "name": "CEILING.PRECISE",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Round a number the nearest integer or to the nearest multiple of significance.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ceiling-precise-function",
    "note": "",
    "syntax": "CEILING.PRECISE(number, significance)",
    "example": "=CEILING.PRECISE(17, 5)"
  },
  {
    "name": "CELL",
    "category": "Information",
    "version": "",
    "summary": "Get information about the formatting, location, or contents of a cell.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cell-function",
    "note": "Unavailable in Excel for the web.",
    "syntax": "CELL(info_type, [reference])",
    "example": "=CELL(\"address\", B12)"
  },
  {
    "name": "CHAR",
    "category": "Text",
    "version": "",
    "summary": "Get the character specified by the code number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/char-function",
    "note": "",
    "syntax": "CHAR(number)",
    "example": "=CHAR(65)"
  },
  {
    "name": "CHIDIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the one-tailed probability of the chi-squared distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/chidist-function",
    "note": "",
    "syntax": "CHIDIST(x, deg_freedom)",
    "example": "=CHIDIST(8, 4)"
  },
  {
    "name": "CHIINV",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the inverse of the one-tailed probability of the chi-squared distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/chiinv-function",
    "note": "",
    "syntax": "CHIINV(probability, deg_freedom)",
    "example": "=CHIINV(0.05, 4)"
  },
  {
    "name": "CHISQ.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the cumulative beta probability density function.",
    "url": "https://support.microsoft.com/en-us/excel/functions/chisq-dist-function",
    "note": "",
    "syntax": "CHISQ.DIST(x, deg_freedom, cumulative)",
    "example": "=CHISQ.DIST(8, 4, TRUE)"
  },
  {
    "name": "CHISQ.DIST.RT",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the one-tailed probability of the chi-squared distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/chisq-dist-rt-function",
    "note": "",
    "syntax": "CHISQ.DIST.RT(x, deg_freedom)",
    "example": "=CHISQ.DIST.RT(8, 4)"
  },
  {
    "name": "CHISQ.INV",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the cumulative beta probability density function.",
    "url": "https://support.microsoft.com/en-us/excel/functions/chisq-inv-function",
    "note": "",
    "syntax": "CHISQ.INV(probability, deg_freedom)",
    "example": "=CHISQ.INV(0.05, 4)"
  },
  {
    "name": "CHISQ.INV.RT",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the inverse of the one-tailed probability of the chi-squared distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/chisq-inv-rt-function",
    "note": "",
    "syntax": "CHISQ.INV.RT(probability, deg_freedom)",
    "example": "=CHISQ.INV.RT(0.05, 4)"
  },
  {
    "name": "CHISQ.TEST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the test for independence.",
    "url": "https://support.microsoft.com/en-us/excel/functions/chisq-test-function",
    "note": "",
    "syntax": "CHISQ.TEST(actual_range, expected_range)",
    "example": "=CHISQ.TEST(B2:C4, E2:F4)"
  },
  {
    "name": "CHITEST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the test for independence.",
    "url": "https://support.microsoft.com/en-us/excel/functions/chitest-function",
    "note": "",
    "syntax": "CHITEST(actual_range, expected_range)",
    "example": "=CHITEST(B2:C4, E2:F4)"
  },
  {
    "name": "CHOOSE",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Pick a value by its one-based position.",
    "url": "https://support.microsoft.com/en-us/excel/functions/choose-function",
    "note": "",
    "syntax": "CHOOSE(index_num, value1, [value2], …)",
    "example": "=CHOOSE(2, \"Red\", \"Blue\")"
  },
  {
    "name": "CHOOSECOLS",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Get the specified columns from an array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/choosecols-function",
    "note": "",
    "syntax": "CHOOSECOLS(array, col_num1, [col_num2], …)",
    "example": "=CHOOSECOLS(A2:D8, 1, 3)"
  },
  {
    "name": "CHOOSEROWS",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Get the specified rows from an array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/chooserows-function",
    "note": "",
    "syntax": "CHOOSEROWS(array, row_num1, [row_num2], …)",
    "example": "=CHOOSEROWS(A2:D8, 1, 3)"
  },
  {
    "name": "CLEAN",
    "category": "Text",
    "version": "",
    "summary": "Remove all nonprintable characters from text.",
    "url": "https://support.microsoft.com/en-us/excel/functions/clean-function",
    "note": "",
    "syntax": "CLEAN(text)",
    "example": "=CLEAN(\"Monthly report\")"
  },
  {
    "name": "CODE",
    "category": "Text",
    "version": "",
    "summary": "Get a numeric code for the first character in a text string.",
    "url": "https://support.microsoft.com/en-us/excel/functions/code-function",
    "note": "",
    "syntax": "CODE(text)",
    "example": "=CODE(\"A\")"
  },
  {
    "name": "COLUMN",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Get the worksheet column number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/column-function",
    "note": "",
    "syntax": "COLUMN([reference])",
    "example": "=COLUMN(D12)"
  },
  {
    "name": "COLUMNS",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Count columns in a reference or array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/columns-function",
    "note": "",
    "syntax": "COLUMNS(array)",
    "example": "=COLUMNS(A2:C10)"
  },
  {
    "name": "COMBIN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the number of combinations for a given number of objects.",
    "url": "https://support.microsoft.com/en-us/excel/functions/combin-function",
    "note": "",
    "syntax": "COMBIN(number, number_chosen)",
    "example": "=COMBIN(8, 3)"
  },
  {
    "name": "COMBINA",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get the number of combinations with repetitions for a given number of items.",
    "url": "https://support.microsoft.com/en-us/excel/functions/combina-function",
    "note": "",
    "syntax": "COMBINA(number, number_chosen)",
    "example": "=COMBINA(8, 3)"
  },
  {
    "name": "COMPLEX",
    "category": "Engineering",
    "version": "",
    "summary": "Convert real and imaginary coefficients into a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/complex-function",
    "note": "",
    "syntax": "COMPLEX(real_num, i_num, [suffix])",
    "example": "=COMPLEX(3, -4)"
  },
  {
    "name": "CONCAT",
    "category": "Text",
    "version": "2019",
    "summary": "Join text values in order.",
    "url": "https://support.microsoft.com/en-us/excel/functions/concat-function",
    "note": "",
    "syntax": "CONCAT(text1, [text2], …)",
    "example": "=CONCAT(\"North\", \" \", \"Region\")"
  },
  {
    "name": "CONCATENATE",
    "category": "Text",
    "version": "",
    "summary": "Join text values using the legacy text function.",
    "url": "https://support.microsoft.com/en-us/excel/functions/concatenate-function",
    "note": "",
    "syntax": "CONCATENATE(text1, [text2], …)",
    "example": "=CONCATENATE(\"North\", \" \", \"Region\")"
  },
  {
    "name": "CONFIDENCE",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the confidence interval for a population mean.",
    "url": "https://support.microsoft.com/en-us/excel/functions/confidence-function",
    "note": "",
    "syntax": "CONFIDENCE(alpha, standard_dev, size)",
    "example": "=CONFIDENCE(0.05, 12, 30)"
  },
  {
    "name": "CONFIDENCE.NORM",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the confidence interval for a population mean.",
    "url": "https://support.microsoft.com/en-us/excel/functions/confidence-norm-function",
    "note": "",
    "syntax": "CONFIDENCE.NORM(alpha, standard_dev, size)",
    "example": "=CONFIDENCE.NORM(0.05, 12, 30)"
  },
  {
    "name": "CONFIDENCE.T",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the confidence interval for a population mean, using a Student's t distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/confidence-t-function",
    "note": "",
    "syntax": "CONFIDENCE.T(alpha, standard_dev, size)",
    "example": "=CONFIDENCE.T(0.05, 12, 30)"
  },
  {
    "name": "CONVERT",
    "category": "Engineering",
    "version": "",
    "summary": "Convert a number from one measurement system to another.",
    "url": "https://support.microsoft.com/en-us/excel/functions/convert-function",
    "note": "",
    "syntax": "CONVERT(number, from_unit, to_unit)",
    "example": "=CONVERT(5, \"mi\", \"km\")"
  },
  {
    "name": "CORREL",
    "category": "Statistical",
    "version": "",
    "summary": "Measure the linear relationship between two sets of values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/correl-function",
    "note": "",
    "syntax": "CORREL(array1, array2)",
    "example": "=CORREL(A2:A20, B2:B20)"
  },
  {
    "name": "COS",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Find the cosine of an angle in radians.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cos-function",
    "note": "",
    "syntax": "COS(number)",
    "example": "=COS(0.5)"
  },
  {
    "name": "COSH",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the hyperbolic cosine of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cosh-function",
    "note": "",
    "syntax": "COSH(number)",
    "example": "=COSH(0.8)"
  },
  {
    "name": "COT",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get the hyperbolic cosine of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cot-function",
    "note": "",
    "syntax": "COT(number)",
    "example": "=COT(0.8)"
  },
  {
    "name": "COTH",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get the cotangent of an angle.",
    "url": "https://support.microsoft.com/en-us/excel/functions/coth-function",
    "note": "",
    "syntax": "COTH(number)",
    "example": "=COTH(0.8)"
  },
  {
    "name": "COUNT",
    "category": "Statistical",
    "version": "",
    "summary": "Count numeric values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/count-function",
    "note": "",
    "syntax": "COUNT(value1, [value2], …)",
    "example": "=COUNT(12, \"North\", 8)"
  },
  {
    "name": "COUNTA",
    "category": "Statistical",
    "version": "",
    "summary": "Count values including text and logical values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/counta-function",
    "note": "",
    "syntax": "COUNTA(value1, [value2], …)",
    "example": "=COUNTA(12, \"North\", 8)"
  },
  {
    "name": "COUNTBLANK",
    "category": "Statistical",
    "version": "",
    "summary": "Count blank cells in a range.",
    "url": "https://support.microsoft.com/en-us/excel/functions/countblank-function",
    "note": "",
    "syntax": "COUNTBLANK(range)",
    "example": "=COUNTBLANK(B2:B30)"
  },
  {
    "name": "COUNTIF",
    "category": "Statistical",
    "version": "",
    "summary": "Count cells that meet one condition.",
    "url": "https://support.microsoft.com/en-us/excel/get-started/use-the-countif-function-in-microsoft-excel",
    "note": "",
    "syntax": "COUNTIF(range, criteria)",
    "example": "=COUNTIF(B2:B15, \">=10\")"
  },
  {
    "name": "COUNTIFS",
    "category": "Statistical",
    "version": "",
    "summary": "Count rows that meet several conditions.",
    "url": "https://support.microsoft.com/en-us/excel/functions/countifs-function",
    "note": "",
    "syntax": "COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], …)",
    "example": "=COUNTIFS(A2:A10, \"North\", B2:B10, \">10\")"
  },
  {
    "name": "COUPDAYBS",
    "category": "Financial",
    "version": "",
    "summary": "Get the number of days from the beginning of the coupon period to the settlement date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/coupdaybs-function",
    "note": "",
    "syntax": "COUPDAYBS(settlement, maturity, frequency, [basis])",
    "example": "=COUPDAYBS(DATE(2025,3,1), DATE(2028,12,31), 2)"
  },
  {
    "name": "COUPDAYS",
    "category": "Financial",
    "version": "",
    "summary": "Get the number of days in the coupon period that contains the settlement date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/coupdays-function",
    "note": "",
    "syntax": "COUPDAYS(settlement, maturity, frequency, [basis])",
    "example": "=COUPDAYS(DATE(2025,3,1), DATE(2028,12,31), 2)"
  },
  {
    "name": "COUPDAYSNC",
    "category": "Financial",
    "version": "",
    "summary": "Get the number of days from the settlement date to the next coupon date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/coupdaysnc-function",
    "note": "",
    "syntax": "COUPDAYSNC(settlement, maturity, frequency, [basis])",
    "example": "=COUPDAYSNC(DATE(2025,3,1), DATE(2028,12,31), 2)"
  },
  {
    "name": "COUPNCD",
    "category": "Financial",
    "version": "",
    "summary": "Get the next coupon date after the settlement date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/coupncd-function",
    "note": "",
    "syntax": "COUPNCD(settlement, maturity, frequency, [basis])",
    "example": "=COUPNCD(DATE(2025,3,1), DATE(2028,12,31), 2)"
  },
  {
    "name": "COUPNUM",
    "category": "Financial",
    "version": "",
    "summary": "Get the number of coupons payable between the settlement date and maturity date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/coupnum-function",
    "note": "",
    "syntax": "COUPNUM(settlement, maturity, frequency, [basis])",
    "example": "=COUPNUM(DATE(2025,3,1), DATE(2028,12,31), 2)"
  },
  {
    "name": "COUPPCD",
    "category": "Financial",
    "version": "",
    "summary": "Get the previous coupon date before the settlement date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/couppcd-function",
    "note": "",
    "syntax": "COUPPCD(settlement, maturity, frequency, [basis])",
    "example": "=COUPPCD(DATE(2025,3,1), DATE(2028,12,31), 2)"
  },
  {
    "name": "COVAR",
    "category": "Compatibility",
    "version": "",
    "summary": "Get covariance, the average of the products of paired deviations.",
    "url": "https://support.microsoft.com/en-us/excel/functions/covar-function",
    "note": "",
    "syntax": "COVAR(array1, array2)",
    "example": "=COVAR(A2:A10, B2:B10)"
  },
  {
    "name": "COVARIANCE.P",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get covariance, the average of the products of paired deviations.",
    "url": "https://support.microsoft.com/en-us/excel/functions/covariance-p-function",
    "note": "",
    "syntax": "COVARIANCE.P(array1, array2)",
    "example": "=COVARIANCE.P(A2:A10, B2:B10)"
  },
  {
    "name": "COVARIANCE.S",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the sample covariance, the average of the products deviations for each data point pair in two data sets.",
    "url": "https://support.microsoft.com/en-us/excel/functions/covariance-s-function",
    "note": "",
    "syntax": "COVARIANCE.S(array1, array2)",
    "example": "=COVARIANCE.S(A2:A10, B2:B10)"
  },
  {
    "name": "CRITBINOM",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the smallest value for which the cumulative binomial distribution is less than or equal to a criterion value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/critbinom-function",
    "note": "",
    "syntax": "CRITBINOM(trials, probability_s, alpha)",
    "example": "=CRITBINOM(10, 0.4, 0.8)"
  },
  {
    "name": "CSC",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get the cosecant of an angle.",
    "url": "https://support.microsoft.com/en-us/excel/functions/csc-function",
    "note": "",
    "syntax": "CSC(number)",
    "example": "=CSC(0.8)"
  },
  {
    "name": "CSCH",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get the hyperbolic cosecant of an angle.",
    "url": "https://support.microsoft.com/en-us/excel/functions/csch-function",
    "note": "",
    "syntax": "CSCH(number)",
    "example": "=CSCH(0.8)"
  },
  {
    "name": "CUBEKPIMEMBER",
    "category": "Cube",
    "version": "",
    "summary": "Get a key performance indicator (KPI) name, property, and measure, and displays the name and property in the cell.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cubekpimember-function",
    "note": "",
    "syntax": "CUBEKPIMEMBER(connection, kpi_name, kpi_property, [caption])",
    "example": ""
  },
  {
    "name": "CUBEMEMBER",
    "category": "Cube",
    "version": "",
    "summary": "Get a member or tuple in a cube hierarchy.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cubemember-function",
    "note": "",
    "syntax": "CUBEMEMBER(connection, member_expression, [caption])",
    "example": ""
  },
  {
    "name": "CUBEMEMBERPROPERTY",
    "category": "Cube",
    "version": "",
    "summary": "Get the value of a member property in the cube.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cubememberproperty-function",
    "note": "",
    "syntax": "CUBEMEMBERPROPERTY(connection, member_expression, property)",
    "example": ""
  },
  {
    "name": "CUBERANKEDMEMBER",
    "category": "Cube",
    "version": "",
    "summary": "Get the nth, or ranked, member in a set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cuberankedmember-function",
    "note": "",
    "syntax": "CUBERANKEDMEMBER(connection, set_expression, rank, [caption])",
    "example": ""
  },
  {
    "name": "CUBESET",
    "category": "Cube",
    "version": "",
    "summary": "Defines a calculated set of members or tuples by sending a set expression to the cube on the server, which creates the set, and then returns that set to Microsoft Office Excel.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cubeset-function",
    "note": "",
    "syntax": "CUBESET(connection, set_expression, [caption], [sort_order], [sort_by])",
    "example": ""
  },
  {
    "name": "CUBESETCOUNT",
    "category": "Cube",
    "version": "",
    "summary": "Get the number of items in a set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cubesetcount-function",
    "note": "",
    "syntax": "CUBESETCOUNT(set)",
    "example": ""
  },
  {
    "name": "CUBEVALUE",
    "category": "Cube",
    "version": "",
    "summary": "Get an aggregated value from a cube.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cubevalue-function",
    "note": "",
    "syntax": "CUBEVALUE(connection, [member_expression1], [member_expression2], …)",
    "example": ""
  },
  {
    "name": "CUMIPMT",
    "category": "Financial",
    "version": "",
    "summary": "Get the cumulative interest paid between two periods.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cumipmt-function",
    "note": "",
    "syntax": "CUMIPMT(rate, nper, pv, start_period, end_period, type)",
    "example": "=CUMIPMT(5%/12, 60, 10000, 1, 12, 0)"
  },
  {
    "name": "CUMPRINC",
    "category": "Financial",
    "version": "",
    "summary": "Get the cumulative principal paid on a loan between two periods.",
    "url": "https://support.microsoft.com/en-us/excel/functions/cumprinc-function",
    "note": "",
    "syntax": "CUMPRINC(rate, nper, pv, start_period, end_period, type)",
    "example": "=CUMPRINC(5%/12, 60, 10000, 1, 12, 0)"
  },
  {
    "name": "DATE",
    "category": "Date and time",
    "version": "",
    "summary": "Build an Excel date from numeric parts.",
    "url": "https://support.microsoft.com/en-us/excel/functions/date-function",
    "note": "",
    "syntax": "DATE(year, month, day)",
    "example": "=DATE(2026, 11, 25)"
  },
  {
    "name": "DATEDIF",
    "category": "Date and time",
    "version": "",
    "summary": "Calculate the number of days, months, or years between two dates.",
    "url": "https://support.microsoft.com/en-us/excel/functions/datedif-function",
    "note": "",
    "syntax": "DATEDIF(start_date, end_date, unit)",
    "example": "=DATEDIF(DATE(2020, 1, 1), DATE(2026, 1, 1), \"Y\")"
  },
  {
    "name": "DATEVALUE",
    "category": "Date and time",
    "version": "",
    "summary": "Convert a date in the form of text to a serial number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/datevalue-function",
    "note": "",
    "syntax": "DATEVALUE(date_text)",
    "example": "=DATEVALUE(\"2026-11-25\")"
  },
  {
    "name": "DAVERAGE",
    "category": "Database",
    "version": "",
    "summary": "Get the average of selected database entries.",
    "url": "https://support.microsoft.com/en-us/excel/functions/daverage-function",
    "note": "",
    "syntax": "DAVERAGE(database, field, criteria)",
    "example": "=DAVERAGE(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DAY",
    "category": "Date and time",
    "version": "",
    "summary": "Extract the day of the month from an Excel date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/day-function",
    "note": "",
    "syntax": "DAY(serial_number)",
    "example": "=DAY(DATE(2026,11,25))"
  },
  {
    "name": "DAYS",
    "category": "Date and time",
    "version": "2013",
    "summary": "Find the number of days between two dates.",
    "url": "https://support.microsoft.com/en-us/excel/functions/days-function",
    "note": "",
    "syntax": "DAYS(end_date, start_date)",
    "example": "=DAYS(DATE(2026,12,1), DATE(2026,11,25))"
  },
  {
    "name": "DAYS360",
    "category": "Date and time",
    "version": "",
    "summary": "Calculate the number of days between two dates based on a 360-day year.",
    "url": "https://support.microsoft.com/en-us/excel/functions/days360-function",
    "note": "",
    "syntax": "DAYS360(start_date, end_date, [method])",
    "example": "=DAYS360(DATE(2026, 1, 1), DATE(2026, 5, 1))"
  },
  {
    "name": "DB",
    "category": "Financial",
    "version": "",
    "summary": "Get the depreciation of an asset for a specified period by using the fixed-declining balance method.",
    "url": "https://support.microsoft.com/en-us/excel/functions/db-function",
    "note": "",
    "syntax": "DB(cost, salvage, life, period, [month])",
    "example": "=DB(5000, 500, 5, 2)"
  },
  {
    "name": "DBCS",
    "category": "Text",
    "version": "2013",
    "summary": "Change half-width (single-byte) English letters or katakana within a character string to full-width (double-byte) characters.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dbcs-function",
    "note": "",
    "syntax": "DBCS(text)",
    "example": "=DBCS(\"ABC\")"
  },
  {
    "name": "DCOUNT",
    "category": "Database",
    "version": "",
    "summary": "Count the cells that contain numbers in a database.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dcount-function",
    "note": "",
    "syntax": "DCOUNT(database, field, criteria)",
    "example": "=DCOUNT(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DCOUNTA",
    "category": "Database",
    "version": "",
    "summary": "Count nonblank cells in a database.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dcounta-function",
    "note": "",
    "syntax": "DCOUNTA(database, field, criteria)",
    "example": "=DCOUNTA(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DDB",
    "category": "Financial",
    "version": "",
    "summary": "Get the depreciation of an asset for a specified period by using the double-declining balance method or some other method that you specify.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ddb-function",
    "note": "",
    "syntax": "DDB(cost, salvage, life, period, [factor])",
    "example": "=DDB(5000, 500, 5, 2)"
  },
  {
    "name": "DEC2BIN",
    "category": "Engineering",
    "version": "",
    "summary": "Convert a decimal number to binary.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dec2bin-function",
    "note": "",
    "syntax": "DEC2BIN(number, [places])",
    "example": "=DEC2BIN(25)"
  },
  {
    "name": "DEC2HEX",
    "category": "Engineering",
    "version": "",
    "summary": "Convert a decimal number to hexadecimal.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dec2hex-function",
    "note": "",
    "syntax": "DEC2HEX(number, [places])",
    "example": "=DEC2HEX(25)"
  },
  {
    "name": "DEC2OCT",
    "category": "Engineering",
    "version": "",
    "summary": "Convert a decimal number to octal.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dec2oct-function",
    "note": "",
    "syntax": "DEC2OCT(number, [places])",
    "example": "=DEC2OCT(25)"
  },
  {
    "name": "DECIMAL",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Convert a text representation of a number in a given base into a decimal number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/decimal-function",
    "note": "",
    "syntax": "DECIMAL(text, radix)",
    "example": "=DECIMAL(\"1F\", 16)"
  },
  {
    "name": "DEGREES",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Convert radians to degrees.",
    "url": "https://support.microsoft.com/en-us/excel/functions/degrees-function",
    "note": "",
    "syntax": "DEGREES(angle)",
    "example": "=DEGREES(3.14159265358979)"
  },
  {
    "name": "DELTA",
    "category": "Engineering",
    "version": "",
    "summary": "Test whether two values are equal.",
    "url": "https://support.microsoft.com/en-us/excel/functions/delta-function",
    "note": "",
    "syntax": "DELTA(number1, [number2])",
    "example": "=DELTA(4, 4)"
  },
  {
    "name": "DETECTLANGUAGE",
    "category": "Text",
    "version": "Microsoft 365",
    "summary": "Identifie the language of a specified text.",
    "url": "https://support.microsoft.com/en-us/excel/functions/detectlanguage-function",
    "note": "",
    "syntax": "DETECTLANGUAGE(text)",
    "example": "=DETECTLANGUAGE(\"Bonjour\")"
  },
  {
    "name": "DEVSQ",
    "category": "Statistical",
    "version": "",
    "summary": "Get the sum of squares of deviations.",
    "url": "https://support.microsoft.com/en-us/excel/functions/devsq-function",
    "note": "",
    "syntax": "DEVSQ(number1, [number2], …)",
    "example": "=DEVSQ(8, 10, 12)"
  },
  {
    "name": "DGET",
    "category": "Database",
    "version": "",
    "summary": "Extract from a database a single record that matches the specified criteria.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dget-function",
    "note": "",
    "syntax": "DGET(database, field, criteria)",
    "example": "=DGET(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DISC",
    "category": "Financial",
    "version": "",
    "summary": "Get the discount rate for a security.",
    "url": "https://support.microsoft.com/en-us/excel/functions/disc-function",
    "note": "",
    "syntax": "DISC(settlement, maturity, pr, redemption, [basis])",
    "example": "=DISC(DATE(2026, 1, 1), DATE(2026, 7, 1), 97, 100)"
  },
  {
    "name": "DMAX",
    "category": "Database",
    "version": "",
    "summary": "Get the maximum value from selected database entries.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dmax-function",
    "note": "",
    "syntax": "DMAX(database, field, criteria)",
    "example": "=DMAX(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DMIN",
    "category": "Database",
    "version": "",
    "summary": "Get the minimum value from selected database entries.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dmin-function",
    "note": "",
    "syntax": "DMIN(database, field, criteria)",
    "example": "=DMIN(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DOLLAR",
    "category": "Text",
    "version": "",
    "summary": "Convert a number to text, using the $ (dollar) currency format.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dollar-function",
    "note": "",
    "syntax": "DOLLAR(number, [decimals])",
    "example": "=DOLLAR(1234.567, 2)"
  },
  {
    "name": "DOLLARDE",
    "category": "Financial",
    "version": "",
    "summary": "Convert a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dollarde-function",
    "note": "",
    "syntax": "DOLLARDE(fractional_dollar, fraction)",
    "example": "=DOLLARDE(1.02, 16)"
  },
  {
    "name": "DOLLARFR",
    "category": "Financial",
    "version": "",
    "summary": "Convert a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dollarfr-function",
    "note": "",
    "syntax": "DOLLARFR(decimal_dollar, fraction)",
    "example": "=DOLLARFR(1.125, 16)"
  },
  {
    "name": "DPRODUCT",
    "category": "Database",
    "version": "",
    "summary": "Multiplie the values in a particular field of records that match the criteria in a database.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dproduct-function",
    "note": "",
    "syntax": "DPRODUCT(database, field, criteria)",
    "example": "=DPRODUCT(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DROP",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Remove rows or columns from either edge of an array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/drop-function",
    "note": "",
    "syntax": "DROP(array, rows, [columns])",
    "example": "=DROP(A2:C20, 2)"
  },
  {
    "name": "DSTDEV",
    "category": "Database",
    "version": "",
    "summary": "Estimate the standard deviation based on a sample of selected database entries.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dstdev-function",
    "note": "",
    "syntax": "DSTDEV(database, field, criteria)",
    "example": "=DSTDEV(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DSTDEVP",
    "category": "Database",
    "version": "",
    "summary": "Calculate the standard deviation based on the entire population of selected database entries.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dstdevp-function",
    "note": "",
    "syntax": "DSTDEVP(database, field, criteria)",
    "example": "=DSTDEVP(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DSUM",
    "category": "Database",
    "version": "",
    "summary": "Add the numbers in the field column of records in the database that match the criteria.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dsum-function",
    "note": "",
    "syntax": "DSUM(database, field, criteria)",
    "example": "=DSUM(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DURATION",
    "category": "Financial",
    "version": "",
    "summary": "Get the annual duration of a security with periodic interest payments.",
    "url": "https://support.microsoft.com/en-us/excel/functions/duration-function",
    "note": "",
    "syntax": "DURATION(settlement, maturity, coupon, yld, frequency, [basis])",
    "example": "=DURATION(DATE(2025,3,1), DATE(2028,12,31), 5%, 4%, 2)"
  },
  {
    "name": "DVAR",
    "category": "Database",
    "version": "",
    "summary": "Estimate variance based on a sample from selected database entries.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dvar-function",
    "note": "",
    "syntax": "DVAR(database, field, criteria)",
    "example": "=DVAR(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "DVARP",
    "category": "Database",
    "version": "",
    "summary": "Calculate variance based on the entire population of selected database entries.",
    "url": "https://support.microsoft.com/en-us/excel/functions/dvarp-function",
    "note": "",
    "syntax": "DVARP(database, field, criteria)",
    "example": "=DVARP(A1:D20, \"Sales\", F1:F2)"
  },
  {
    "name": "EDATE",
    "category": "Date and time",
    "version": "",
    "summary": "Move a date forward or backward by whole months.",
    "url": "https://support.microsoft.com/en-us/excel/functions/edate-function",
    "note": "",
    "syntax": "EDATE(start_date, months)",
    "example": "=EDATE(A2, 3)"
  },
  {
    "name": "EFFECT",
    "category": "Financial",
    "version": "",
    "summary": "Get the effective annual interest rate.",
    "url": "https://support.microsoft.com/en-us/excel/functions/effect-function",
    "note": "",
    "syntax": "EFFECT(nominal_rate, npery)",
    "example": "=EFFECT(0.06, 12)"
  },
  {
    "name": "ENCODEURL",
    "category": "Web",
    "version": "2013",
    "summary": "Get a URL-encoded string.",
    "url": "https://support.microsoft.com/en-us/excel/functions/encodeurl-function",
    "note": "Unavailable in Excel for the web.",
    "syntax": "ENCODEURL(text)",
    "example": "=ENCODEURL(\"North & South\")"
  },
  {
    "name": "EOMONTH",
    "category": "Date and time",
    "version": "",
    "summary": "Find the last day of a month relative to a starting date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/eomonth-function",
    "note": "",
    "syntax": "EOMONTH(start_date, months)",
    "example": "=EOMONTH(A2, 1)"
  },
  {
    "name": "ERF",
    "category": "Engineering",
    "version": "",
    "summary": "Get the error function.",
    "url": "https://support.microsoft.com/en-us/excel/functions/erf-function",
    "note": "",
    "syntax": "ERF(lower_limit, [upper_limit])",
    "example": "=ERF(0.5)"
  },
  {
    "name": "ERF.PRECISE",
    "category": "Engineering",
    "version": "2010",
    "summary": "Get the error function.",
    "url": "https://support.microsoft.com/en-us/excel/functions/erf-precise-function",
    "note": "",
    "syntax": "ERF.PRECISE(x)",
    "example": "=ERF.PRECISE(0.5)"
  },
  {
    "name": "ERFC",
    "category": "Engineering",
    "version": "",
    "summary": "Get the complementary error function.",
    "url": "https://support.microsoft.com/en-us/excel/functions/erfc-function",
    "note": "",
    "syntax": "ERFC(x)",
    "example": "=ERFC(0.5)"
  },
  {
    "name": "ERFC.PRECISE",
    "category": "Engineering",
    "version": "2010",
    "summary": "Get the complementary ERF function integrated between x and infinity.",
    "url": "https://support.microsoft.com/en-us/excel/functions/erfc-precise-function",
    "note": "",
    "syntax": "ERFC.PRECISE(x)",
    "example": "=ERFC.PRECISE(0.5)"
  },
  {
    "name": "ERROR.TYPE",
    "category": "Information",
    "version": "",
    "summary": "Get a number corresponding to an error type.",
    "url": "https://support.microsoft.com/en-us/excel/functions/error-type-function",
    "note": "",
    "syntax": "ERROR.TYPE(error_val)",
    "example": "=ERROR.TYPE(NA())"
  },
  {
    "name": "EUROCONVERT",
    "category": "Add-in and Automation",
    "version": "",
    "summary": "Convert a number to euros, converts a number from euros to a euro member currency, or converts a number from one euro member currency to another by using the euro as an intermediary (triangulation).",
    "url": "https://support.microsoft.com/en-us/excel/functions/euroconvert-function",
    "note": "",
    "syntax": "EUROCONVERT(number, source, target, [full_precision], [triangulation_precision])",
    "example": "=EUROCONVERT(100, \"DEM\", \"EUR\")"
  },
  {
    "name": "EVEN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Round a number up to the nearest even integer.",
    "url": "https://support.microsoft.com/en-us/excel/functions/even-function",
    "note": "",
    "syntax": "EVEN(number)",
    "example": "=EVEN(-3.2)"
  },
  {
    "name": "EXACT",
    "category": "Text",
    "version": "",
    "summary": "Compare text with case sensitivity.",
    "url": "https://support.microsoft.com/en-us/excel/functions/exact-function",
    "note": "",
    "syntax": "EXACT(text1, text2)",
    "example": "=EXACT(\"Excel\", \"excel\")"
  },
  {
    "name": "EXP",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Raise e to the specified power.",
    "url": "https://support.microsoft.com/en-us/excel/functions/exp-function",
    "note": "",
    "syntax": "EXP(number)",
    "example": "=EXP(2)"
  },
  {
    "name": "EXPAND",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Expands or pads an array to specified row and column dimensions.",
    "url": "https://support.microsoft.com/en-us/excel/functions/expand-function",
    "note": "",
    "syntax": "EXPAND(array, rows, [columns], [pad_with])",
    "example": "=EXPAND(A2:B5, 6, 3, 0)"
  },
  {
    "name": "EXPON.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the exponential distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/expon-dist-function",
    "note": "",
    "syntax": "EXPON.DIST(x, lambda, cumulative)",
    "example": "=EXPON.DIST(1, 0.5, TRUE)"
  },
  {
    "name": "EXPONDIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the exponential distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/expondist-function",
    "note": "",
    "syntax": "EXPONDIST(x, lambda, cumulative)",
    "example": "=EXPONDIST(1, 0.5, TRUE)"
  },
  {
    "name": "F.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the F probability distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/f-dist-function",
    "note": "",
    "syntax": "F.DIST(x, deg_freedom1, deg_freedom2, cumulative)",
    "example": "=F.DIST(2, 4, 8, TRUE)"
  },
  {
    "name": "F.DIST.RT",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the F probability distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/f-dist-rt-function",
    "note": "",
    "syntax": "F.DIST.RT(x, deg_freedom1, deg_freedom2)",
    "example": "=F.DIST.RT(2, 4, 8)"
  },
  {
    "name": "F.INV",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the inverse of the F probability distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/f-inv-function",
    "note": "",
    "syntax": "F.INV(probability, deg_freedom1, deg_freedom2)",
    "example": "=F.INV(0.05, 4, 8)"
  },
  {
    "name": "F.INV.RT",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the inverse of the F probability distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/f-inv-rt-function",
    "note": "",
    "syntax": "F.INV.RT(probability, deg_freedom1, deg_freedom2)",
    "example": "=F.INV.RT(0.05, 4, 8)"
  },
  {
    "name": "F.TEST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the result of an F-test.",
    "url": "https://support.microsoft.com/en-us/excel/functions/f-test-function",
    "note": "",
    "syntax": "F.TEST(array1, array2)",
    "example": "=F.TEST(A2:A10, B2:B10)"
  },
  {
    "name": "FACT",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the factorial of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/fact-function",
    "note": "",
    "syntax": "FACT(number)",
    "example": "=FACT(6)"
  },
  {
    "name": "FACTDOUBLE",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the double factorial of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/factdouble-function",
    "note": "",
    "syntax": "FACTDOUBLE(number)",
    "example": "=FACTDOUBLE(6)"
  },
  {
    "name": "FALSE",
    "category": "Logical",
    "version": "",
    "summary": "Get the logical value FALSE.",
    "url": "https://support.microsoft.com/en-us/excel/functions/false-function",
    "note": "",
    "syntax": "FALSE()",
    "example": "=FALSE()"
  },
  {
    "name": "FDIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the F probability distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/fdist-function",
    "note": "",
    "syntax": "FDIST(x, deg_freedom1, deg_freedom2)",
    "example": "=FDIST(2, 4, 8)"
  },
  {
    "name": "FILTER",
    "category": "Lookup and reference",
    "version": "2021",
    "summary": "Return the rows or columns that meet a condition.",
    "url": "https://support.microsoft.com/en-us/excel/functions/filter-function",
    "note": "",
    "syntax": "FILTER(array, include, [if_empty])",
    "example": "=FILTER(A2:C20, B2:B20=\"North\", \"No rows\")"
  },
  {
    "name": "FILTERXML",
    "category": "Web",
    "version": "2013",
    "summary": "Get specific data from the XML content by using the specified XPath.",
    "url": "https://support.microsoft.com/en-us/excel/functions/filterxml-function",
    "note": "Unavailable in Excel for the web.",
    "syntax": "FILTERXML(xml, xpath)",
    "example": "=FILTERXML(\"<root><name>Ada</name></root>\", \"//name\")"
  },
  {
    "name": "FIND",
    "category": "Text",
    "version": "",
    "summary": "Find a substring's position using case-sensitive matching.",
    "url": "https://support.microsoft.com/en-us/topic/c7912941-af2a-4bdf-a553-d0d89b0a0628",
    "note": "",
    "syntax": "FIND(find_text, within_text, [start_num])",
    "example": "=FIND(\"b\", \"abc\")"
  },
  {
    "name": "FINDB",
    "category": "Text",
    "version": "",
    "summary": "Find one text value within another (case-sensitive).",
    "url": "https://support.microsoft.com/en-us/topic/c7912941-af2a-4bdf-a553-d0d89b0a0628",
    "note": "",
    "syntax": "FINDB(find_text, within_text, [start_num])",
    "example": "=FINDB(\"B\", \"ABC\")"
  },
  {
    "name": "FINV",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the inverse of the F probability distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/finv-function",
    "note": "",
    "syntax": "FINV(probability, deg_freedom1, deg_freedom2)",
    "example": "=FINV(0.05, 4, 8)"
  },
  {
    "name": "FISHER",
    "category": "Statistical",
    "version": "",
    "summary": "Get the Fisher transformation.",
    "url": "https://support.microsoft.com/en-us/excel/functions/fisher-function",
    "note": "",
    "syntax": "FISHER(number)",
    "example": "=FISHER(0.5)"
  },
  {
    "name": "FISHERINV",
    "category": "Statistical",
    "version": "",
    "summary": "Get the inverse of the Fisher transformation.",
    "url": "https://support.microsoft.com/en-us/excel/functions/fisherinv-function",
    "note": "",
    "syntax": "FISHERINV(number)",
    "example": "=FISHERINV(0.5)"
  },
  {
    "name": "FIXED",
    "category": "Text",
    "version": "",
    "summary": "Formats a number as text with a fixed number of decimals.",
    "url": "https://support.microsoft.com/en-us/excel/functions/fixed-function",
    "note": "",
    "syntax": "FIXED(number, [decimals], [no_commas])",
    "example": "=FIXED(1234.567, 2, TRUE)"
  },
  {
    "name": "FLOOR",
    "category": "Compatibility",
    "version": "",
    "summary": "Round a number down, toward zero.",
    "url": "https://support.microsoft.com/en-us/excel/functions/floor-function",
    "note": "",
    "syntax": "FLOOR(number, significance)",
    "example": "=FLOOR(17, 5)"
  },
  {
    "name": "FLOOR.MATH",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Round a number down, to the nearest integer or to the nearest multiple of significance.",
    "url": "https://support.microsoft.com/en-us/excel/functions/floor-math-function",
    "note": "",
    "syntax": "FLOOR.MATH(number, [significance], [mode])",
    "example": "=FLOOR.MATH(17, 5)"
  },
  {
    "name": "FLOOR.PRECISE",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Round a number the nearest integer or to the nearest multiple of significance.",
    "url": "https://support.microsoft.com/en-us/excel/functions/floor-precise-function",
    "note": "",
    "syntax": "FLOOR.PRECISE(number, significance)",
    "example": "=FLOOR.PRECISE(17, 5)"
  },
  {
    "name": "FORECAST",
    "category": "Statistical",
    "version": "",
    "summary": "Get a value along a linear trend This function has been replaced with FORECAST.LINEAR as part of the new Forecasting, but it's still available for compatibility with earlier versions.",
    "url": "https://support.microsoft.com/en-us/excel/forecast-and-forecast-linear-functions",
    "note": "",
    "syntax": "FORECAST(x, known_y's, known_x's)",
    "example": "=FORECAST(12, B2:B10, A2:A10)"
  },
  {
    "name": "FORECAST.ETS",
    "category": "Statistical",
    "version": "2016",
    "summary": "Get a future value based on existing (historical) values by using the AAA version of the Exponential Smoothing (ETS) algorithm.",
    "url": "https://support.microsoft.com/en-us/excel/forecasting-functions-reference#_forecast.ets",
    "note": "",
    "syntax": "FORECAST.ETS(target_date, values, timeline, [seasonality], [data_completion], [aggregation])",
    "example": "=FORECAST.ETS(A14, B2:B13, A2:A13)"
  },
  {
    "name": "FORECAST.ETS.CONFINT",
    "category": "Statistical",
    "version": "2016",
    "summary": "Get a confidence interval for the forecast value at the specified target date.",
    "url": "https://support.microsoft.com/en-us/excel/forecasting-functions-reference#_forecast.ets.confint",
    "note": "",
    "syntax": "FORECAST.ETS.CONFINT(target_date, values, timeline, [confidence_level], [seasonality], [data_completion], [aggregation])",
    "example": "=FORECAST.ETS.CONFINT(A14, B2:B13, A2:A13, 0.95)"
  },
  {
    "name": "FORECAST.ETS.SEASONALITY",
    "category": "Statistical",
    "version": "2016",
    "summary": "Get the length of the repetitive pattern Excel detects for the specified time series.",
    "url": "https://support.microsoft.com/en-us/excel/forecasting-functions-reference#_forecast.ets.seasonality",
    "note": "",
    "syntax": "FORECAST.ETS.SEASONALITY(values, timeline, [data_completion], [aggregation])",
    "example": "=FORECAST.ETS.SEASONALITY(B2:B13, A2:A13)"
  },
  {
    "name": "FORECAST.ETS.STAT",
    "category": "Statistical",
    "version": "2016",
    "summary": "Get a statistical value as a result of time series forecasting.",
    "url": "https://support.microsoft.com/en-us/excel/forecasting-functions-reference#_forecast.ets.stat",
    "note": "",
    "syntax": "FORECAST.ETS.STAT(values, timeline, statistic_type, [seasonality], [data_completion], [aggregation])",
    "example": "=FORECAST.ETS.STAT(B2:B13, A2:A13, 1)"
  },
  {
    "name": "FORECAST.LINEAR",
    "category": "Statistical",
    "version": "2016",
    "summary": "Get a future value based on existing values.",
    "url": "https://support.microsoft.com/en-us/excel/forecasting-functions-reference#_forecast.linear",
    "note": "",
    "syntax": "FORECAST.LINEAR(x, known_y's, known_x's)",
    "example": "=FORECAST.LINEAR(12, B2:B10, A2:A10)"
  },
  {
    "name": "FORMULATEXT",
    "category": "Lookup and reference",
    "version": "2013",
    "summary": "Get the formula at the given reference as text.",
    "url": "https://support.microsoft.com/en-us/excel/functions/formulatext-function",
    "note": "",
    "syntax": "FORMULATEXT(reference)",
    "example": "=FORMULATEXT(B2)"
  },
  {
    "name": "FREQUENCY",
    "category": "Statistical",
    "version": "",
    "summary": "Get a frequency distribution as a vertical array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/frequency-function",
    "note": "",
    "syntax": "FREQUENCY(data_array, bins_array)",
    "example": "=FREQUENCY(A2:A30, D2:D6)"
  },
  {
    "name": "FTEST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the result of an F-test.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ftest-function",
    "note": "",
    "syntax": "FTEST(array1, array2)",
    "example": "=FTEST(A2:A10, B2:B10)"
  },
  {
    "name": "FV",
    "category": "Financial",
    "version": "",
    "summary": "Get the future value of an investment.",
    "url": "https://support.microsoft.com/en-us/excel/functions/fv-function",
    "note": "",
    "syntax": "FV(rate, nper, pmt, [pv], [type])",
    "example": "=FV(0.05/12, 60, -150)"
  },
  {
    "name": "FVSCHEDULE",
    "category": "Financial",
    "version": "",
    "summary": "Get the future value of an initial principal after applying a series of compound interest rates.",
    "url": "https://support.microsoft.com/en-us/excel/functions/fvschedule-function",
    "note": "",
    "syntax": "FVSCHEDULE(principal, schedule)",
    "example": "=FVSCHEDULE(1000, {0.04,0.05,0.06})"
  },
  {
    "name": "GAMMA",
    "category": "Statistical",
    "version": "2013",
    "summary": "Get the Gamma function value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/gamma-function",
    "note": "",
    "syntax": "GAMMA(number)",
    "example": "=GAMMA(3)"
  },
  {
    "name": "GAMMA.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the gamma distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/gamma-dist-function",
    "note": "",
    "syntax": "GAMMA.DIST(x, alpha, beta, cumulative)",
    "example": "=GAMMA.DIST(4, 3, 2, TRUE)"
  },
  {
    "name": "GAMMA.INV",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the inverse of the gamma cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/gamma-inv-function",
    "note": "",
    "syntax": "GAMMA.INV(probability, alpha, beta)",
    "example": "=GAMMA.INV(0.7, 3, 2)"
  },
  {
    "name": "GAMMADIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the gamma distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/gammadist-function",
    "note": "",
    "syntax": "GAMMADIST(x, alpha, beta, cumulative)",
    "example": "=GAMMADIST(4, 3, 2, TRUE)"
  },
  {
    "name": "GAMMAINV",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the inverse of the gamma cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/gammainv-function",
    "note": "",
    "syntax": "GAMMAINV(probability, alpha, beta)",
    "example": "=GAMMAINV(0.7, 3, 2)"
  },
  {
    "name": "GAMMALN",
    "category": "Statistical",
    "version": "",
    "summary": "Get the natural logarithm of the gamma function, Γ(x).",
    "url": "https://support.microsoft.com/en-us/excel/functions/gammaln-function",
    "note": "",
    "syntax": "GAMMALN(number)",
    "example": "=GAMMALN(3)"
  },
  {
    "name": "GAMMALN.PRECISE",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the natural logarithm of the gamma function, Γ(x).",
    "url": "https://support.microsoft.com/en-us/excel/functions/gammaln-precise-function",
    "note": "",
    "syntax": "GAMMALN.PRECISE(number)",
    "example": "=GAMMALN.PRECISE(3)"
  },
  {
    "name": "GAUSS",
    "category": "Statistical",
    "version": "2013",
    "summary": "Get 0.5 less than the standard normal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/gauss-function",
    "note": "",
    "syntax": "GAUSS(number)",
    "example": "=GAUSS(3)"
  },
  {
    "name": "GCD",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the greatest common divisor.",
    "url": "https://support.microsoft.com/en-us/excel/functions/gcd-function",
    "note": "",
    "syntax": "GCD(number1, [number2], …)",
    "example": "=GCD(8, 10, 12)"
  },
  {
    "name": "GEOMEAN",
    "category": "Statistical",
    "version": "",
    "summary": "Get the geometric mean.",
    "url": "https://support.microsoft.com/en-us/excel/functions/geomean-function",
    "note": "",
    "syntax": "GEOMEAN(number1, [number2], …)",
    "example": "=GEOMEAN(2, 8, 16)"
  },
  {
    "name": "GESTEP",
    "category": "Engineering",
    "version": "",
    "summary": "Test whether a number is greater than a threshold value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/gestep-function",
    "note": "",
    "syntax": "GESTEP(number, [step])",
    "example": "=GESTEP(7, 5)"
  },
  {
    "name": "GETPIVOTDATA",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Get data stored in a PivotTable report.",
    "url": "https://support.microsoft.com/en-us/excel/functions/getpivotdata-function",
    "note": "",
    "syntax": "GETPIVOTDATA(data_field, pivot_table, [field1, item1], …)",
    "example": "=GETPIVOTDATA(\"Sales\", $A$3, \"Region\", \"West\")"
  },
  {
    "name": "GROUPBY",
    "category": "Lookup and reference",
    "version": "Microsoft 365",
    "summary": "Group values by row fields and calculate summaries.",
    "url": "https://support.microsoft.com/en-us/excel/functions/groupby-function",
    "note": "",
    "syntax": "GROUPBY(row_fields, values, function, [field_headers], [total_depth], [sort_order], [filter_array], [field_relationship])",
    "example": "=GROUPBY(A2:A20, B2:B20, SUM)"
  },
  {
    "name": "GROWTH",
    "category": "Statistical",
    "version": "",
    "summary": "Get values along an exponential trend.",
    "url": "https://support.microsoft.com/en-us/excel/functions/growth-function",
    "note": "",
    "syntax": "GROWTH(known_y's, [known_x's], [new_x's], [const])",
    "example": "=GROWTH(B2:B10, A2:A10, A11:A13)"
  },
  {
    "name": "HARMEAN",
    "category": "Statistical",
    "version": "",
    "summary": "Get the harmonic mean.",
    "url": "https://support.microsoft.com/en-us/excel/functions/harmean-function",
    "note": "",
    "syntax": "HARMEAN(number1, [number2], …)",
    "example": "=HARMEAN(2, 8, 16)"
  },
  {
    "name": "HEX2BIN",
    "category": "Engineering",
    "version": "",
    "summary": "Convert a hexadecimal number to binary.",
    "url": "https://support.microsoft.com/en-us/excel/functions/hex2bin-function",
    "note": "",
    "syntax": "HEX2BIN(number, [places])",
    "example": "=HEX2BIN(\"1F\")"
  },
  {
    "name": "HEX2DEC",
    "category": "Engineering",
    "version": "",
    "summary": "Convert a hexadecimal number to decimal.",
    "url": "https://support.microsoft.com/en-us/excel/functions/hex2dec-function",
    "note": "",
    "syntax": "HEX2DEC(number)",
    "example": "=HEX2DEC(\"1F\")"
  },
  {
    "name": "HEX2OCT",
    "category": "Engineering",
    "version": "",
    "summary": "Convert a hexadecimal number to octal.",
    "url": "https://support.microsoft.com/en-us/excel/functions/hex2oct-function",
    "note": "",
    "syntax": "HEX2OCT(number, [places])",
    "example": "=HEX2OCT(\"1F\")"
  },
  {
    "name": "HLOOKUP",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Look across the first row and return a value from the matching column.",
    "url": "https://support.microsoft.com/en-us/excel/functions/hlookup-function",
    "note": "",
    "syntax": "HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
    "example": "=HLOOKUP(\"April\", A1:F5, 4, FALSE)"
  },
  {
    "name": "HOUR",
    "category": "Date and time",
    "version": "",
    "summary": "Convert a serial number to an hour.",
    "url": "https://support.microsoft.com/en-us/excel/functions/hour-function",
    "note": "",
    "syntax": "HOUR(serial_number)",
    "example": "=HOUR(TIME(14, 30, 15))"
  },
  {
    "name": "HSTACK",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Append arrays side by side.",
    "url": "https://support.microsoft.com/en-us/excel/functions/hstack-function",
    "note": "",
    "syntax": "HSTACK(array1, [array2], …)",
    "example": "=HSTACK(A2:A10, C2:C10)"
  },
  {
    "name": "HYPERLINK",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Create a clickable link in a worksheet.",
    "url": "https://support.microsoft.com/en-us/excel/functions/hyperlink-function",
    "note": "",
    "syntax": "HYPERLINK(link_location, [friendly_name])",
    "example": "=HYPERLINK(\"https://example.com\", \"Example\")"
  },
  {
    "name": "HYPGEOM.DIST",
    "category": "Statistical",
    "version": "",
    "summary": "Get the hypergeometric distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/hypgeom-dist-function",
    "note": "",
    "syntax": "HYPGEOM.DIST(sample_s, number_sample, population_s, number_pop, cumulative)",
    "example": "=HYPGEOM.DIST(2, 5, 10, 20, FALSE)"
  },
  {
    "name": "HYPGEOMDIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the hypergeometric distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/hypgeomdist-function",
    "note": "",
    "syntax": "HYPGEOMDIST(sample_s, number_sample, population_s, number_pop)",
    "example": "=HYPGEOMDIST(2, 5, 10, 20)"
  },
  {
    "name": "IF",
    "category": "Logical",
    "version": "",
    "summary": "Choose one of two results based on a condition.",
    "url": "https://support.microsoft.com/en-us/excel/functions/if-function",
    "note": "",
    "syntax": "IF(logical_test, value_if_true, [value_if_false])",
    "example": "=IF(TRUE, \"Pass\", \"Review\")"
  },
  {
    "name": "IFERROR",
    "category": "Logical",
    "version": "",
    "summary": "Replace a calculation error with a fallback result.",
    "url": "https://support.microsoft.com/en-us/excel/functions/iferror-function",
    "note": "",
    "syntax": "IFERROR(value, value_if_error)",
    "example": "=IFERROR(A2/B2, \"Check divisor\")"
  },
  {
    "name": "IFNA",
    "category": "Logical",
    "version": "2013",
    "summary": "Replace a #N/A error with a fallback result.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ifna-function",
    "note": "",
    "syntax": "IFNA(value, value_if_na)",
    "example": "=IFNA(MATCH(\"Pen\", A2:A10, 0), \"Missing\")"
  },
  {
    "name": "IFS",
    "category": "Logical",
    "version": "2019",
    "summary": "Return a result for the first true condition.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ifs-function",
    "note": "",
    "syntax": "IFS(logical_test1, value_if_true1, [logical_test2, value_if_true2], …)",
    "example": "=IFS(A2>=90, \"A\", A2>=80, \"B\", TRUE, \"Other\")"
  },
  {
    "name": "IMABS",
    "category": "Engineering",
    "version": "",
    "summary": "Get the absolute value (modulus) of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imabs-function",
    "note": "",
    "syntax": "IMABS(inumber)",
    "example": "=IMABS(\"3+4i\")"
  },
  {
    "name": "IMAGE",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Display an image in a worksheet cell.",
    "url": "https://support.microsoft.com/en-us/excel/functions/image-function",
    "note": "",
    "syntax": "IMAGE(source, [alt_text], [sizing], [height], [width])",
    "example": "=IMAGE(\"https://example.com/photo.png\", \"Photo\")"
  },
  {
    "name": "IMAGINARY",
    "category": "Engineering",
    "version": "",
    "summary": "Get the imaginary coefficient of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imaginary-function",
    "note": "",
    "syntax": "IMAGINARY(inumber)",
    "example": "=IMAGINARY(\"3+4i\")"
  },
  {
    "name": "IMARGUMENT",
    "category": "Engineering",
    "version": "",
    "summary": "Get the argument theta, an angle expressed in radians.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imargument-function",
    "note": "",
    "syntax": "IMARGUMENT(inumber)",
    "example": "=IMARGUMENT(\"3+4i\")"
  },
  {
    "name": "IMCONJUGATE",
    "category": "Engineering",
    "version": "",
    "summary": "Get the complex conjugate of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imconjugate-function",
    "note": "",
    "syntax": "IMCONJUGATE(inumber)",
    "example": "=IMCONJUGATE(\"3+4i\")"
  },
  {
    "name": "IMCOS",
    "category": "Engineering",
    "version": "",
    "summary": "Get the cosine of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imcos-function",
    "note": "",
    "syntax": "IMCOS(inumber)",
    "example": "=IMCOS(\"3+4i\")"
  },
  {
    "name": "IMCOSH",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get the hyperbolic cosine of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imcosh-function",
    "note": "",
    "syntax": "IMCOSH(inumber)",
    "example": "=IMCOSH(\"3+4i\")"
  },
  {
    "name": "IMCOT",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get the cotangent of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imcot-function",
    "note": "",
    "syntax": "IMCOT(inumber)",
    "example": "=IMCOT(\"3+4i\")"
  },
  {
    "name": "IMCSC",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get the cosecant of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imcsc-function",
    "note": "",
    "syntax": "IMCSC(inumber)",
    "example": "=IMCSC(\"3+4i\")"
  },
  {
    "name": "IMCSCH",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get the hyperbolic cosecant of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imcsch-function",
    "note": "",
    "syntax": "IMCSCH(inumber)",
    "example": "=IMCSCH(\"3+4i\")"
  },
  {
    "name": "IMDIV",
    "category": "Engineering",
    "version": "",
    "summary": "Get the quotient of two complex numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imdiv-function",
    "note": "",
    "syntax": "IMDIV(inumber1, inumber2)",
    "example": "=IMDIV(\"3+4i\", \"1+2i\")"
  },
  {
    "name": "IMEXP",
    "category": "Engineering",
    "version": "",
    "summary": "Get the exponential of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imexp-function",
    "note": "",
    "syntax": "IMEXP(inumber)",
    "example": "=IMEXP(\"3+4i\")"
  },
  {
    "name": "IMLN",
    "category": "Engineering",
    "version": "",
    "summary": "Get the natural logarithm of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imln-function",
    "note": "",
    "syntax": "IMLN(inumber)",
    "example": "=IMLN(\"3+4i\")"
  },
  {
    "name": "IMLOG10",
    "category": "Engineering",
    "version": "",
    "summary": "Get the base-10 logarithm of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imlog10-function",
    "note": "",
    "syntax": "IMLOG10(inumber)",
    "example": "=IMLOG10(\"3+4i\")"
  },
  {
    "name": "IMLOG2",
    "category": "Engineering",
    "version": "",
    "summary": "Get the base-2 logarithm of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imlog2-function",
    "note": "",
    "syntax": "IMLOG2(inumber)",
    "example": "=IMLOG2(\"3+4i\")"
  },
  {
    "name": "IMPOWER",
    "category": "Engineering",
    "version": "",
    "summary": "Get a complex number raised to an integer power.",
    "url": "https://support.microsoft.com/en-us/excel/functions/impower-function",
    "note": "",
    "syntax": "IMPOWER(inumber, number)",
    "example": "=IMPOWER(\"3+4i\", 2)"
  },
  {
    "name": "IMPRODUCT",
    "category": "Engineering",
    "version": "",
    "summary": "Get the product of complex numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/improduct-function",
    "note": "",
    "syntax": "IMPRODUCT(inumber1, [inumber2], …)",
    "example": "=IMPRODUCT(\"3+4i\", \"1+2i\")"
  },
  {
    "name": "IMREAL",
    "category": "Engineering",
    "version": "",
    "summary": "Get the real coefficient of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imreal-function",
    "note": "",
    "syntax": "IMREAL(inumber)",
    "example": "=IMREAL(\"3+4i\")"
  },
  {
    "name": "IMSEC",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get the secant of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imsec-function",
    "note": "",
    "syntax": "IMSEC(inumber)",
    "example": "=IMSEC(\"3+4i\")"
  },
  {
    "name": "IMSECH",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get the hyperbolic secant of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imsech-function",
    "note": "",
    "syntax": "IMSECH(inumber)",
    "example": "=IMSECH(\"3+4i\")"
  },
  {
    "name": "IMSIN",
    "category": "Engineering",
    "version": "",
    "summary": "Get the sine of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imsin-function",
    "note": "",
    "syntax": "IMSIN(inumber)",
    "example": "=IMSIN(\"3+4i\")"
  },
  {
    "name": "IMSINH",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get the hyperbolic sine of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imsinh-function",
    "note": "",
    "syntax": "IMSINH(inumber)",
    "example": "=IMSINH(\"3+4i\")"
  },
  {
    "name": "IMSQRT",
    "category": "Engineering",
    "version": "",
    "summary": "Get the square root of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imsqrt-function",
    "note": "",
    "syntax": "IMSQRT(inumber)",
    "example": "=IMSQRT(\"3+4i\")"
  },
  {
    "name": "IMSUB",
    "category": "Engineering",
    "version": "",
    "summary": "Get the difference between two complex numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imsub-function",
    "note": "",
    "syntax": "IMSUB(inumber1, inumber2)",
    "example": "=IMSUB(\"3+4i\", \"1+2i\")"
  },
  {
    "name": "IMSUM",
    "category": "Engineering",
    "version": "",
    "summary": "Get the sum of complex numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imsum-function",
    "note": "",
    "syntax": "IMSUM(inumber1, [inumber2], …)",
    "example": "=IMSUM(\"3+4i\", \"1+2i\")"
  },
  {
    "name": "IMTAN",
    "category": "Engineering",
    "version": "2013",
    "summary": "Get the tangent of a complex number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/imtan-function",
    "note": "",
    "syntax": "IMTAN(inumber)",
    "example": "=IMTAN(\"3+4i\")"
  },
  {
    "name": "INDEX",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Return the value at a position in a range or array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/index-function",
    "note": "",
    "syntax": "INDEX(array, row_num, [column_num])",
    "example": "=INDEX(A2:D20, 3, 4)"
  },
  {
    "name": "INDIRECT",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Get a reference indicated by a text value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/indirect-function",
    "note": "",
    "syntax": "INDIRECT(ref_text, [a1])",
    "example": "=INDIRECT(\"B\"&12)"
  },
  {
    "name": "INFO",
    "category": "Information",
    "version": "",
    "summary": "Get information about the current operating environment.",
    "url": "https://support.microsoft.com/en-us/excel/functions/info-function",
    "note": "Unavailable in Excel for the web.",
    "syntax": "INFO(type_text)",
    "example": "=INFO(\"system\")"
  },
  {
    "name": "INT",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Round down to the nearest integer.",
    "url": "https://support.microsoft.com/en-us/excel/functions/int-function",
    "note": "",
    "syntax": "INT(number)",
    "example": "=INT(-3.7)"
  },
  {
    "name": "INTERCEPT",
    "category": "Statistical",
    "version": "",
    "summary": "Get the intercept of the linear regression line.",
    "url": "https://support.microsoft.com/en-us/excel/functions/intercept-function",
    "note": "",
    "syntax": "INTERCEPT(known_y's, known_x's)",
    "example": "=INTERCEPT(B2:B10, A2:A10)"
  },
  {
    "name": "INTRATE",
    "category": "Financial",
    "version": "",
    "summary": "Get the interest rate for a fully invested security.",
    "url": "https://support.microsoft.com/en-us/excel/functions/intrate-function",
    "note": "",
    "syntax": "INTRATE(settlement, maturity, investment, redemption, [basis])",
    "example": "=INTRATE(DATE(2025,1,1), DATE(2025,7,1), 970, 1000)"
  },
  {
    "name": "IPMT",
    "category": "Financial",
    "version": "",
    "summary": "Get the interest payment for an investment for a given period.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ipmt-function",
    "note": "",
    "syntax": "IPMT(rate, per, nper, pv, [fv], [type])",
    "example": "=IPMT(0.05/12, 1, 60, -10000)"
  },
  {
    "name": "IRR",
    "category": "Financial",
    "version": "",
    "summary": "Find the periodic discount rate that gives cash flows a zero net present value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/irr-function",
    "note": "",
    "syntax": "IRR(values, [guess])",
    "example": "=IRR(B2:B10, 10%)"
  },
  {
    "name": "ISBLANK",
    "category": "Information",
    "version": "",
    "summary": "Check whether a cell is empty.",
    "url": "https://support.microsoft.com/en-us/excel/is-functions",
    "note": "",
    "syntax": "ISBLANK(value)",
    "example": "=ISBLANK(A2)"
  },
  {
    "name": "ISERR",
    "category": "Information",
    "version": "",
    "summary": "Check whether the value is any error value except #N/A.",
    "url": "https://support.microsoft.com/en-us/excel/is-functions",
    "note": "",
    "syntax": "ISERR(value)",
    "example": "=ISERR(A2)"
  },
  {
    "name": "ISERROR",
    "category": "Information",
    "version": "",
    "summary": "Check whether the value is any error value.",
    "url": "https://support.microsoft.com/en-us/excel/is-functions",
    "note": "",
    "syntax": "ISERROR(value)",
    "example": "=ISERROR(A2)"
  },
  {
    "name": "ISEVEN",
    "category": "Information",
    "version": "",
    "summary": "Check whether the number is even.",
    "url": "https://support.microsoft.com/en-us/excel/functions/iseven-function",
    "note": "",
    "syntax": "ISEVEN(number)",
    "example": "=ISEVEN(17)"
  },
  {
    "name": "ISFORMULA",
    "category": "Information",
    "version": "2013",
    "summary": "Check whether there is a reference to a cell that contains a formula.",
    "url": "https://support.microsoft.com/en-us/excel/functions/isformula-function",
    "note": "",
    "syntax": "ISFORMULA(reference)",
    "example": "=ISFORMULA(A2)"
  },
  {
    "name": "ISLOGICAL",
    "category": "Information",
    "version": "",
    "summary": "Check whether a value is TRUE or FALSE.",
    "url": "https://support.microsoft.com/en-us/excel/is-functions",
    "note": "",
    "syntax": "ISLOGICAL(value)",
    "example": "=ISLOGICAL(TRUE)"
  },
  {
    "name": "ISNA",
    "category": "Information",
    "version": "",
    "summary": "Check whether the value is the #N/A error value.",
    "url": "https://support.microsoft.com/en-us/excel/is-functions",
    "note": "",
    "syntax": "ISNA(value)",
    "example": "=ISNA(A2)"
  },
  {
    "name": "ISNONTEXT",
    "category": "Information",
    "version": "",
    "summary": "Check whether the value is not text.",
    "url": "https://support.microsoft.com/en-us/excel/is-functions",
    "note": "",
    "syntax": "ISNONTEXT(value)",
    "example": "=ISNONTEXT(A2)"
  },
  {
    "name": "ISNUMBER",
    "category": "Information",
    "version": "",
    "summary": "Check whether a value is numeric.",
    "url": "https://support.microsoft.com/en-us/excel/is-functions",
    "note": "",
    "syntax": "ISNUMBER(value)",
    "example": "=ISNUMBER(42)"
  },
  {
    "name": "ISO.CEILING",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get a number that is rounded up to the nearest integer or to the nearest multiple of significance.",
    "url": "https://support.microsoft.com/en-us/excel/functions/iso-ceiling-function",
    "note": "",
    "syntax": "ISO.CEILING(number, significance)",
    "example": "=ISO.CEILING(17, 5)"
  },
  {
    "name": "ISODD",
    "category": "Information",
    "version": "",
    "summary": "Check whether the number is odd.",
    "url": "https://support.microsoft.com/en-us/excel/is-functions",
    "note": "",
    "syntax": "ISODD(number)",
    "example": "=ISODD(17)"
  },
  {
    "name": "ISOMITTED",
    "category": "Information",
    "version": "2024",
    "summary": "Check whether the value in a LAMBDA is missing and returns TRUE or FALSE.",
    "url": "https://support.microsoft.com/en-us/excel/functions/isomitted-function",
    "note": "",
    "syntax": "ISOMITTED(argument)",
    "example": "=ISOMITTED(x)"
  },
  {
    "name": "ISOWEEKNUM",
    "category": "Date and time",
    "version": "2013",
    "summary": "Get the number of the ISO week number of the year for a given date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/isoweeknum-function",
    "note": "",
    "syntax": "ISOWEEKNUM(date)",
    "example": "=ISOWEEKNUM(DATE(2026, 11, 25))"
  },
  {
    "name": "ISPMT",
    "category": "Financial",
    "version": "",
    "summary": "Calculate the interest paid during a specific period of an investment.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ispmt-function",
    "note": "",
    "syntax": "ISPMT(rate, per, nper, pv)",
    "example": "=ISPMT(5%/12, 1, 60, 10000)"
  },
  {
    "name": "ISREF",
    "category": "Information",
    "version": "",
    "summary": "Check whether the value is a reference.",
    "url": "https://support.microsoft.com/en-us/excel/is-functions",
    "note": "",
    "syntax": "ISREF(value)",
    "example": "=ISREF(A2)"
  },
  {
    "name": "ISTEXT",
    "category": "Information",
    "version": "",
    "summary": "Check whether a value is text.",
    "url": "https://support.microsoft.com/en-us/excel/is-functions",
    "note": "",
    "syntax": "ISTEXT(value)",
    "example": "=ISTEXT(\"North\")"
  },
  {
    "name": "JIS",
    "category": "Text",
    "version": "",
    "summary": "Change half-width (single-byte) characters within a string to full-width (double-byte) characters.",
    "url": "https://support.microsoft.com/en-us/excel/functions/jis-function",
    "note": "",
    "syntax": "JIS(text)",
    "example": "=JIS(\"ABC\")"
  },
  {
    "name": "KURT",
    "category": "Statistical",
    "version": "",
    "summary": "Get the kurtosis of a data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/kurt-function",
    "note": "",
    "syntax": "KURT(number1, [number2], …)",
    "example": "=KURT(A2:A20)"
  },
  {
    "name": "LAMBDA",
    "category": "Logical",
    "version": "2024",
    "summary": "Define a reusable calculation with named parameters.",
    "url": "https://support.microsoft.com/en-us/excel/functions/lambda-function",
    "note": "",
    "syntax": "LAMBDA([parameter1, parameter2, …], calculation)",
    "example": "=LAMBDA(x, x*2)"
  },
  {
    "name": "LARGE",
    "category": "Statistical",
    "version": "",
    "summary": "Get the k-th largest value in a data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/large-function",
    "note": "",
    "syntax": "LARGE(array, k)",
    "example": "=LARGE(A2:A20, 3)"
  },
  {
    "name": "LCM",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the least common multiple.",
    "url": "https://support.microsoft.com/en-us/excel/functions/lcm-function",
    "note": "",
    "syntax": "LCM(number1, [number2], …)",
    "example": "=LCM(8, 10, 12)"
  },
  {
    "name": "LEFT",
    "category": "Text",
    "version": "",
    "summary": "Take characters from the beginning of text.",
    "url": "https://support.microsoft.com/en-us/excel/functions/left-function",
    "note": "",
    "syntax": "LEFT(text, [num_chars])",
    "example": "=LEFT(\"Spreadsheet\", 6)"
  },
  {
    "name": "LEFTB",
    "category": "Text",
    "version": "",
    "summary": "Get the leftmost characters from a text value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/left-function",
    "note": "",
    "syntax": "LEFTB(text, [num_bytes])",
    "example": "=LEFTB(\"ABC\", 2)"
  },
  {
    "name": "LEN",
    "category": "Text",
    "version": "",
    "summary": "Count the characters in a text value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/len-function",
    "note": "",
    "syntax": "LEN(text)",
    "example": "=LEN(\"Excel\")"
  },
  {
    "name": "LENB",
    "category": "Text",
    "version": "",
    "summary": "Get the number of characters in a text string.",
    "url": "https://support.microsoft.com/en-us/excel/functions/len-function",
    "note": "",
    "syntax": "LENB(text)",
    "example": "=LENB(\"ABC\")"
  },
  {
    "name": "LET",
    "category": "Logical",
    "version": "2021",
    "summary": "Assign names to intermediate values within a formula.",
    "url": "https://support.microsoft.com/en-us/excel/functions/let-function",
    "note": "",
    "syntax": "LET(name1, name_value1, calculation_or_name2, …)",
    "example": "=LET(price, 12, price*3)"
  },
  {
    "name": "LINEST",
    "category": "Statistical",
    "version": "",
    "summary": "Get the parameters of a linear trend.",
    "url": "https://support.microsoft.com/en-us/excel/functions/linest-function",
    "note": "",
    "syntax": "LINEST(known_y's, [known_x's], [const], [stats])",
    "example": "=LINEST(B2:B10, A2:A10)"
  },
  {
    "name": "LN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Find the natural logarithm.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ln-function",
    "note": "",
    "syntax": "LN(number)",
    "example": "=LN(10)"
  },
  {
    "name": "LOG",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Find a logarithm using the chosen base.",
    "url": "https://support.microsoft.com/en-us/excel/functions/log-function",
    "note": "",
    "syntax": "LOG(number, [base])",
    "example": "=LOG(64, 2)"
  },
  {
    "name": "LOG10",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Find the base-ten logarithm.",
    "url": "https://support.microsoft.com/en-us/excel/functions/log10-function",
    "note": "",
    "syntax": "LOG10(number)",
    "example": "=LOG10(1000)"
  },
  {
    "name": "LOGEST",
    "category": "Statistical",
    "version": "",
    "summary": "Get the parameters of an exponential trend.",
    "url": "https://support.microsoft.com/en-us/excel/functions/logest-function",
    "note": "",
    "syntax": "LOGEST(known_y's, [known_x's], [const], [stats])",
    "example": "=LOGEST(B2:B10, A2:A10)"
  },
  {
    "name": "LOGINV",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the inverse of the lognormal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/loginv-function",
    "note": "",
    "syntax": "LOGINV(probability, mean, standard_dev)",
    "example": "=LOGINV(0.8, 1, 0.5)"
  },
  {
    "name": "LOGNORM.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the cumulative lognormal distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/lognorm-dist-function",
    "note": "",
    "syntax": "LOGNORM.DIST(x, mean, standard_dev, cumulative)",
    "example": "=LOGNORM.DIST(3, 1, 0.5, TRUE)"
  },
  {
    "name": "LOGNORM.INV",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the inverse of the lognormal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/lognorm-inv-function",
    "note": "",
    "syntax": "LOGNORM.INV(probability, mean, standard_dev)",
    "example": "=LOGNORM.INV(0.8, 1, 0.5)"
  },
  {
    "name": "LOGNORMDIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the cumulative lognormal distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/lognormdist-function",
    "note": "",
    "syntax": "LOGNORMDIST(x, mean, standard_dev)",
    "example": "=LOGNORMDIST(3, 1, 0.5)"
  },
  {
    "name": "LOOKUP",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Look up values in a vector or array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/lookup-function",
    "note": "",
    "syntax": "LOOKUP(lookup_value, lookup_vector, [result_vector])",
    "example": "=LOOKUP(25, A2:A10, C2:C10)"
  },
  {
    "name": "LOWER",
    "category": "Text",
    "version": "",
    "summary": "Convert text to lowercase.",
    "url": "https://support.microsoft.com/en-us/excel/functions/lower-function",
    "note": "",
    "syntax": "LOWER(text)",
    "example": "=LOWER(\"Field Guide\")"
  },
  {
    "name": "MAKEARRAY",
    "category": "Logical",
    "version": "2024",
    "summary": "Get a calculated array of a specified row and column size, by applying a LAMBDA.",
    "url": "https://support.microsoft.com/en-us/excel/functions/makearray-function",
    "note": "",
    "syntax": "MAKEARRAY(rows, cols, lambda)",
    "example": "=MAKEARRAY(3, 4, LAMBDA(r, c, r*c))"
  },
  {
    "name": "MAP",
    "category": "Logical",
    "version": "2024",
    "summary": "Get an array formed by mapping each value in the array(s) to a new value by applying a LAMBDA to create a new value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/map-function",
    "note": "",
    "syntax": "MAP(array1, [array2], …, lambda)",
    "example": "=MAP(A2:A10, LAMBDA(x, x*2))"
  },
  {
    "name": "MATCH",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Find the relative position of a matching item.",
    "url": "https://support.microsoft.com/en-us/excel/functions/match-function",
    "note": "",
    "syntax": "MATCH(lookup_value, lookup_array, [match_type])",
    "example": "=MATCH(\"Pen\", A2:A20, 0)"
  },
  {
    "name": "MAX",
    "category": "Statistical",
    "version": "",
    "summary": "Find the largest number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/max-function",
    "note": "",
    "syntax": "MAX(number1, [number2], …)",
    "example": "=MAX(12, 3, 8)"
  },
  {
    "name": "MAXA",
    "category": "Statistical",
    "version": "",
    "summary": "Get the maximum value in a list of arguments, including numbers, text, and logical values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/maxa-function",
    "note": "",
    "syntax": "MAXA(number1, [number2], …)",
    "example": "=MAXA(8, 10, 12)"
  },
  {
    "name": "MAXIFS",
    "category": "Statistical",
    "version": "2019",
    "summary": "Get the maximum value among cells specified by a given set of conditions or criteria.",
    "url": "https://support.microsoft.com/en-us/excel/functions/maxifs-function",
    "note": "",
    "syntax": "MAXIFS(max_range, criteria_range1, criteria1, [criteria_range2, criteria2], …)",
    "example": "=MAXIFS(C2:C10, A2:A10, \"North\")"
  },
  {
    "name": "MDETERM",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the matrix determinant of an array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mdeterm-function",
    "note": "",
    "syntax": "MDETERM(array)",
    "example": "=MDETERM(A2:C4)"
  },
  {
    "name": "MDURATION",
    "category": "Financial",
    "version": "",
    "summary": "Get the Macauley modified duration for a security with an assumed par value of $100.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mduration-function",
    "note": "",
    "syntax": "MDURATION(settlement, maturity, coupon, yld, frequency, [basis])",
    "example": "=MDURATION(DATE(2025,3,1), DATE(2028,12,31), 5%, 4%, 2)"
  },
  {
    "name": "MEDIAN",
    "category": "Statistical",
    "version": "",
    "summary": "Find the middle value of a numeric list.",
    "url": "https://support.microsoft.com/en-us/excel/functions/median-function",
    "note": "",
    "syntax": "MEDIAN(number1, [number2], …)",
    "example": "=MEDIAN(4, 10, 90)"
  },
  {
    "name": "MID",
    "category": "Text",
    "version": "",
    "summary": "Take characters starting at a one-based position.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mid-function",
    "note": "",
    "syntax": "MID(text, start_num, num_chars)",
    "example": "=MID(\"Spreadsheet\", 7, 5)"
  },
  {
    "name": "MIDB",
    "category": "Text",
    "version": "",
    "summary": "Get a specific number of characters from a text string starting at the position you specify.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mid-function",
    "note": "",
    "syntax": "MIDB(text, start_num, num_bytes)",
    "example": "=MIDB(\"ABC\", 2, 1)"
  },
  {
    "name": "MIN",
    "category": "Statistical",
    "version": "",
    "summary": "Find the smallest number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/min-function",
    "note": "",
    "syntax": "MIN(number1, [number2], …)",
    "example": "=MIN(12, 3, 8)"
  },
  {
    "name": "MINA",
    "category": "Statistical",
    "version": "",
    "summary": "Get the smallest value in a list of arguments, including numbers, text, and logical values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mina-function",
    "note": "",
    "syntax": "MINA(number1, [number2], …)",
    "example": "=MINA(8, 10, 12)"
  },
  {
    "name": "MINIFS",
    "category": "Statistical",
    "version": "2019",
    "summary": "Get the minimum value among cells specified by a given set of conditions or criteria.",
    "url": "https://support.microsoft.com/en-us/excel/functions/minifs-function",
    "note": "",
    "syntax": "MINIFS(min_range, criteria_range1, criteria1, [criteria_range2, criteria2], …)",
    "example": "=MINIFS(C2:C10, A2:A10, \"North\")"
  },
  {
    "name": "MINUTE",
    "category": "Date and time",
    "version": "",
    "summary": "Convert a serial number to a minute.",
    "url": "https://support.microsoft.com/en-us/excel/functions/minute-function",
    "note": "",
    "syntax": "MINUTE(serial_number)",
    "example": "=MINUTE(TIME(14, 30, 15))"
  },
  {
    "name": "MINVERSE",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the matrix inverse of an array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/minverse-function",
    "note": "",
    "syntax": "MINVERSE(array)",
    "example": "=MINVERSE(A2:C4)"
  },
  {
    "name": "MIRR",
    "category": "Financial",
    "version": "",
    "summary": "Get the internal rate of return where positive and negative cash flows are financed at different rates.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mirr-function",
    "note": "",
    "syntax": "MIRR(values, finance_rate, reinvest_rate)",
    "example": "=MIRR(B2:B10, 8%, 5%)"
  },
  {
    "name": "MMULT",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the matrix product of two arrays.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mmult-function",
    "note": "",
    "syntax": "MMULT(array1, array2)",
    "example": "=MMULT(A2:B4, D2:E3)"
  },
  {
    "name": "MOD",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Find the remainder with the sign of the divisor.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mod-function",
    "note": "",
    "syntax": "MOD(number, divisor)",
    "example": "=MOD(17, 5)"
  },
  {
    "name": "MODE",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the most common value in a data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mode-function",
    "note": "",
    "syntax": "MODE(number1, [number2], …)",
    "example": "=MODE(2, 3, 3, 5)"
  },
  {
    "name": "MODE.MULT",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get a vertical array of the most frequently occurring, or repetitive values in an array or range of data.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mode-mult-function",
    "note": "",
    "syntax": "MODE.MULT(number1, [number2], …)",
    "example": "=MODE.MULT(2, 3, 3, 5)"
  },
  {
    "name": "MODE.SNGL",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the most common value in a data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mode-sngl-function",
    "note": "",
    "syntax": "MODE.SNGL(number1, [number2], …)",
    "example": "=MODE.SNGL(2, 3, 3, 5)"
  },
  {
    "name": "MONTH",
    "category": "Date and time",
    "version": "",
    "summary": "Extract the month number from an Excel date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/month-function",
    "note": "",
    "syntax": "MONTH(serial_number)",
    "example": "=MONTH(DATE(2026,11,25))"
  },
  {
    "name": "MROUND",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get a number rounded to the desired multiple.",
    "url": "https://support.microsoft.com/en-us/excel/functions/mround-function",
    "note": "",
    "syntax": "MROUND(number, significance)",
    "example": "=MROUND(17, 5)"
  },
  {
    "name": "MULTINOMIAL",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the multinomial of a set of numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/multinomial-function",
    "note": "",
    "syntax": "MULTINOMIAL(number1, [number2], …)",
    "example": "=MULTINOMIAL(2, 3, 4)"
  },
  {
    "name": "MUNIT",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get the unit matrix or the specified dimension.",
    "url": "https://support.microsoft.com/en-us/excel/functions/munit-function",
    "note": "",
    "syntax": "MUNIT(dimension)",
    "example": "=MUNIT(3)"
  },
  {
    "name": "N",
    "category": "Information",
    "version": "",
    "summary": "Get a value converted to a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/n-function",
    "note": "",
    "syntax": "N(value)",
    "example": "=N(A2)"
  },
  {
    "name": "NA",
    "category": "Information",
    "version": "",
    "summary": "Get the error value #N/A.",
    "url": "https://support.microsoft.com/en-us/excel/functions/na-function",
    "note": "",
    "syntax": "NA()",
    "example": "=NA()"
  },
  {
    "name": "NEGBINOM.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the negative binomial distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/negbinom-dist-function",
    "note": "",
    "syntax": "NEGBINOM.DIST(number_f, number_s, probability_s, cumulative)",
    "example": "=NEGBINOM.DIST(3, 2, 0.4, FALSE)"
  },
  {
    "name": "NEGBINOMDIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the negative binomial distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/negbinomdist-function",
    "note": "",
    "syntax": "NEGBINOMDIST(number_f, number_s, probability_s)",
    "example": "=NEGBINOMDIST(3, 2, 0.4)"
  },
  {
    "name": "NETWORKDAYS",
    "category": "Date and time",
    "version": "",
    "summary": "Count weekdays between two dates, excluding supplied holidays.",
    "url": "https://support.microsoft.com/en-us/excel/functions/networkdays-function",
    "note": "",
    "syntax": "NETWORKDAYS(start_date, end_date, [holidays])",
    "example": "=NETWORKDAYS(A2, B2, H2:H10)"
  },
  {
    "name": "NETWORKDAYS.INTL",
    "category": "Date and time",
    "version": "2010",
    "summary": "Get the number of whole workdays between two dates using parameters to indicate which and how many days are weekend days.",
    "url": "https://support.microsoft.com/en-us/excel/functions/networkdays-intl-function",
    "note": "",
    "syntax": "NETWORKDAYS.INTL(start_date, end_date, [weekend], [holidays])",
    "example": "=NETWORKDAYS.INTL(A2, B2, 1, H2:H10)"
  },
  {
    "name": "NOMINAL",
    "category": "Financial",
    "version": "",
    "summary": "Get the annual nominal interest rate.",
    "url": "https://support.microsoft.com/en-us/excel/functions/nominal-function",
    "note": "",
    "syntax": "NOMINAL(effect_rate, npery)",
    "example": "=NOMINAL(0.062, 12)"
  },
  {
    "name": "NORM.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the normal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/norm-dist-function",
    "note": "",
    "syntax": "NORM.DIST(x, mean, standard_dev, cumulative)",
    "example": "=NORM.DIST(80, 75, 10, TRUE)"
  },
  {
    "name": "NORM.INV",
    "category": "Compatibility",
    "version": "2010",
    "summary": "Get the inverse of the normal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/norm-inv-function",
    "note": "",
    "syntax": "NORM.INV(probability, mean, standard_dev)",
    "example": "=NORM.INV(0.95, 75, 10)"
  },
  {
    "name": "NORM.S.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the standard normal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/norm-s-dist-function",
    "note": "",
    "syntax": "NORM.S.DIST(z, cumulative)",
    "example": "=NORM.S.DIST(1.96, TRUE)"
  },
  {
    "name": "NORM.S.INV",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the inverse of the standard normal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/norm-s-inv-function",
    "note": "",
    "syntax": "NORM.S.INV(probability)",
    "example": "=NORM.S.INV(0.975)"
  },
  {
    "name": "NORMDIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the normal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/normdist-function",
    "note": "",
    "syntax": "NORMDIST(x, mean, standard_dev, cumulative)",
    "example": "=NORMDIST(80, 75, 10, TRUE)"
  },
  {
    "name": "NORMINV",
    "category": "Statistical",
    "version": "",
    "summary": "Get the inverse of the normal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/norminv-function",
    "note": "",
    "syntax": "NORMINV(probability, mean, standard_dev)",
    "example": "=NORMINV(0.95, 75, 10)"
  },
  {
    "name": "NORMSDIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the standard normal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/normsdist-function",
    "note": "",
    "syntax": "NORMSDIST(z)",
    "example": "=NORMSDIST(1.96)"
  },
  {
    "name": "NORMSINV",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the inverse of the standard normal cumulative distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/normsinv-function",
    "note": "",
    "syntax": "NORMSINV(probability)",
    "example": "=NORMSINV(0.975)"
  },
  {
    "name": "NOT",
    "category": "Logical",
    "version": "",
    "summary": "Reverse a logical value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/not-function",
    "note": "",
    "syntax": "NOT(logical)",
    "example": "=NOT(TRUE)"
  },
  {
    "name": "NOW",
    "category": "Date and time",
    "version": "",
    "summary": "Get the current date and time.",
    "url": "https://support.microsoft.com/en-us/excel/functions/now-function",
    "note": "",
    "syntax": "NOW()",
    "example": "=NOW()"
  },
  {
    "name": "NPER",
    "category": "Financial",
    "version": "",
    "summary": "Get the number of periods for an investment.",
    "url": "https://support.microsoft.com/en-us/excel/functions/nper-function",
    "note": "",
    "syntax": "NPER(rate, pmt, pv, [fv], [type])",
    "example": "=NPER(0.05/12, -200, 10000)"
  },
  {
    "name": "NPV",
    "category": "Financial",
    "version": "",
    "summary": "Discount future cash flows to their present value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/npv-function",
    "note": "",
    "syntax": "NPV(rate, value1, [value2], …)",
    "example": "=NPV(10%, B2:B10)"
  },
  {
    "name": "NUMBERVALUE",
    "category": "Text",
    "version": "2013",
    "summary": "Convert text to number in a locale-independent manner.",
    "url": "https://support.microsoft.com/en-us/excel/functions/numbervalue-function",
    "note": "",
    "syntax": "NUMBERVALUE(text, [decimal_separator], [group_separator])",
    "example": "=NUMBERVALUE(\"1.234,50\", \",\", \".\")"
  },
  {
    "name": "OCT2BIN",
    "category": "Engineering",
    "version": "",
    "summary": "Convert an octal number to binary.",
    "url": "https://support.microsoft.com/en-us/excel/functions/oct2bin-function",
    "note": "",
    "syntax": "OCT2BIN(number, [places])",
    "example": "=OCT2BIN(\"27\")"
  },
  {
    "name": "OCT2DEC",
    "category": "Engineering",
    "version": "",
    "summary": "Convert an octal number to decimal.",
    "url": "https://support.microsoft.com/en-us/excel/functions/oct2dec-function",
    "note": "",
    "syntax": "OCT2DEC(number)",
    "example": "=OCT2DEC(\"27\")"
  },
  {
    "name": "OCT2HEX",
    "category": "Engineering",
    "version": "",
    "summary": "Convert an octal number to hexadecimal.",
    "url": "https://support.microsoft.com/en-us/excel/functions/oct2hex-function",
    "note": "",
    "syntax": "OCT2HEX(number, [places])",
    "example": "=OCT2HEX(\"27\")"
  },
  {
    "name": "ODD",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Round a number up to the nearest odd integer.",
    "url": "https://support.microsoft.com/en-us/excel/functions/odd-function",
    "note": "",
    "syntax": "ODD(number)",
    "example": "=ODD(-3.2)"
  },
  {
    "name": "ODDFPRICE",
    "category": "Financial",
    "version": "",
    "summary": "Get the price per $100 face value of a security with an odd first period.",
    "url": "https://support.microsoft.com/en-us/excel/functions/oddfprice-function",
    "note": "",
    "syntax": "ODDFPRICE(settlement, maturity, issue, first_coupon, rate, yld, redemption, frequency, [basis])",
    "example": "=ODDFPRICE(DATE(2025,2,1), DATE(2028,12,31), DATE(2025,1,1), DATE(2025,6,30), 5%, 4%, 100, 2)"
  },
  {
    "name": "ODDFYIELD",
    "category": "Financial",
    "version": "",
    "summary": "Get the yield of a security with an odd first period.",
    "url": "https://support.microsoft.com/en-us/excel/functions/oddfyield-function",
    "note": "",
    "syntax": "ODDFYIELD(settlement, maturity, issue, first_coupon, rate, pr, redemption, frequency, [basis])",
    "example": "=ODDFYIELD(DATE(2025,2,1), DATE(2028,12,31), DATE(2025,1,1), DATE(2025,6,30), 5%, 102, 100, 2)"
  },
  {
    "name": "ODDLPRICE",
    "category": "Financial",
    "version": "",
    "summary": "Get the price per $100 face value of a security with an odd last period.",
    "url": "https://support.microsoft.com/en-us/excel/functions/oddlprice-function",
    "note": "",
    "syntax": "ODDLPRICE(settlement, maturity, last_interest, rate, yld, redemption, frequency, [basis])",
    "example": "=ODDLPRICE(DATE(2025,8,1), DATE(2026,3,15), DATE(2025,6,30), 5%, 4%, 100, 2)"
  },
  {
    "name": "ODDLYIELD",
    "category": "Financial",
    "version": "",
    "summary": "Get the yield of a security with an odd last period.",
    "url": "https://support.microsoft.com/en-us/excel/functions/oddlyield-function",
    "note": "",
    "syntax": "ODDLYIELD(settlement, maturity, last_interest, rate, pr, redemption, frequency, [basis])",
    "example": "=ODDLYIELD(DATE(2025,8,1), DATE(2026,3,15), DATE(2025,6,30), 5%, 102, 100, 2)"
  },
  {
    "name": "OFFSET",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Get a reference offset from a given reference.",
    "url": "https://support.microsoft.com/en-us/excel/functions/offset-function",
    "note": "",
    "syntax": "OFFSET(reference, rows, cols, [height], [width])",
    "example": "=OFFSET(A2, 2, 1, 4, 1)"
  },
  {
    "name": "OR",
    "category": "Logical",
    "version": "",
    "summary": "Check whether at least one condition is true.",
    "url": "https://support.microsoft.com/en-us/excel/functions/or-function",
    "note": "",
    "syntax": "OR(logical1, [logical2], …)",
    "example": "=OR(TRUE, FALSE)"
  },
  {
    "name": "PDURATION",
    "category": "Financial",
    "version": "2013",
    "summary": "Get the number of periods required by an investment to reach a specified value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/pduration-function",
    "note": "",
    "syntax": "PDURATION(rate, pv, fv)",
    "example": "=PDURATION(5%, 1000, 1500)"
  },
  {
    "name": "PEARSON",
    "category": "Statistical",
    "version": "",
    "summary": "Get the Pearson product moment correlation coefficient.",
    "url": "https://support.microsoft.com/en-us/excel/functions/pearson-function",
    "note": "",
    "syntax": "PEARSON(array1, array2)",
    "example": "=PEARSON(A2:A10, B2:B10)"
  },
  {
    "name": "PERCENTILE",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the k-th percentile of values in a range.",
    "url": "https://support.microsoft.com/en-us/excel/functions/percentile-function",
    "note": "",
    "syntax": "PERCENTILE(array, k)",
    "example": "=PERCENTILE(A2:A20, 0.9)"
  },
  {
    "name": "PERCENTILE.EXC",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the k-th percentile of values in a range, where k is in the range 0..1, exclusive.",
    "url": "https://support.microsoft.com/en-us/excel/functions/percentile-exc-function",
    "note": "",
    "syntax": "PERCENTILE.EXC(array, k)",
    "example": "=PERCENTILE.EXC(A2:A20, 0.9)"
  },
  {
    "name": "PERCENTILE.INC",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the k-th percentile of values in a range.",
    "url": "https://support.microsoft.com/en-us/excel/functions/percentile-inc-function",
    "note": "",
    "syntax": "PERCENTILE.INC(array, k)",
    "example": "=PERCENTILE.INC(A2:A20, 0.9)"
  },
  {
    "name": "PERCENTOF",
    "category": "Math and trigonometry",
    "version": "Microsoft 365",
    "summary": "Sums the values in the subset and divides it by all the values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/percentof-function",
    "note": "",
    "syntax": "PERCENTOF(data_subset, data_all)",
    "example": "=PERCENTOF(B2:B4, B2:B10)"
  },
  {
    "name": "PERCENTRANK",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the percentage rank of a value in a data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/percentrank-function",
    "note": "",
    "syntax": "PERCENTRANK(array, x, [significance])",
    "example": "=PERCENTRANK(A2:A20, A5)"
  },
  {
    "name": "PERCENTRANK.EXC",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the rank of a value in a data set as a percentage (0..1, exclusive) of the data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/percentrank-exc-function",
    "note": "",
    "syntax": "PERCENTRANK.EXC(array, x, [significance])",
    "example": "=PERCENTRANK.EXC(A2:A20, A5)"
  },
  {
    "name": "PERCENTRANK.INC",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the percentage rank of a value in a data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/percentrank-inc-function",
    "note": "",
    "syntax": "PERCENTRANK.INC(array, x, [significance])",
    "example": "=PERCENTRANK.INC(A2:A20, A5)"
  },
  {
    "name": "PERMUT",
    "category": "Statistical",
    "version": "",
    "summary": "Get the number of permutations for a given number of objects.",
    "url": "https://support.microsoft.com/en-us/excel/functions/permut-function",
    "note": "",
    "syntax": "PERMUT(number, number_chosen)",
    "example": "=PERMUT(8, 3)"
  },
  {
    "name": "PERMUTATIONA",
    "category": "Statistical",
    "version": "2013",
    "summary": "Get the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects.",
    "url": "https://support.microsoft.com/en-us/excel/functions/permutationa-function",
    "note": "",
    "syntax": "PERMUTATIONA(number, number_chosen)",
    "example": "=PERMUTATIONA(8, 3)"
  },
  {
    "name": "PHI",
    "category": "Statistical",
    "version": "2013",
    "summary": "Get the value of the density function for a standard normal distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/phi-function",
    "note": "",
    "syntax": "PHI(number)",
    "example": "=PHI(3)"
  },
  {
    "name": "PHONETIC",
    "category": "Text",
    "version": "",
    "summary": "Extract the phonetic (furigana) characters from a text string.",
    "url": "https://support.microsoft.com/en-us/excel/functions/phonetic-function",
    "note": "",
    "syntax": "PHONETIC(text)",
    "example": "=PHONETIC(A2)"
  },
  {
    "name": "PI",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the value of pi.",
    "url": "https://support.microsoft.com/en-us/excel/functions/pi-function",
    "note": "",
    "syntax": "PI()",
    "example": "=PI()"
  },
  {
    "name": "PIVOTBY",
    "category": "Lookup and reference",
    "version": "Microsoft 365",
    "summary": "Compute summaries grouped by both row and column fields.",
    "url": "https://support.microsoft.com/en-us/excel/functions/pivotby-function",
    "note": "",
    "syntax": "PIVOTBY(row_fields, col_fields, values, function, [field_headers], [row_total_depth], [row_sort_order], [col_total_depth], [col_sort_order], [filter_array], [relative_to])",
    "example": "=PIVOTBY(A2:A20, B2:B20, C2:C20, SUM)"
  },
  {
    "name": "PMT",
    "category": "Financial",
    "version": "",
    "summary": "Calculate a fixed periodic loan payment.",
    "url": "https://support.microsoft.com/en-us/excel/functions/pmt-function",
    "note": "",
    "syntax": "PMT(rate, nper, pv, [fv], [type])",
    "example": "=PMT(5%/12, 60, -10000)"
  },
  {
    "name": "POISSON",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the Poisson distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/poisson-function",
    "note": "",
    "syntax": "POISSON(x, mean, cumulative)",
    "example": "=POISSON(3, 2, FALSE)"
  },
  {
    "name": "POISSON.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the Poisson distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/poisson-dist-function",
    "note": "",
    "syntax": "POISSON.DIST(x, mean, cumulative)",
    "example": "=POISSON.DIST(3, 2, FALSE)"
  },
  {
    "name": "POWER",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Raise a number to a power.",
    "url": "https://support.microsoft.com/en-us/excel/functions/power-function",
    "note": "",
    "syntax": "POWER(number, power)",
    "example": "=POWER(3, 4)"
  },
  {
    "name": "PPMT",
    "category": "Financial",
    "version": "",
    "summary": "Get the payment on the principal for an investment for a given period.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ppmt-function",
    "note": "",
    "syntax": "PPMT(rate, per, nper, pv, [fv], [type])",
    "example": "=PPMT(0.05/12, 1, 60, -10000)"
  },
  {
    "name": "PRICE",
    "category": "Financial",
    "version": "",
    "summary": "Get the price per $100 face value of a security that pays periodic interest.",
    "url": "https://support.microsoft.com/en-us/excel/functions/price-function",
    "note": "",
    "syntax": "PRICE(settlement, maturity, rate, yld, redemption, frequency, [basis])",
    "example": "=PRICE(DATE(2025,2,1), DATE(2028,12,31), 5%, 4%, 100, 2)"
  },
  {
    "name": "PRICEDISC",
    "category": "Financial",
    "version": "",
    "summary": "Get the price per $100 face value of a discounted security.",
    "url": "https://support.microsoft.com/en-us/excel/functions/pricedisc-function",
    "note": "",
    "syntax": "PRICEDISC(settlement, maturity, discount, redemption, [basis])",
    "example": "=PRICEDISC(DATE(2025,1,1), DATE(2025,7,1), 5%, 100)"
  },
  {
    "name": "PRICEMAT",
    "category": "Financial",
    "version": "",
    "summary": "Get the price per $100 face value of a security that pays interest at maturity.",
    "url": "https://support.microsoft.com/en-us/excel/functions/pricemat-function",
    "note": "",
    "syntax": "PRICEMAT(settlement, maturity, issue, rate, yld, [basis])",
    "example": "=PRICEMAT(DATE(2025,2,1), DATE(2025,7,1), DATE(2025,1,1), 5%, 4%)"
  },
  {
    "name": "PROB",
    "category": "Statistical",
    "version": "",
    "summary": "Get the probability that values in a range are between two limits.",
    "url": "https://support.microsoft.com/en-us/excel/functions/prob-function",
    "note": "",
    "syntax": "PROB(x_range, prob_range, lower_limit, [upper_limit])",
    "example": "=PROB(A2:A6, B2:B6, 2, 4)"
  },
  {
    "name": "PRODUCT",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Multiply numbers together.",
    "url": "https://support.microsoft.com/en-us/excel/functions/product-function",
    "note": "",
    "syntax": "PRODUCT(number1, [number2], …)",
    "example": "=PRODUCT(2, 3, 4)"
  },
  {
    "name": "PROPER",
    "category": "Text",
    "version": "",
    "summary": "Capitalizes the first letter in each word of a text value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/proper-function",
    "note": "",
    "syntax": "PROPER(text)",
    "example": "=PROPER(\"ADA LOVELACE\")"
  },
  {
    "name": "PV",
    "category": "Financial",
    "version": "",
    "summary": "Get the present value of an investment.",
    "url": "https://support.microsoft.com/en-us/excel/functions/pv-function",
    "note": "",
    "syntax": "PV(rate, nper, pmt, [fv], [type])",
    "example": "=PV(0.05/12, 60, -200)"
  },
  {
    "name": "QUARTILE",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the quartile of a data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/quartile-function",
    "note": "",
    "syntax": "QUARTILE(array, quart)",
    "example": "=QUARTILE(A2:A20, 3)"
  },
  {
    "name": "QUARTILE.EXC",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the quartile of the data set, based on percentile values from 0..1, exclusive.",
    "url": "https://support.microsoft.com/en-us/excel/functions/quartile-exc-function",
    "note": "",
    "syntax": "QUARTILE.EXC(array, quart)",
    "example": "=QUARTILE.EXC(A2:A20, 3)"
  },
  {
    "name": "QUARTILE.INC",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the quartile of a data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/quartile-inc-function",
    "note": "",
    "syntax": "QUARTILE.INC(array, quart)",
    "example": "=QUARTILE.INC(A2:A20, 3)"
  },
  {
    "name": "QUOTIENT",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Keep the integer part of a division result.",
    "url": "https://support.microsoft.com/en-us/excel/functions/quotient-function",
    "note": "",
    "syntax": "QUOTIENT(numerator, denominator)",
    "example": "=QUOTIENT(17, 5)"
  },
  {
    "name": "RADIANS",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Convert degrees to radians.",
    "url": "https://support.microsoft.com/en-us/excel/functions/radians-function",
    "note": "",
    "syntax": "RADIANS(angle)",
    "example": "=RADIANS(90)"
  },
  {
    "name": "RAND",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Generate a random decimal from zero up to one.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rand-function",
    "note": "",
    "syntax": "RAND()",
    "example": "=RAND()"
  },
  {
    "name": "RANDARRAY",
    "category": "Math and trigonometry",
    "version": "2021",
    "summary": "Get an array of random numbers between 0 and 1.",
    "url": "https://support.microsoft.com/en-us/excel/functions/randarray-function",
    "note": "",
    "syntax": "RANDARRAY([rows], [columns], [min], [max], [whole_number])",
    "example": "=RANDARRAY(4, 3, 1, 10, TRUE)"
  },
  {
    "name": "RANDBETWEEN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Generate a random integer within the specified bounds.",
    "url": "https://support.microsoft.com/en-us/excel/functions/randbetween-function",
    "note": "",
    "syntax": "RANDBETWEEN(bottom, top)",
    "example": "=RANDBETWEEN(1, 6)"
  },
  {
    "name": "RANK",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the rank of a number in a list of numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rank-function",
    "note": "",
    "syntax": "RANK(number, ref, [order])",
    "example": "=RANK(A2, A2:A20, 0)"
  },
  {
    "name": "RANK.AVG",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the rank of a number in a list of numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rank-avg-function",
    "note": "",
    "syntax": "RANK.AVG(number, ref, [order])",
    "example": "=RANK.AVG(A2, A2:A20, 0)"
  },
  {
    "name": "RANK.EQ",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the rank of a number in a list of numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rank-eq-function",
    "note": "",
    "syntax": "RANK.EQ(number, ref, [order])",
    "example": "=RANK.EQ(A2, A2:A20, 0)"
  },
  {
    "name": "RATE",
    "category": "Financial",
    "version": "",
    "summary": "Get the interest rate per period of an annuity.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rate-function",
    "note": "",
    "syntax": "RATE(nper, pmt, pv, [fv], [type], [guess])",
    "example": "=RATE(60, -200, 10000)"
  },
  {
    "name": "RECEIVED",
    "category": "Financial",
    "version": "",
    "summary": "Get the amount received at maturity for a fully invested security.",
    "url": "https://support.microsoft.com/en-us/excel/functions/received-function",
    "note": "",
    "syntax": "RECEIVED(settlement, maturity, investment, discount, [basis])",
    "example": "=RECEIVED(DATE(2025,1,1), DATE(2025,7,1), 970, 5%)"
  },
  {
    "name": "REDUCE",
    "category": "Logical",
    "version": "2024",
    "summary": "Reduces an array to an accumulated value by applying a LAMBDA to each value and returning the total value in the accumulator.",
    "url": "https://support.microsoft.com/en-us/excel/functions/reduce-function",
    "note": "",
    "syntax": "REDUCE([initial_value], array, lambda)",
    "example": "=REDUCE(0, A2:A10, LAMBDA(acc, x, acc+x))"
  },
  {
    "name": "REGEXEXTRACT",
    "category": "Text",
    "version": "Microsoft 365",
    "summary": "Extract text matching a regular expression.",
    "url": "https://support.microsoft.com/en-us/excel/functions/regexextract-function",
    "note": "",
    "syntax": "REGEXEXTRACT(text, pattern, [return_mode], [case_sensitivity])",
    "example": "=REGEXEXTRACT(\"AB-123\", \"[0-9]+\")"
  },
  {
    "name": "REGEXREPLACE",
    "category": "Text",
    "version": "Microsoft 365",
    "summary": "Replace text matching a regular expression.",
    "url": "https://support.microsoft.com/en-us/excel/functions/regexreplace-function",
    "note": "",
    "syntax": "REGEXREPLACE(text, pattern, replacement, [occurrence], [case_sensitivity])",
    "example": "=REGEXREPLACE(\"AB-123\", \"[0-9]+\", \"000\")"
  },
  {
    "name": "REGEXTEST",
    "category": "Text",
    "version": "Microsoft 365",
    "summary": "Check whether text matches a regular expression.",
    "url": "https://support.microsoft.com/en-us/excel/functions/regextest-function",
    "note": "",
    "syntax": "REGEXTEST(text, pattern, [case_sensitivity])",
    "example": "=REGEXTEST(\"AB-123\", \"^[A-Z]{2}-[0-9]+$\")"
  },
  {
    "name": "REGISTER.ID",
    "category": "Add-in and Automation",
    "version": "",
    "summary": "Get the register ID of the specified dynamic link library (DLL) or code resource that has been previously registered.",
    "url": "https://support.microsoft.com/en-us/excel/functions/register-id-function",
    "note": "",
    "syntax": "REGISTER.ID(module_text, procedure, type_text)",
    "example": ""
  },
  {
    "name": "REPLACE",
    "category": "Text",
    "version": "",
    "summary": "Replace characters within text.",
    "url": "https://support.microsoft.com/en-us/excel/functions/replace-function",
    "note": "",
    "syntax": "REPLACE(old_text, start_num, num_chars, new_text)",
    "example": "=REPLACE(\"INV-2026-08\", 5, 4, \"2027\")"
  },
  {
    "name": "REPLACEB",
    "category": "Text",
    "version": "",
    "summary": "Replace characters within text.",
    "url": "https://support.microsoft.com/en-us/excel/functions/replace-function",
    "note": "",
    "syntax": "REPLACEB(old_text, start_num, num_bytes, new_text)",
    "example": "=REPLACEB(\"ABC\", 2, 1, \"D\")"
  },
  {
    "name": "REPT",
    "category": "Text",
    "version": "",
    "summary": "Repeat text a specified number of times.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rept-function",
    "note": "",
    "syntax": "REPT(text, number_times)",
    "example": "=REPT(\"ab\", 3)"
  },
  {
    "name": "RIGHT",
    "category": "Text",
    "version": "",
    "summary": "Take characters from the end of text.",
    "url": "https://support.microsoft.com/en-us/excel/functions/right-function",
    "note": "",
    "syntax": "RIGHT(text, [num_chars])",
    "example": "=RIGHT(\"Spreadsheet\", 5)"
  },
  {
    "name": "RIGHTB",
    "category": "Text",
    "version": "",
    "summary": "Get the rightmost characters from a text value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/right-function",
    "note": "",
    "syntax": "RIGHTB(text, [num_bytes])",
    "example": "=RIGHTB(\"ABC\", 2)"
  },
  {
    "name": "ROMAN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Convert an arabic numeral to roman, as text.",
    "url": "https://support.microsoft.com/en-us/excel/functions/roman-function",
    "note": "",
    "syntax": "ROMAN(number, [form])",
    "example": "=ROMAN(49)"
  },
  {
    "name": "ROUND",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Round to the specified number of digits.",
    "url": "https://support.microsoft.com/en-us/excel/functions/round-function",
    "note": "",
    "syntax": "ROUND(number, num_digits)",
    "example": "=ROUND(24.365, 2)"
  },
  {
    "name": "ROUNDDOWN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Round toward zero.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rounddown-function",
    "note": "",
    "syntax": "ROUNDDOWN(number, num_digits)",
    "example": "=ROUNDDOWN(24.369, 2)"
  },
  {
    "name": "ROUNDUP",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Round away from zero.",
    "url": "https://support.microsoft.com/en-us/excel/functions/roundup-function",
    "note": "",
    "syntax": "ROUNDUP(number, num_digits)",
    "example": "=ROUNDUP(24.361, 2)"
  },
  {
    "name": "ROW",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Get the worksheet row number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/row-function",
    "note": "",
    "syntax": "ROW([reference])",
    "example": "=ROW(B12)"
  },
  {
    "name": "ROWS",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Count rows in a reference or array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rows-function",
    "note": "",
    "syntax": "ROWS(array)",
    "example": "=ROWS(A2:C10)"
  },
  {
    "name": "RRI",
    "category": "Financial",
    "version": "2013",
    "summary": "Get an equivalent interest rate for the growth of an investment.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rri-function",
    "note": "",
    "syntax": "RRI(nper, pv, fv)",
    "example": "=RRI(5, 1000, 1500)"
  },
  {
    "name": "RSQ",
    "category": "Statistical",
    "version": "",
    "summary": "Get the square of the Pearson product moment correlation coefficient.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rsq-function",
    "note": "",
    "syntax": "RSQ(array1, array2)",
    "example": "=RSQ(A2:A10, B2:B10)"
  },
  {
    "name": "RTD",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Retrieve real-time data from a program that supports COM automation.",
    "url": "https://support.microsoft.com/en-us/excel/functions/rtd-function",
    "note": "",
    "syntax": "RTD(progID, server, topic1, [topic2], …)",
    "example": ""
  },
  {
    "name": "SCAN",
    "category": "Logical",
    "version": "2024",
    "summary": "Scans an array by applying a LAMBDA to each value and returns an array that has each intermediate value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/scan-function",
    "note": "",
    "syntax": "SCAN([initial_value], array, lambda)",
    "example": "=SCAN(0, A2:A10, LAMBDA(acc, x, acc+x))"
  },
  {
    "name": "SEARCH",
    "category": "Text",
    "version": "",
    "summary": "Find a substring's position without matching case.",
    "url": "https://support.microsoft.com/en-us/excel/functions/search-function",
    "note": "",
    "syntax": "SEARCH(find_text, within_text, [start_num])",
    "example": "=SEARCH(\"B\", \"abc\")"
  },
  {
    "name": "SEARCHB",
    "category": "Text",
    "version": "",
    "summary": "Find one text value within another (not case-sensitive).",
    "url": "https://support.microsoft.com/en-us/excel/functions/search-function",
    "note": "",
    "syntax": "SEARCHB(find_text, within_text, [start_num])",
    "example": "=SEARCHB(\"B\", \"ABC\")"
  },
  {
    "name": "SEC",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get the secant of an angle.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sec-function",
    "note": "",
    "syntax": "SEC(number)",
    "example": "=SEC(0.8)"
  },
  {
    "name": "SECH",
    "category": "Math and trigonometry",
    "version": "2013",
    "summary": "Get the hyperbolic secant of an angle.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sech-function",
    "note": "",
    "syntax": "SECH(number)",
    "example": "=SECH(0.8)"
  },
  {
    "name": "SECOND",
    "category": "Date and time",
    "version": "",
    "summary": "Convert a serial number to a second.",
    "url": "https://support.microsoft.com/en-us/excel/functions/second-function",
    "note": "",
    "syntax": "SECOND(serial_number)",
    "example": "=SECOND(TIME(14, 30, 15))"
  },
  {
    "name": "SEQUENCE",
    "category": "Math and trigonometry",
    "version": "2021",
    "summary": "Generate an array of evenly spaced numbers.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sequence-function",
    "note": "",
    "syntax": "SEQUENCE(rows, [columns], [start], [step])",
    "example": "=SEQUENCE(5, 1, 10, 2)"
  },
  {
    "name": "SERIESSUM",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the sum of a power series based on the formula.",
    "url": "https://support.microsoft.com/en-us/excel/functions/seriessum-function",
    "note": "",
    "syntax": "SERIESSUM(x, n, m, coefficients)",
    "example": "=SERIESSUM(2, 0, 1, {1,2,3})"
  },
  {
    "name": "SHEET",
    "category": "Information",
    "version": "2013",
    "summary": "Get the sheet number of the referenced sheet.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sheet-function",
    "note": "",
    "syntax": "SHEET([value])",
    "example": "=SHEET(A1)"
  },
  {
    "name": "SHEETS",
    "category": "Information",
    "version": "2013",
    "summary": "Get the number of sheets in a reference.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sheets-function",
    "note": "",
    "syntax": "SHEETS([reference])",
    "example": "=SHEETS(A1)"
  },
  {
    "name": "SIGN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Return -1, 0, or 1 based on the sign.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sign-function",
    "note": "",
    "syntax": "SIGN(number)",
    "example": "=SIGN(-12)"
  },
  {
    "name": "SIN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Find the sine of an angle in radians.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sin-function",
    "note": "",
    "syntax": "SIN(number)",
    "example": "=SIN(0.5)"
  },
  {
    "name": "SINH",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the hyperbolic sine of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sinh-function",
    "note": "",
    "syntax": "SINH(number)",
    "example": "=SINH(0.8)"
  },
  {
    "name": "SKEW",
    "category": "Statistical",
    "version": "",
    "summary": "Get the skewness of a distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/skew-function",
    "note": "",
    "syntax": "SKEW(number1, [number2], …)",
    "example": "=SKEW(A2:A20)"
  },
  {
    "name": "SKEW.P",
    "category": "Statistical",
    "version": "2013",
    "summary": "Get the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean.",
    "url": "https://support.microsoft.com/en-us/excel/functions/skew-p-function",
    "note": "",
    "syntax": "SKEW.P(number1, [number2], …)",
    "example": "=SKEW.P(A2:A20)"
  },
  {
    "name": "SLN",
    "category": "Financial",
    "version": "",
    "summary": "Get the straight-line depreciation of an asset for one period.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sln-function",
    "note": "",
    "syntax": "SLN(cost, salvage, life)",
    "example": "=SLN(5000, 500, 5)"
  },
  {
    "name": "SLOPE",
    "category": "Statistical",
    "version": "",
    "summary": "Get the slope of the linear regression line.",
    "url": "https://support.microsoft.com/en-us/excel/functions/slope-function",
    "note": "",
    "syntax": "SLOPE(known_y's, known_x's)",
    "example": "=SLOPE(B2:B10, A2:A10)"
  },
  {
    "name": "SMALL",
    "category": "Statistical",
    "version": "",
    "summary": "Get the k-th smallest value in a data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/small-function",
    "note": "",
    "syntax": "SMALL(array, k)",
    "example": "=SMALL(A2:A20, 3)"
  },
  {
    "name": "SORT",
    "category": "Lookup and reference",
    "version": "2021",
    "summary": "Sort a range and return the sorted values as an array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sort-function",
    "note": "",
    "syntax": "SORT(array, [sort_index], [sort_order], [by_col])",
    "example": "=SORT(A2:C20, 3, -1)"
  },
  {
    "name": "SORTBY",
    "category": "Lookup and reference",
    "version": "2021",
    "summary": "Sort values using one or more separate keys.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sortby-function",
    "note": "",
    "syntax": "SORTBY(array, by_array1, [sort_order1], [by_array2, sort_order2], …)",
    "example": "=SORTBY(A2:C20, C2:C20, -1)"
  },
  {
    "name": "SQRT",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Find the positive square root.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sqrt-function",
    "note": "",
    "syntax": "SQRT(number)",
    "example": "=SQRT(81)"
  },
  {
    "name": "SQRTPI",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the square root of (number * pi).",
    "url": "https://support.microsoft.com/en-us/excel/functions/sqrtpi-function",
    "note": "",
    "syntax": "SQRTPI(number)",
    "example": "=SQRTPI(3)"
  },
  {
    "name": "STANDARDIZE",
    "category": "Statistical",
    "version": "",
    "summary": "Get a normalized value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/standardize-function",
    "note": "",
    "syntax": "STANDARDIZE(x, mean, standard_dev)",
    "example": "=STANDARDIZE(80, 75, 10)"
  },
  {
    "name": "STDEV",
    "category": "Compatibility",
    "version": "",
    "summary": "Estimate standard deviation based on a sample.",
    "url": "https://support.microsoft.com/en-us/excel/functions/stdev-function",
    "note": "",
    "syntax": "STDEV(number1, [number2], …)",
    "example": "=STDEV(A2:A20)"
  },
  {
    "name": "STDEV.P",
    "category": "Statistical",
    "version": "2010",
    "summary": "Calculate standard deviation for an entire population.",
    "url": "https://support.microsoft.com/en-us/excel/functions/stdev-p-function",
    "note": "",
    "syntax": "STDEV.P(number1, [number2], …)",
    "example": "=STDEV.P(8, 10, 12)"
  },
  {
    "name": "STDEV.S",
    "category": "Statistical",
    "version": "2010",
    "summary": "Estimate standard deviation from a sample.",
    "url": "https://support.microsoft.com/en-us/excel/functions/stdev-s-function",
    "note": "",
    "syntax": "STDEV.S(number1, [number2], …)",
    "example": "=STDEV.S(8, 10, 12)"
  },
  {
    "name": "STDEVA",
    "category": "Statistical",
    "version": "",
    "summary": "Estimate standard deviation based on a sample, including numbers, text, and logical values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/stdeva-function",
    "note": "",
    "syntax": "STDEVA(number1, [number2], …)",
    "example": "=STDEVA(A2:A20)"
  },
  {
    "name": "STDEVP",
    "category": "Compatibility",
    "version": "",
    "summary": "Calculate standard deviation based on the entire population.",
    "url": "https://support.microsoft.com/en-us/excel/functions/stdevp-function",
    "note": "",
    "syntax": "STDEVP(number1, [number2], …)",
    "example": "=STDEVP(A2:A20)"
  },
  {
    "name": "STDEVPA",
    "category": "Statistical",
    "version": "",
    "summary": "Calculate standard deviation based on the entire population, including numbers, text, and logical values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/stdevpa-function",
    "note": "",
    "syntax": "STDEVPA(number1, [number2], …)",
    "example": "=STDEVPA(A2:A20)"
  },
  {
    "name": "STEYX",
    "category": "Statistical",
    "version": "",
    "summary": "Get the standard error of the predicted y-value for each x in the regression.",
    "url": "https://support.microsoft.com/en-us/excel/functions/steyx-function",
    "note": "",
    "syntax": "STEYX(known_y's, known_x's)",
    "example": "=STEYX(B2:B10, A2:A10)"
  },
  {
    "name": "STOCKHISTORY",
    "category": "Information",
    "version": "",
    "summary": "Retrieve historical data about a financial instrument and loads it as an array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/stockhistory-function",
    "note": "",
    "syntax": "STOCKHISTORY(stock, start_date, [end_date], [interval], [headers], [property0], [property1], …)",
    "example": "=STOCKHISTORY(\"MSFT\", DATE(2026, 1, 2), DATE(2026, 1, 9))"
  },
  {
    "name": "SUBSTITUTE",
    "category": "Text",
    "version": "",
    "summary": "Replace matching text, optionally targeting one occurrence.",
    "url": "https://support.microsoft.com/en-us/excel/functions/substitute-function",
    "note": "",
    "syntax": "SUBSTITUTE(text, old_text, new_text, [instance_num])",
    "example": "=SUBSTITUTE(\"red red\", \"red\", \"blue\", 2)"
  },
  {
    "name": "SUBTOTAL",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Calculate a summary that ignores filtered-out rows.",
    "url": "https://support.microsoft.com/en-us/excel/functions/subtotal-function",
    "note": "",
    "syntax": "SUBTOTAL(function_num, ref1, [ref2], …)",
    "example": "=SUBTOTAL(9, B2:B20)"
  },
  {
    "name": "SUM",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Add numbers or the values in a range.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sum-function",
    "note": "",
    "syntax": "SUM(number1, [number2], …)",
    "example": "=SUM(12, 18, 25)"
  },
  {
    "name": "SUMIF",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Add values that meet one condition.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sumif-function",
    "note": "",
    "syntax": "SUMIF(range, criteria, [sum_range])",
    "example": "=SUMIF(A2:A10, \"North\", B2:B10)"
  },
  {
    "name": "SUMIFS",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Add values whose rows match several conditions.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sumifs-function",
    "note": "",
    "syntax": "SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], …)",
    "example": "=SUMIFS(C2:C10, A2:A10, \"North\", B2:B10, \">10\")"
  },
  {
    "name": "SUMPRODUCT",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the sum of the products of corresponding array components.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sumproduct-function",
    "note": "",
    "syntax": "SUMPRODUCT(array1, [array2], …)",
    "example": "=SUMPRODUCT(B2:B10, C2:C10)"
  },
  {
    "name": "SUMSQ",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the sum of the squares of the arguments.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sumsq-function",
    "note": "",
    "syntax": "SUMSQ(number1, [number2], …)",
    "example": "=SUMSQ(8, 10, 12)"
  },
  {
    "name": "SUMX2MY2",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the sum of the difference of squares of corresponding values in two arrays.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sumx2my2-function",
    "note": "",
    "syntax": "SUMX2MY2(array_x, array_y)",
    "example": "=SUMX2MY2(A2:A10, B2:B10)"
  },
  {
    "name": "SUMX2PY2",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the sum of the sum of squares of corresponding values in two arrays.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sumx2py2-function",
    "note": "",
    "syntax": "SUMX2PY2(array_x, array_y)",
    "example": "=SUMX2PY2(A2:A10, B2:B10)"
  },
  {
    "name": "SUMXMY2",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the sum of squares of differences of corresponding values in two arrays.",
    "url": "https://support.microsoft.com/en-us/excel/functions/sumxmy2-function",
    "note": "",
    "syntax": "SUMXMY2(array_x, array_y)",
    "example": "=SUMXMY2(A2:A10, B2:B10)"
  },
  {
    "name": "SWITCH",
    "category": "Logical",
    "version": "2019",
    "summary": "Evaluates an expression against a list of values and returns the result corresponding to the first matching value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/switch-function",
    "note": "",
    "syntax": "SWITCH(expression, value1, result1, [value2, result2], …)",
    "example": "=SWITCH(A2, \"N\", \"North\", \"S\", \"South\", \"Other\")"
  },
  {
    "name": "SYD",
    "category": "Financial",
    "version": "",
    "summary": "Get the sum-of-years' digits depreciation of an asset for a specified period.",
    "url": "https://support.microsoft.com/en-us/excel/functions/syd-function",
    "note": "",
    "syntax": "SYD(cost, salvage, life, per)",
    "example": "=SYD(5000, 500, 5, 2)"
  },
  {
    "name": "T",
    "category": "Text",
    "version": "",
    "summary": "Convert the supplied inputs to text.",
    "url": "https://support.microsoft.com/en-us/excel/functions/t-function",
    "note": "",
    "syntax": "T(text)",
    "example": "=T(\"North\")"
  },
  {
    "name": "T.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the Percentage Points (probability) for the Student t-distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/t-dist-function",
    "note": "",
    "syntax": "T.DIST(x, deg_freedom, cumulative)",
    "example": "=T.DIST(1.8, 12, TRUE)"
  },
  {
    "name": "T.DIST.2T",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the Percentage Points (probability) for the Student t-distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/t-dist-2t-function",
    "note": "",
    "syntax": "T.DIST.2T(x, deg_freedom)",
    "example": "=T.DIST.2T(1.8, 12)"
  },
  {
    "name": "T.DIST.RT",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the Student's t-distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/t-dist-rt-function",
    "note": "",
    "syntax": "T.DIST.RT(x, deg_freedom)",
    "example": "=T.DIST.RT(1.8, 12)"
  },
  {
    "name": "T.INV",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the t-value of the Student's t-distribution as a function of the probability and the degrees of freedom.",
    "url": "https://support.microsoft.com/en-us/excel/functions/t-inv-function",
    "note": "",
    "syntax": "T.INV(probability, deg_freedom)",
    "example": "=T.INV(0.05, 12)"
  },
  {
    "name": "T.INV.2T",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the inverse of the Student's t-distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/t-inv-2t-function",
    "note": "",
    "syntax": "T.INV.2T(probability, deg_freedom)",
    "example": "=T.INV.2T(0.05, 12)"
  },
  {
    "name": "T.TEST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the probability associated with a Student's t-test.",
    "url": "https://support.microsoft.com/en-us/excel/functions/t-test-function",
    "note": "",
    "syntax": "T.TEST(array1, array2, tails, type)",
    "example": "=T.TEST(A2:A10, B2:B10, 2, 1)"
  },
  {
    "name": "TAKE",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Keep rows or columns from either edge of an array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/take-function",
    "note": "",
    "syntax": "TAKE(array, rows, [columns])",
    "example": "=TAKE(A2:C20, 5)"
  },
  {
    "name": "TAN",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Find the tangent of an angle in radians.",
    "url": "https://support.microsoft.com/en-us/excel/functions/tan-function",
    "note": "",
    "syntax": "TAN(number)",
    "example": "=TAN(0.5)"
  },
  {
    "name": "TANH",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Get the hyperbolic tangent of a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/tanh-function",
    "note": "",
    "syntax": "TANH(number)",
    "example": "=TANH(0.8)"
  },
  {
    "name": "TBILLEQ",
    "category": "Financial",
    "version": "",
    "summary": "Get the bond-equivalent yield for a Treasury bill.",
    "url": "https://support.microsoft.com/en-us/excel/functions/tbilleq-function",
    "note": "",
    "syntax": "TBILLEQ(settlement, maturity, discount)",
    "example": "=TBILLEQ(DATE(2025,1,1), DATE(2025,7,1), 5%)"
  },
  {
    "name": "TBILLPRICE",
    "category": "Financial",
    "version": "",
    "summary": "Get the price per $100 face value for a Treasury bill.",
    "url": "https://support.microsoft.com/en-us/excel/functions/tbillprice-function",
    "note": "",
    "syntax": "TBILLPRICE(settlement, maturity, discount)",
    "example": "=TBILLPRICE(DATE(2025,1,1), DATE(2025,7,1), 5%)"
  },
  {
    "name": "TBILLYIELD",
    "category": "Financial",
    "version": "",
    "summary": "Get the yield for a Treasury bill.",
    "url": "https://support.microsoft.com/en-us/excel/functions/tbillyield-function",
    "note": "",
    "syntax": "TBILLYIELD(settlement, maturity, pr)",
    "example": "=TBILLYIELD(DATE(2025,1,1), DATE(2025,7,1), 98)"
  },
  {
    "name": "TDIST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the Student's t-distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/tdist-function",
    "note": "",
    "syntax": "TDIST(x, deg_freedom, tails)",
    "example": "=TDIST(1.8, 12, 2)"
  },
  {
    "name": "TEXT",
    "category": "Text",
    "version": "",
    "summary": "Convert a number to text in the chosen display format.",
    "url": "https://support.microsoft.com/en-us/excel/functions/text-function",
    "note": "",
    "syntax": "TEXT(value, format_text)",
    "example": "=TEXT(0.126, \"0.0%\")"
  },
  {
    "name": "TEXTAFTER",
    "category": "Text",
    "version": "2024",
    "summary": "Take the text after a delimiter.",
    "url": "https://support.microsoft.com/en-us/excel/functions/textafter-function",
    "note": "",
    "syntax": "TEXTAFTER(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])",
    "example": "=TEXTAFTER(\"Ada Lovelace\", \" \")"
  },
  {
    "name": "TEXTBEFORE",
    "category": "Text",
    "version": "2024",
    "summary": "Take the text before a delimiter.",
    "url": "https://support.microsoft.com/en-us/excel/functions/textbefore-function",
    "note": "",
    "syntax": "TEXTBEFORE(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])",
    "example": "=TEXTBEFORE(\"Ada Lovelace\", \" \")"
  },
  {
    "name": "TEXTJOIN",
    "category": "Text",
    "version": "2019",
    "summary": "Join text values with a separator.",
    "url": "https://support.microsoft.com/en-us/excel/functions/textjoin-function",
    "note": "",
    "syntax": "TEXTJOIN(delimiter, ignore_empty, text1, [text2], …)",
    "example": "=TEXTJOIN(\", \", TRUE, \"Red\", \"Blue\")"
  },
  {
    "name": "TEXTSPLIT",
    "category": "Text",
    "version": "2024",
    "summary": "Split text across worksheet rows or columns.",
    "url": "https://support.microsoft.com/en-us/excel/functions/textsplit-function",
    "note": "",
    "syntax": "TEXTSPLIT(text, col_delimiter, [row_delimiter], [ignore_empty], [match_mode], [pad_with])",
    "example": "=TEXTSPLIT(\"Red,Blue\", \",\")"
  },
  {
    "name": "TIME",
    "category": "Date and time",
    "version": "",
    "summary": "Get the serial number of a particular time.",
    "url": "https://support.microsoft.com/en-us/excel/functions/time-function",
    "note": "",
    "syntax": "TIME(hour, minute, second)",
    "example": "=TIME(14, 30, 15)"
  },
  {
    "name": "TIMEVALUE",
    "category": "Date and time",
    "version": "",
    "summary": "Convert a time in the form of text to a serial number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/timevalue-function",
    "note": "",
    "syntax": "TIMEVALUE(time_text)",
    "example": "=TIMEVALUE(\"14:30\")"
  },
  {
    "name": "TINV",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the inverse of the Student's t-distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/tinv-function",
    "note": "",
    "syntax": "TINV(probability, deg_freedom)",
    "example": "=TINV(0.05, 12)"
  },
  {
    "name": "TOCOL",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Get the array in a single column.",
    "url": "https://support.microsoft.com/en-us/excel/functions/tocol-function",
    "note": "",
    "syntax": "TOCOL(array, [ignore], [scan_by_column])",
    "example": "=TOCOL(A2:C10, 1)"
  },
  {
    "name": "TODAY",
    "category": "Date and time",
    "version": "",
    "summary": "Get the current date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/today-function",
    "note": "",
    "syntax": "TODAY()",
    "example": "=TODAY()"
  },
  {
    "name": "TOROW",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Get the array in a single row.",
    "url": "https://support.microsoft.com/en-us/excel/functions/torow-function",
    "note": "",
    "syntax": "TOROW(array, [ignore], [scan_by_column])",
    "example": "=TOROW(A2:C10, 1)"
  },
  {
    "name": "TRANSLATE",
    "category": "Text",
    "version": "Microsoft 365",
    "summary": "Translate a text from one language to another.",
    "url": "https://support.microsoft.com/en-us/excel/functions/translate-function",
    "note": "",
    "syntax": "TRANSLATE(text, [source_language], [target_language])",
    "example": "=TRANSLATE(\"Bonjour\", \"fr\", \"en\")"
  },
  {
    "name": "TRANSPOSE",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Swap rows and columns.",
    "url": "https://support.microsoft.com/en-us/excel/functions/transpose-function",
    "note": "",
    "syntax": "TRANSPOSE(array)",
    "example": "=TRANSPOSE(A2:C5)"
  },
  {
    "name": "TREND",
    "category": "Statistical",
    "version": "",
    "summary": "Get values along a linear trend.",
    "url": "https://support.microsoft.com/en-us/excel/functions/trend-function",
    "note": "",
    "syntax": "TREND(known_y's, [known_x's], [new_x's], [const])",
    "example": "=TREND(B2:B10, A2:A10, A11:A13)"
  },
  {
    "name": "TRIM",
    "category": "Text",
    "version": "",
    "summary": "Remove extra ASCII spaces while keeping single spaces between words.",
    "url": "https://support.microsoft.com/en-us/excel/functions/trim-function",
    "note": "",
    "syntax": "TRIM(text)",
    "example": "=TRIM(\"  North   Region  \")"
  },
  {
    "name": "TRIMMEAN",
    "category": "Statistical",
    "version": "",
    "summary": "Get the mean of the interior of a data set.",
    "url": "https://support.microsoft.com/en-us/excel/functions/trimmean-function",
    "note": "",
    "syntax": "TRIMMEAN(array, percent)",
    "example": "=TRIMMEAN(A2:A20, 0.2)"
  },
  {
    "name": "TRIMRANGE",
    "category": "Lookup and reference",
    "version": "Microsoft 365",
    "summary": "Scans in from the edges of a range or array until it finds a non-blank cell (or value), it then excludes those blank rows or columns.",
    "url": "https://support.microsoft.com/en-us/excel/functions/trimrange-function",
    "note": "",
    "syntax": "TRIMRANGE(range, [trim_rows], [trim_cols])",
    "example": "=TRIMRANGE(A1:E20)"
  },
  {
    "name": "TRUE",
    "category": "Logical",
    "version": "",
    "summary": "Get the logical value TRUE.",
    "url": "https://support.microsoft.com/en-us/excel/functions/true-function",
    "note": "",
    "syntax": "TRUE()",
    "example": "=TRUE()"
  },
  {
    "name": "TRUNC",
    "category": "Math and trigonometry",
    "version": "",
    "summary": "Remove decimal digits without rounding.",
    "url": "https://support.microsoft.com/en-us/excel/functions/trunc-function",
    "note": "",
    "syntax": "TRUNC(number, [num_digits])",
    "example": "=TRUNC(-3.768, 2)"
  },
  {
    "name": "TTEST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the probability associated with a Student's t-test.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ttest-function",
    "note": "",
    "syntax": "TTEST(array1, array2, tails, type)",
    "example": "=TTEST(A2:A10, B2:B10, 2, 1)"
  },
  {
    "name": "TYPE",
    "category": "Information",
    "version": "",
    "summary": "Get a number indicating the data type of a value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/type-function",
    "note": "",
    "syntax": "TYPE(value)",
    "example": "=TYPE(A2)"
  },
  {
    "name": "UNICHAR",
    "category": "Text",
    "version": "2013",
    "summary": "Get the Unicode character that is references by the given numeric value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/unichar-function",
    "note": "",
    "syntax": "UNICHAR(number)",
    "example": "=UNICHAR(65)"
  },
  {
    "name": "UNICODE",
    "category": "Text",
    "version": "2013",
    "summary": "Get the number (code point) that corresponds to the first character of the text.",
    "url": "https://support.microsoft.com/en-us/excel/functions/unicode-function",
    "note": "",
    "syntax": "UNICODE(text)",
    "example": "=UNICODE(\"A\")"
  },
  {
    "name": "UNIQUE",
    "category": "Lookup and reference",
    "version": "2021",
    "summary": "Return distinct values from a range or array.",
    "url": "https://support.microsoft.com/en-us/excel/functions/unique-function",
    "note": "",
    "syntax": "UNIQUE(array, [by_col], [exactly_once])",
    "example": "=UNIQUE(A2:A20)"
  },
  {
    "name": "UPPER",
    "category": "Text",
    "version": "",
    "summary": "Convert text to uppercase.",
    "url": "https://support.microsoft.com/en-us/excel/functions/upper-function",
    "note": "",
    "syntax": "UPPER(text)",
    "example": "=UPPER(\"Field Guide\")"
  },
  {
    "name": "VALUE",
    "category": "Text",
    "version": "",
    "summary": "Convert a text argument to a number.",
    "url": "https://support.microsoft.com/en-us/excel/functions/value-function",
    "note": "",
    "syntax": "VALUE(text)",
    "example": "=VALUE(\"123.45\")"
  },
  {
    "name": "VALUETOTEXT",
    "category": "Text",
    "version": "2021",
    "summary": "Get text from any specified value.",
    "url": "https://support.microsoft.com/en-us/excel/functions/valuetotext-function",
    "note": "",
    "syntax": "VALUETOTEXT(value, [format])",
    "example": "=VALUETOTEXT(42, 1)"
  },
  {
    "name": "VAR",
    "category": "Compatibility",
    "version": "",
    "summary": "Estimate variance based on a sample.",
    "url": "https://support.microsoft.com/en-us/excel/functions/var-function",
    "note": "",
    "syntax": "VAR(number1, [number2], …)",
    "example": "=VAR(A2:A20)"
  },
  {
    "name": "VAR.P",
    "category": "Statistical",
    "version": "2010",
    "summary": "Calculate variance for an entire population.",
    "url": "https://support.microsoft.com/en-us/excel/functions/var-p-function",
    "note": "",
    "syntax": "VAR.P(number1, [number2], …)",
    "example": "=VAR.P(8, 10, 12)"
  },
  {
    "name": "VAR.S",
    "category": "Statistical",
    "version": "2010",
    "summary": "Estimate variance from a sample.",
    "url": "https://support.microsoft.com/en-us/excel/functions/var-s-function",
    "note": "",
    "syntax": "VAR.S(number1, [number2], …)",
    "example": "=VAR.S(8, 10, 12)"
  },
  {
    "name": "VARA",
    "category": "Statistical",
    "version": "",
    "summary": "Estimate variance based on a sample, including numbers, text, and logical values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/vara-function",
    "note": "",
    "syntax": "VARA(number1, [number2], …)",
    "example": "=VARA(A2:A20)"
  },
  {
    "name": "VARP",
    "category": "Compatibility",
    "version": "",
    "summary": "Calculate variance based on the entire population.",
    "url": "https://support.microsoft.com/en-us/excel/functions/varp-function",
    "note": "",
    "syntax": "VARP(number1, [number2], …)",
    "example": "=VARP(A2:A20)"
  },
  {
    "name": "VARPA",
    "category": "Statistical",
    "version": "",
    "summary": "Calculate variance based on the entire population, including numbers, text, and logical values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/varpa-function",
    "note": "",
    "syntax": "VARPA(number1, [number2], …)",
    "example": "=VARPA(A2:A20)"
  },
  {
    "name": "VDB",
    "category": "Financial",
    "version": "",
    "summary": "Get the depreciation of an asset for a specified or partial period by using a declining balance method.",
    "url": "https://support.microsoft.com/en-us/excel/functions/vdb-function",
    "note": "",
    "syntax": "VDB(cost, salvage, life, start_period, end_period, [factor], [no_switch])",
    "example": "=VDB(5000, 500, 5, 0, 1)"
  },
  {
    "name": "VLOOKUP",
    "category": "Lookup and reference",
    "version": "",
    "summary": "Look down the first column and return a value from the matching row.",
    "url": "https://support.microsoft.com/en-us/excel/functions/vlookup-function",
    "note": "",
    "syntax": "VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
    "example": "=VLOOKUP(\"Pen\", A2:D20, 4, FALSE)"
  },
  {
    "name": "VSTACK",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Append arrays vertically.",
    "url": "https://support.microsoft.com/en-us/excel/functions/vstack-function",
    "note": "",
    "syntax": "VSTACK(array1, [array2], …)",
    "example": "=VSTACK(A2:C10, A12:C20)"
  },
  {
    "name": "WEBSERVICE",
    "category": "Web",
    "version": "2013",
    "summary": "Get data from a web service.",
    "url": "https://support.microsoft.com/en-us/excel/functions/webservice-function",
    "note": "Unavailable in Excel for the web.",
    "syntax": "WEBSERVICE(url)",
    "example": "=WEBSERVICE(\"https://example.com\")"
  },
  {
    "name": "WEEKDAY",
    "category": "Date and time",
    "version": "",
    "summary": "Convert a serial number to a day of the week.",
    "url": "https://support.microsoft.com/en-us/excel/functions/weekday-function",
    "note": "",
    "syntax": "WEEKDAY(serial_number, [return_type])",
    "example": "=WEEKDAY(DATE(2026, 11, 25), 2)"
  },
  {
    "name": "WEEKNUM",
    "category": "Date and time",
    "version": "",
    "summary": "Convert a serial number to a number representing where the week falls numerically with a year.",
    "url": "https://support.microsoft.com/en-us/excel/functions/weeknum-function",
    "note": "",
    "syntax": "WEEKNUM(serial_number, [return_type])",
    "example": "=WEEKNUM(DATE(2026, 11, 25), 2)"
  },
  {
    "name": "WEIBULL",
    "category": "Compatibility",
    "version": "",
    "summary": "Calculate variance based on the entire population, including numbers, text, and logical values.",
    "url": "https://support.microsoft.com/en-us/excel/functions/weibull-function",
    "note": "",
    "syntax": "WEIBULL(x, alpha, beta, cumulative)",
    "example": "=WEIBULL(4, 1.5, 5, TRUE)"
  },
  {
    "name": "WEIBULL.DIST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the Weibull distribution.",
    "url": "https://support.microsoft.com/en-us/excel/functions/weibull-dist-function",
    "note": "",
    "syntax": "WEIBULL.DIST(x, alpha, beta, cumulative)",
    "example": "=WEIBULL.DIST(4, 1.5, 5, TRUE)"
  },
  {
    "name": "WORKDAY",
    "category": "Date and time",
    "version": "",
    "summary": "Move a date by a specified number of working days.",
    "url": "https://support.microsoft.com/en-us/excel/functions/workday-function",
    "note": "",
    "syntax": "WORKDAY(start_date, days, [holidays])",
    "example": "=WORKDAY(A2, 10, H2:H10)"
  },
  {
    "name": "WORKDAY.INTL",
    "category": "Date and time",
    "version": "2010",
    "summary": "Get the serial number of the date before or after a specified number of workdays using parameters to indicate which and how many days are weekend days.",
    "url": "https://support.microsoft.com/en-us/excel/functions/workday-intl-function",
    "note": "",
    "syntax": "WORKDAY.INTL(start_date, days, [weekend], [holidays])",
    "example": "=WORKDAY.INTL(A2, 10, 1, H2:H10)"
  },
  {
    "name": "WRAPCOLS",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Wrap the provided row or column of values by columns after a specified number of elements.",
    "url": "https://support.microsoft.com/en-us/excel/functions/wrapcols-function",
    "note": "",
    "syntax": "WRAPCOLS(vector, wrap_count, [pad_with])",
    "example": "=WRAPCOLS(A2:A13, 4)"
  },
  {
    "name": "WRAPROWS",
    "category": "Lookup and reference",
    "version": "2024",
    "summary": "Wrap the provided row or column of values by rows after a specified number of elements.",
    "url": "https://support.microsoft.com/en-us/excel/functions/wraprows-function",
    "note": "",
    "syntax": "WRAPROWS(vector, wrap_count, [pad_with])",
    "example": "=WRAPROWS(A2:A13, 4)"
  },
  {
    "name": "XIRR",
    "category": "Financial",
    "version": "",
    "summary": "Get the internal rate of return for a schedule of cash flows that is not necessarily periodic.",
    "url": "https://support.microsoft.com/en-us/excel/functions/xirr-function",
    "note": "",
    "syntax": "XIRR(values, dates, [guess])",
    "example": "=XIRR(B2:B10, A2:A10)"
  },
  {
    "name": "XLOOKUP",
    "category": "Lookup and reference",
    "version": "2021",
    "summary": "Search one range and return the corresponding value from another.",
    "url": "https://support.microsoft.com/en-us/excel/functions/xlookup-function",
    "note": "",
    "syntax": "XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
    "example": "=XLOOKUP(\"Pen\", A2:A20, D2:D20, \"Missing\")"
  },
  {
    "name": "XMATCH",
    "category": "Lookup and reference",
    "version": "2021",
    "summary": "Find a matching position using configurable matching and search modes.",
    "url": "https://support.microsoft.com/en-us/excel/functions/xmatch-function",
    "note": "",
    "syntax": "XMATCH(lookup_value, lookup_array, [match_mode], [search_mode])",
    "example": "=XMATCH(\"Pen\", A2:A20)"
  },
  {
    "name": "XNPV",
    "category": "Financial",
    "version": "",
    "summary": "Get the net present value for a schedule of cash flows that is not necessarily periodic.",
    "url": "https://support.microsoft.com/en-us/excel/functions/xnpv-function",
    "note": "",
    "syntax": "XNPV(rate, values, dates)",
    "example": "=XNPV(0.08, B2:B10, A2:A10)"
  },
  {
    "name": "XOR",
    "category": "Logical",
    "version": "2013",
    "summary": "Get a logical exclusive OR of all arguments.",
    "url": "https://support.microsoft.com/en-us/excel/functions/xor-function",
    "note": "",
    "syntax": "XOR(logical1, [logical2], …)",
    "example": "=XOR(TRUE, FALSE, FALSE)"
  },
  {
    "name": "YEAR",
    "category": "Date and time",
    "version": "",
    "summary": "Extract the year from an Excel date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/year-function",
    "note": "",
    "syntax": "YEAR(serial_number)",
    "example": "=YEAR(DATE(2026,11,25))"
  },
  {
    "name": "YEARFRAC",
    "category": "Date and time",
    "version": "",
    "summary": "Get the year fraction representing the number of whole days between start_date and end_date.",
    "url": "https://support.microsoft.com/en-us/excel/functions/yearfrac-function",
    "note": "",
    "syntax": "YEARFRAC(start_date, end_date, [basis])",
    "example": "=YEARFRAC(DATE(2026, 1, 1), DATE(2026, 7, 1), 1)"
  },
  {
    "name": "YIELD",
    "category": "Financial",
    "version": "",
    "summary": "Get the yield on a security that pays periodic interest.",
    "url": "https://support.microsoft.com/en-us/excel/functions/yield-function",
    "note": "",
    "syntax": "YIELD(settlement, maturity, rate, pr, redemption, frequency, [basis])",
    "example": "=YIELD(DATE(2025,2,1), DATE(2028,12,31), 5%, 102, 100, 2)"
  },
  {
    "name": "YIELDDISC",
    "category": "Financial",
    "version": "",
    "summary": "Get the annual yield for a discounted security; for example, a Treasury bill.",
    "url": "https://support.microsoft.com/en-us/excel/functions/yielddisc-function",
    "note": "",
    "syntax": "YIELDDISC(settlement, maturity, pr, redemption, [basis])",
    "example": "=YIELDDISC(DATE(2025,1,1), DATE(2025,7,1), 98, 100)"
  },
  {
    "name": "YIELDMAT",
    "category": "Financial",
    "version": "",
    "summary": "Get the annual yield of a security that pays interest at maturity.",
    "url": "https://support.microsoft.com/en-us/excel/functions/yieldmat-function",
    "note": "",
    "syntax": "YIELDMAT(settlement, maturity, issue, rate, pr, [basis])",
    "example": "=YIELDMAT(DATE(2025,2,1), DATE(2025,7,1), DATE(2025,1,1), 5%, 98)"
  },
  {
    "name": "Z.TEST",
    "category": "Statistical",
    "version": "2010",
    "summary": "Get the one-tailed probability-value of a z-test.",
    "url": "https://support.microsoft.com/en-us/excel/functions/z-test-function",
    "note": "",
    "syntax": "Z.TEST(array, x, [sigma])",
    "example": "=Z.TEST(A2:A20, 50)"
  },
  {
    "name": "ZTEST",
    "category": "Compatibility",
    "version": "",
    "summary": "Get the one-tailed probability-value of a z-test.",
    "url": "https://support.microsoft.com/en-us/excel/functions/ztest-function",
    "note": "",
    "syntax": "ZTEST(array, x, [sigma])",
    "example": "=ZTEST(A2:A20, 50)"
  }
];
