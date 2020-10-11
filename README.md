# Algorithms and tasks from the book Grokking Algorithms A. Y. Bhargava

| Statements                                                                  | Branches                                                                  | Functions                                                                  | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

#### This repository contains

- Several algorithms described in the book Grokking Algorithms A. Y. Bhargava
- Tests of this algorithms using Jest
- CircleCI config for linting, testing and publishing to npm

#### Install package

```yaml
npm i @anastasia-a-zhivaeva/grokking-algorithms
```

#### Use package

```yaml
import { binarySearch } from '@anastasia-a-zhivaeva/grokking-algorigthms';

binarySearch([1, 2, 3], 3);
```

### Commands

- start: build application for local development
- build: build app with webpack
- prepublishOnly: build app with webpack and generate types
- postversion: push code after publishing
- lint: lint with eslint
- test: test with jest
- coverage: add coverage badges to README
