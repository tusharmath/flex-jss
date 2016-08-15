/**
 * Created by tushar.mathur on 15/08/16.
 */

'use strict'

import {Jss} from 'jss'
import preset from 'jss-preset-default'

export const extend = (a, b) => Object.assign({}, a, b)

export const flexRow = {display: 'flex', flexDirection: 'row'}
export const flexCol = {display: 'flex', flexDirection: 'column'}
export const rowSpaceBetween = extend(flexRow, {justifyContent: 'space-between'})
export const rowSpaceAround = extend(flexRow, {justifyContent: 'space-around'})
export const colSpaceAround = extend(flexCol, {justifyContent: 'space-around'})
export const colSpaceBetween = extend(flexCol, {justifyContent: 'space-between'})
export const colCenter = extend(flexCol, {justifyContent: 'center'})
export const rowCenter = extend(flexRow, {justifyContent: 'center'})
export const colMiddle = extend(colCenter, {alignItems: 'center'})
export const rowMiddle = extend(rowCenter, {alignItems: 'center'})
export const rowLeft = extend(flexRow, {justifyContent: 'flex-start'})
export const rowRight = extend(flexRow, {justifyContent: 'flex-end'})
export const rowWrap = extend(flexRow, {flexWrap: 'wrap'})
export const colWrap = extend(flexCol, {flexWrap: 'wrap'})
export const flexSpread = {flex: '1 0 0'}
export const alignCenter = {alignItems: 'center'}

export const classNames = {
  '.flexRow': flexRow,
  '.flexCol': flexCol,
  '.rowSpaceBetween': rowSpaceBetween,
  '.rowSpaceAround': rowSpaceAround,
  '.colSpaceAround': colSpaceAround,
  '.colSpaceBetween': colSpaceBetween,
  '.colCenter': colCenter,
  '.rowCenter': rowCenter,
  '.colMiddle': colMiddle,
  '.rowMiddle': rowMiddle,
  '.rowLeft': rowLeft,
  '.rowRight': rowRight,
  '.rowWrap': rowWrap,
  '.colWrap': colWrap,
  '.flexSpread': flexSpread,
  '.alignCenter': alignCenter
}

export const asString = (styles) => {
  const jss = new Jss(preset)
  const options = {named: false}
  return jss
    .createStyleSheet(styles, options)
    .toString()
}
