import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import HomeScreen from "../HomeScreen"


describe('HomeScreen', () => {
  test('Should render correctly', () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId('home-screen'));
  });


  describe('Title Section', () => {
    beforeEach(() => {
      jest.setTimeout(10000)
      jest.useFakeTimers()
      jest.setSystemTime(946684800000)
    }, 6000)

    afterEach(() => {
      jest.useRealTimers()
    })

    test('Should contain current date', () => {
      const wrapper = render(<HomeScreen />)
      wrapper.getByText('Jan 01, 2000')
    });


    // test('Should contain current day', async () => {
    //   const { findByText } = render(<HomeScreen />);
    //   await waitFor(() => findByText('Monday'), { timeout: 10000 });
    // });




  })
})