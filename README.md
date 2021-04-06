# proskomma-experiments

## Links

NPM Package: https://www.npmjs.com/package/proskomma
Docs: https://doc.proskomma.bible/en/dev/index.html

## Table of Contents

Install-Test: notes on setting up and running the tests


## proskomma-react

This [repo](https://github.com/mvahowe/proskomma-react) shows one verse at a time. It uses hard coded book of Titus in USFM format.
The content is stored in `src/test_data/en_aligned_tit.usfm.js`

In `src/index.js`, lines at the beginning to read/import the above are:

```js
import {Proskomma} from 'proskomma';

const pk = new Proskomma();

pk.importDocument(
    {lang: "fra", abbr: "hello"},
    "usfm",
    titUsfm);

```

