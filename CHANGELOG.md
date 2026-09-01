# Changelog

## [0.8.0](https://github.com/varianter/varde/compare/varde-v0.7.0...varde-v0.8.0) (2026-09-01)


### Features

* moved the alignment utilities to `align.css`. Added ([64fc99e](https://github.com/varianter/varde/commit/64fc99e866714936e04c9285cde1c32956fbedf7))
* reworked spacing. `pt-*` wins over `px-*` which wins overs `p-*`. ([682bb20](https://github.com/varianter/varde/commit/682bb208eae00618700c040d9aa4a4b437e6b202))
* stagger-items has been improved. A lot tighter with more knobs to ([b69ca78](https://github.com/varianter/varde/commit/b69ca781239f17780ade50061763dc3f96b0ca47))


### Bug Fixes

* .lh-* classes should now properly override defaults in .fs-* ([05aefec](https://github.com/varianter/varde/commit/05aefec1b19527575ded7ff07be2b6443d817e2f))
* Added animations to checkbox/radio. Selects height should be better ([9edc387](https://github.com/varianter/varde/commit/9edc387cf58ba7437bc06a26c047730419c61d3c))
* added override for borders. Looks like this: `b-*-none` ([018f4cb](https://github.com/varianter/varde/commit/018f4cba037ae0284a516d134974cb76b6b6f353))
* added position-* classes and top/left/right/bottom-0. ([18b05e4](https://github.com/varianter/varde/commit/18b05e4caa6d362905c5be5a8298013172085d21))
* Exclude inverted=false from inverted styles. Tweaked tokens. ([59e503a](https://github.com/varianter/varde/commit/59e503a1f2fa5d43385295b492414a7df1255662))
* reworked shadows some more. Shadows looks nicer, and are now ([a65f7a9](https://github.com/varianter/varde/commit/a65f7a906754d76b6aba26ea362d9d28e21260dc))

## [0.7.0](https://github.com/varianter/varde/compare/varde-v0.6.1...varde-v0.7.0) (2026-08-19)


### Features

* Added .bg-wash:hover ([b81e502](https://github.com/varianter/varde/commit/b81e502c3bcc8a7c6378dc32e3a3e246adaa26a4))
* added border-radius to remove set 0 on specific ([5816502](https://github.com/varianter/varde/commit/5816502b562b59921ab6f2cf99eee42e3bdcecb4))
* introducing `.b:hover`. ([a179f50](https://github.com/varianter/varde/commit/a179f505a907e1d7e7fd359062788713bf2de743))
* Update palette. Tweaked form control size. Added sizes for ([dd4b8ad](https://github.com/varianter/varde/commit/dd4b8ad22d1898ae202a97c60ab4bcf97d8013e4))


### Bug Fixes

* `color-mode` is now `display: contents` as a default to avoid it ([74b5fab](https://github.com/varianter/varde/commit/74b5fab38d20b9d4b0268c5d39df027352be023a))
* Reworked shadows ([77767ab](https://github.com/varianter/varde/commit/77767abd2d3d04ddf19cc3bb74aaffc8c482ba1f))
* Tweaked line-height for .fs-xl ([23bd196](https://github.com/varianter/varde/commit/23bd196c91af27bf9d3b758ca527903dfbdd3531))
* Tweaked tokens for buttons ([db925a5](https://github.com/varianter/varde/commit/db925a5775b938e6f86b3808f6cd49b44bb9a407))

## [0.6.1](https://github.com/varianter/varde/compare/varde-v0.6.0...varde-v0.6.1) (2026-08-11)


### Bug Fixes

* Add cache-control and CDN purge to docs deployment ([161a390](https://github.com/varianter/varde/commit/161a390fb0d32edfccde2bc15eecc1b61d4ad8f7))

## [0.6.0](https://github.com/varianter/varde/compare/varde-v0.5.0...varde-v0.6.0) (2026-08-11)


### Features

* .typeset can now be scoped to .untypeset ([95d5308](https://github.com/varianter/varde/commit/95d5308448f852ec51e8a01ae0c74bf14c098982))
* added some .grid-* utilities ([75c4824](https://github.com/varianter/varde/commit/75c4824941d148ef0f6585eab8594ad0f40578ba))
* opt-in theme switching powered by light-dark() ([7c15b27](https://github.com/varianter/varde/commit/7c15b27efbceb0eb10cd97dea716c6c17b052993))
* removed data-color from buttons, now inherits from color-mode. ([ed3039e](https://github.com/varianter/varde/commit/ed3039e287073c1d529c74fc845d64077b57cb7d))
* reworked color palettes ([fbd58be](https://github.com/varianter/varde/commit/fbd58be85032aae5bbef5870c9e0798fd40d0c5c))


### Bug Fixes

* avoid zooming on ios when focusing small inputs ([175dc90](https://github.com/varianter/varde/commit/175dc9088701e90aad86eef5bed94cea886412d6))
* links are now medium font weight ([a617633](https://github.com/varianter/varde/commit/a6176337610ade143977734a62fa432de4d3b34f))

## [0.5.0](https://github.com/varianter/varde/compare/varde-v0.4.0...varde-v0.5.0) (2026-08-07)


### Features

* tweaked color-mode tokens ([6516e30](https://github.com/varianter/varde/commit/6516e308a5600e08af745597c05787f3465f3960))


### Bug Fixes

* upgraded animations for stagger and popover ([18dc294](https://github.com/varianter/varde/commit/18dc2948d5d9dc25fb5b716eb1174427836fa4ca))

## [0.4.0](https://github.com/varianter/varde/compare/varde-v0.3.1...varde-v0.4.0) (2026-08-06)


### Features

* Lighten control colors and refactor stagger-reveal ([f4d6a18](https://github.com/varianter/varde/commit/f4d6a183964f07063a192320cdb283246f49f57e))
* Reworking surfaces and color modes. ([8285004](https://github.com/varianter/varde/commit/8285004a84c1be4ea42d4eba333759389ff4cb64))


### Bug Fixes

* Add 4xs spacing utilities and update button/link ([22848b3](https://github.com/varianter/varde/commit/22848b3b9876aef0a52449c6b2c1ef9058e645b6))

## [0.3.1](https://github.com/varianter/varde/compare/varde-v0.3.0...varde-v0.3.1) (2026-06-18)


### Bug Fixes

* removed chart.css, added default `mark` styles, .link got a :where ([15e39d9](https://github.com/varianter/varde/commit/15e39d968b3231268c94755f2016f546e4b9d164))
* updated margin between list items inside of `.typeset` ([0cd9ee0](https://github.com/varianter/varde/commit/0cd9ee0f66dbb53cb33206b807a09eed40190240))

## [0.3.0](https://github.com/varianter/varde/compare/varde-v0.2.0...varde-v0.3.0) (2026-06-17)


### Features

* added .popover helper to bring you niceness! ([252c613](https://github.com/varianter/varde/commit/252c61387e092a1b347b379c0563c299f5267d5b))
* spacing units are now fluid units. ([32d89d6](https://github.com/varianter/varde/commit/32d89d6f117b07d93f6eb682cfad3213a6c690e8))


### Bug Fixes

* tweaked buttons/forms as a result of changing spacing units ([d7634cf](https://github.com/varianter/varde/commit/d7634cf9996144595fb298cbc701f3127ee4470e))

## [0.2.0](https://github.com/varianter/varde/compare/varde-v0.1.2...varde-v0.2.0) (2026-06-16)


### Features

* Add self-alignment utility classes ([5842951](https://github.com/varianter/varde/commit/58429512f7438e99ab706b125942c5c2e69b099d))
* added shadows! ([53df1bb](https://github.com/varianter/varde/commit/53df1bbffb64eed0305ca6a3d42c5412e4cad954))

## [0.1.2](https://github.com/varianter/varde/compare/varde-v0.1.1...varde-v0.1.2) (2026-06-12)


### Bug Fixes

* Because package/tokens is now gone, we no longer need a themes.css ([90d0599](https://github.com/varianter/varde/commit/90d0599ed67e9d409530ba83342b008d20d3afd3))

## [0.1.1](https://github.com/varianter/varde/compare/varde-v0.1.0...varde-v0.1.1) (2026-06-12)


### Bug Fixes

* Add checkout step to release-please workflow ([8b0ff03](https://github.com/varianter/varde/commit/8b0ff037a7fda0ded47c874c7449819de498086a))

## [0.1.0](https://github.com/varianter/varde/compare/varde-v0.0.4...varde-v0.1.0) (2026-06-12)


### ⚠ BREAKING CHANGES

* Re-worked A LOT of the CSS package

### Features

* Re-worked A LOT of the CSS package ([9367f43](https://github.com/varianter/varde/commit/9367f43ffdbf872b4a56fdf1ab7f59fdff458183))

## [0.0.4](https://github.com/varianter/varde/compare/varde-v0.0.3...varde-v0.0.4) (2026-06-07)


### Bug Fixes

* Release flow with packages ([#13](https://github.com/varianter/varde/issues/13)) ([161e955](https://github.com/varianter/varde/commit/161e955946a5f66f1f08a03a3ca34f88276ec6b6))

## [0.0.3](https://github.com/varianter/varde/compare/varde-v0.0.2...varde-v0.0.3) (2026-06-07)


### Bug Fixes

* add --auth-mode login to blob list in deploy-assets.sh ([#11](https://github.com/varianter/varde/issues/11)) ([1c826fd](https://github.com/varianter/varde/commit/1c826fd2f7aea47ce90885236893ba3c74fb63b0))

## [0.0.2](https://github.com/varianter/varde/compare/varde-v0.0.1...varde-v0.0.2) (2026-06-05)


### Bug Fixes

* incorrect internal package name ([54a4280](https://github.com/varianter/varde/commit/54a4280e17a4b94e83d9f6d05ce701acb0f3c4d4))
