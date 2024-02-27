import React from 'react'
import { render, } from '@testing-library/react-native'
import HomeScreen from "../HomeScreen"
import WeatherCurrent from '../../components/WeatherCurrent'
import { View } from 'react-native'
import WeatherCoordinates from '../../components/WeatherCoordinates'

jest.mock('../../components/WeatherCoordinates', () =>
  jest.fn().mockReturnValue(null),
);
jest.mock('../../components/WeatherCurrent', () =>
  jest.fn().mockReturnValue(null),
);

describe('HomeScreen', () => {
  test('Should render correctly', () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId('home-screen'));
  });


  describe('Title Section', () => {
    beforeEach(() => {
      jest.useFakeTimers('modern')
      jest.setSystemTime(946684800000)
    })

    afterEach(() => {
      jest.useRealTimers()
    })

    // test('Should contain current date', () => {
    //   const wrapper = render(<HomeScreen />)
    //   wrapper.getByText('Jan 01, 2000')
    // });


    // test('Should contain current day', async () => {
    //   const { findByText } = render(<HomeScreen />);
    //   await waitFor(() => findByText('Monday'), { timeout: 10000 });
    // });

    test('Should contain a section to get current weather', () => {
      (WeatherCurrent as jest.Mock).mockReturnValue(<View testID='mock-weather-current' />)
      const wrapper = render(<HomeScreen />)
      wrapper.getAllByTestId('mock-weather-current')
    })

    test('Should contain a divider', () => {
      const wrapper = render(<HomeScreen />);
      wrapper.getByTestId('home-screen-divider');
    });

    test('Should contain a section to get weather at given latitude and longitude', () => {
      (WeatherCoordinates as jest.Mock).mockReturnValue(<View testID='mock-weather-coordinates' />)
      const wrapper = render(<HomeScreen />)
      wrapper.getAllByTestId('mock-weather-coordinates')
    })

  })

})