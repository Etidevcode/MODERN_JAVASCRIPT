/*
 * Copyright (c) - All Rights Reserved.
 */

// alert('This works - between script tags!');

const defaultResult = 0

let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription);