/* eslint-disable import/no-named-default */
import { default as eMailRegex } from 'email-regex'

// Missing input
export const missingField = 'Please fill in this field!'

// Invalid input
export const invalidName = 'Please enter a valid name!' // numbers and symbols in names are invalid
export const invalidEmail = 'Please enter a valid email address!'

// custom regex
export const defaultRegex = /.*/
export const emailRegex = eMailRegex()
export const nameRegex = /^[A-Za-z,/' -]+$/
