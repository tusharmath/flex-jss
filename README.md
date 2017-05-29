# flex-jss

[![Greenkeeper badge](https://badges.greenkeeper.io/tusharmath/flex-jss.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/tusharmath/flex-jss.svg?branch=master)](https://travis-ci.org/tusharmath/flex-jss)
[![npm](https://img.shields.io/npm/v/flex-jss.svg)](https://www.npmjs.com/package/flex-jss)
[![Donate Bitcoin](https://img.shields.io/badge/donate-bitcoin-green.svg)](https://www.coinbase.com/tusharmath)

jss utils for flexbox

## Installation

```bash
npm install flex-jss --save
```

## Constants

* [row](#row)
* [col](#col)
* [jc_sb](#jc_sb)
* [jc_sa](#jc_sa)
* [jc_c](#jc_c)
* [jc_fs](#jc_fs)
* [jc_fe](#jc_fe)
* [ai_c](#ai_c)
* [ai_fs](#ai_fs)
* [ai_fe](#ai_fe)
* [spread](#spread)
* [wrap](#wrap)

## Functions

* [asHtmlStyleString()](#asHtmlStyleString) ⇒ <code>string</code>

<a name="row"></a>

## row
sets display to `flex` and flexDirection as `row`

**Kind**: global constant  
**Example**  
```js
<div className='flb row' />
```
<a name="col"></a>

## col
sets display to `flex` and flexDirection as `column`

**Kind**: global constant  
**Example**  
```js
<div className='flb col' />
```
<a name="jc_sb"></a>

## jc_sb
sets justifyContent to `space-between`

**Kind**: global constant  
**Example**  
```js
<div className='flb col jc_sb' />
```
<a name="jc_sa"></a>

## jc_sa
sets justifyContent to `space-around`

**Kind**: global constant  
**Example**  
```js
<div className='flb row jc_sa' />
```
<a name="jc_c"></a>

## jc_c
sets justifyContent to `center`

**Kind**: global constant  
**Example**  
```js
<div className='flb col jc_c' />
```
<a name="jc_fs"></a>

## jc_fs
sets justifyContent to `flex-start`

**Kind**: global constant  
**Example**  
```js
<div className='flb row jc_fs' />
```
<a name="jc_fe"></a>

## jc_fe
sets justifyContent to `flex-end`

**Kind**: global constant  
**Example**  
```js
<div className='flb row jc_fe' />
```
<a name="ai_c"></a>

## ai_c
sets alignItems to `center`

**Kind**: global constant  
**Example**  
```js
<div className='flb row jc_c ai_c' />
```
<a name="ai_fs"></a>

## ai_fs
sets alignItems to `flex-start`

**Kind**: global constant  
**Example**  
```js
<div className='flb row jc_c ai_fs' />
```
<a name="ai_fe"></a>

## ai_fe
sets alignItems to `flex-end`

**Kind**: global constant  
**Example**  
```js
<div className='flb row jc_c ai_fe' />
```
<a name="spread"></a>

## spread
sets flex to `1 0 0`

**Kind**: global constant  
**Example**  
```js
<div className='flb spread' />
```
<a name="wrap"></a>

## wrap
sets flexWrap to `wrap`

**Kind**: global constant  
**Example**  
```js
<div className='flb wrap' />
```
<a name="asHtmlStyleString"></a>

## asHtmlStyleString() ⇒ <code>string</code>
Creates a stylesheet of all the classes which can directly be inserted into a
HTML <style> tag
By default all the css classes get prefixed with `.flb`.

**Kind**: global function  
