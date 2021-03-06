---
name: Introduction
route: '/'
---

# redux-firebase

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](/CHANGELOG.md)
[![docz](https://img.shields.io/badge/docs-by%20docz-blue)](http://curtishumphrey.github.io/redux-firebase)

More docs here: http://curtishumphrey.github.io/redux-firebase

## Goals

The library was created to meet these goals. If these are your goals then please use and improve this library

1. Firebase <--> Redux <--> React or whatever (React should not be aware of firebase)
2. Firebase patterns may be complex (like 1+n calls) so provide building blocks (not one size fits all)

## General Patterns

These are patterns using in approaching how this library was constucted

1. Firebase interactions are done through Redux Thunks
2. React (or whatever) will call a listen_to action type to setup Firebase <--> Redux
3. listen_to action will either do a once or a on but that is transparent to React
4. React (or whatever) will call a unlisten action when data is no longer needed
5. There maybe more than one call to listen_to but each caller is responsible for calling an unlisten when done
