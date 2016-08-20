/**
 * Created by tushar.mathur on 15/08/16.
 */

'use strict'

import {Jss} from 'jss'
import preset from 'jss-preset-default'

/**
 * @private
 */
export const prefixCSS = (base, css) => {
  function reducer (m, k) {
    m[[base, k].join('.')] = css[k]
    return m
  }

  return Object.keys(css).reduce(reducer, {})
}

/**
 * sets display to `flex` and flexDirection as `row`
 * @example
 * <div className='flb row' />
 */
export const row = {display: 'flex', flexDirection: 'row'}

/**
 * sets display to `flex` and flexDirection as `column`
 * @example
 * <div className='flb col' />
 */
export const col = {display: 'flex', flexDirection: 'column'}

/**
 * sets justifyContent to `space-between`
 * @example
 * <div className='flb col jc_sb' />
 */
export const jc_sb = {justifyContent: 'space-between'}

/**
 * sets justifyContent to `space-around`
 * @example
 * <div className='flb row jc_sa' />
 */
export const jc_sa = {justifyContent: 'space-around'}

/**
 * sets justifyContent to `center`
 * @example
 * <div className='flb col jc_c' />
 */
export const jc_c = {justifyContent: 'center'}

/**
 * sets justifyContent to `flex-start`
 * @example
 * <div className='flb row jc_fs' />
 */
export const jc_fs = {justifyContent: 'flex-start'}

/**
 * sets justifyContent to `flex-end`
 * @example
 * <div className='flb row jc_fe' />
 */
export const jc_fe = {justifyContent: 'flex-end'}

/**
 * sets alignItems to `center`
 * @example
 * <div className='flb row jc_c ai_c' />
 */
export const ai_c = {alignItems: 'center'}

/**
 * sets alignItems to `flex-start`
 * @example
 * <div className='flb row jc_c ai_fs' />
 */
export const ai_fs = {alignItems: 'flex-start'}

/**
 * sets alignItems to `flex-end`
 * @example
 * <div className='flb row jc_c ai_fe' />
 */
export const ai_fe = {alignItems: 'flex-end'}

/**
 * sets flex to `1 0 0`
 * @example
 * <div className='flb spread' />
 */
export const spread = {flex: '1 0 0'}

/**
 * sets flexWrap to `wrap`
 * @example
 * <div className='flb wrap' />
 */
export const wrap = {flexWrap: 'wrap'}

/**
 * @private
 */
export const css = {
  row,
  col,
  jc_sb,
  jc_sa,
  jc_c,
  jc_fs,
  jc_fe,
  ai_c,
  ai_fs,
  ai_fe,
  spread,
  wrap
}

/**
 * Creates a stylesheet of all the classes which can directly be inserted into a
 * HTML <style> tag
 * By default all the css classes get prefixed with `.flb`.
 * @function
 * @returns {string}
 */
export const asHtmlStyleString = () => {
  const jss = new Jss(preset())
  const options = {named: false}
  return jss.createStyleSheet(prefixCSS('.flb', css), options).toString()
}
