import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import {Search} from './Search'
import axios from 'axios'
import '@testing-library/jest-dom/extend-expect'

describe('Input value', () => {
    it('updates on change', () => {
      const setSearch = jest.fn((value) => {})
      
      const { queryByPlaceholderText } = render(<SearchBox setSearch={setSearch}/>)
  
      const searchInput = queryByPlaceholderText('Search...')
  
      fireEvent.change(searchInput, { target: { value: 'test' } })
  
      expect(searchInput.value).toBe('test')
    })
  })
  describe('Test Apis', () => {
    describe('getResource', () => {
        describe('with success', () => {
            const url = 'http://test-url.com';
            const onComplete = jest.fn();
            const data = {};

            beforeEach(() => {
                axios.get.mockResolvedValue(data);
            });

            it('should call axios get with given url', () => {
                getResource(url, onComplete);
                expect(axios.get).toBeCalledWith(url);
            });

            it('should call onComplete callback with response', async () => { // do not forget 'async'
                await getResource(url, onComplete); // notice the 'await' because onComplete callback is called in '.then'
                expect(onComplete).toBeCalledWith(data);
            });
        });
    });
});