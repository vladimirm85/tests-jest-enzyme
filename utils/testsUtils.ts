import { ShallowWrapper } from 'enzyme';

/**
 * Function return ShallowWrapper containing node(s) with the given data-test attribute
 * @function findByTestAttr
 * @returns ShallowWrapper
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} attr - data-test attribute
 */
export const findByTestAttr = (wrapper: ShallowWrapper, attr: string) =>
  wrapper.find(`[data-test='${attr}']`);
