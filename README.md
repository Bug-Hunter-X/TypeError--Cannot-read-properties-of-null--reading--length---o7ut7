# JavaScript Error Handling: TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error, `TypeError: Cannot read properties of null (reading 'length')`, and how to effectively handle it.

## The Problem

The `bug.js` file contains a function `foo` that attempts to access the `length` property of a variable `x`.  If `x` is `null` or undefined, or if it doesn't have a `length` property, a `TypeError` is thrown.

## The Solution

The `bugSolution.js` file provides a corrected version of the function.  It explicitly checks if `x` is `null` before attempting to access its properties.  The solution also demonstrates checking for the existence of the `length` property, providing alternative behavior if it's absent. This makes the function more robust and less prone to errors.