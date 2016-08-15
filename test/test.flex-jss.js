/**
 * Created by tushar.mathur on 15/08/16.
 */

'use strict'

import * as F from '../src/flex-jss'
import test from 'ava'

test('asString()', t => {
  t.deepEqual(
    F.asString({'.a': {width: '100%'}}),
    '.a {\n  width: 100%;\n}'
  )
})

test('flexRow', t => {
  t.is(F.flexRow, F.classNames['.flexRow'])
  t.deepEqual(
    F.flexRow,
    {display: 'flex', flexDirection: 'row'}
  )
})

test('flexCol', t => {
  t.is(F.flexCol, F.classNames['.flexCol'])
  t.deepEqual(
    F.flexCol,
    {display: 'flex', flexDirection: 'column'}
  )
})

test('rowSpaceBetween', t => {
  t.is(F.rowSpaceBetween, F.classNames['.rowSpaceBetween'])
  t.deepEqual(
    F.rowSpaceBetween,
    {display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}
  )
})

test('rowSpaceAround', t => {
  t.is(F.rowSpaceAround, F.classNames['.rowSpaceAround'])
  t.deepEqual(
    F.rowSpaceAround,
    {display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}
  )
})

test('colSpaceAround', t => {
  t.is(F.colSpaceAround, F.classNames['.colSpaceAround'])
  t.deepEqual(
    F.colSpaceAround,
    {display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}
  )
})

test('colSpaceBetween', t => {
  t.is(F.colSpaceBetween, F.classNames['.colSpaceBetween'])
  t.deepEqual(
    F.colSpaceBetween,
    {display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}
  )
})

test('colCenter', t => {
  t.is(F.colCenter, F.classNames['.colCenter'])
  t.deepEqual(
    F.colCenter,
    {display: 'flex', flexDirection: 'column', justifyContent: 'center'}
  )
})

test('rowCenter', t => {
  t.is(F.rowCenter, F.classNames['.rowCenter'])
  t.deepEqual(
    F.rowCenter,
    {display: 'flex', flexDirection: 'row', justifyContent: 'center'}
  )
})

test('colMiddle', t => {
  t.is(F.colMiddle, F.classNames['.colMiddle'])
  t.deepEqual(
    F.colMiddle,
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  )
})

test('rowMiddle', t => {
  t.is(F.rowMiddle, F.classNames['.rowMiddle'])
  t.deepEqual(
    F.rowMiddle,
    {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
  )
})

test('rowLeft', t => {
  t.is(F.rowLeft, F.classNames['.rowLeft'])
  t.deepEqual(
    F.rowLeft,
    {display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}
  )
})

test('rowRight', t => {
  t.is(F.rowRight, F.classNames['.rowRight'])
  t.deepEqual(
    F.rowRight,
    {display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}
  )
})

test('rowWrap', t => {
  t.is(F.rowWrap, F.classNames['.rowWrap'])
  t.deepEqual(
    F.rowWrap,
    {display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}
  )
})

test('colWrap', t => {
  t.is(F.colWrap, F.classNames['.colWrap'])
  t.deepEqual(
    F.colWrap,
    {display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}
  )
})

test('flexSpread', t => {
  t.is(F.flexSpread, F.classNames['.flexSpread'])
  t.deepEqual(
    F.flexSpread,
    {flex: '1 0 0'}
  )
})

test('alignCenter', t => {
  t.is(F.alignCenter, F.classNames['.alignCenter'])
  t.deepEqual(
    F.alignCenter,
    {alignItems: 'center'}
  )
})
