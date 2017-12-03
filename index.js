// @flow
import untyped from 'react-redux';

untyped(function(): number {
  const thisIsNotCovered: any = 'some text';
  const thisLineIsCovered: number = 123;
  const thisLineIsCoveredToo = thisLineIsCovered;
  return thisLineIsCoveredToo;
});