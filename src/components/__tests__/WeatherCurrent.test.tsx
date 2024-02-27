import React from "react"
import { render } from "@testing-library/react-native"
import WeatherCurrent from "../WeatherCurrent"

describe('WeatherCurrent', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherCurrent />)
    wrapper.getAllByTestId('weather-current')
  })

  test('Should navigate to weather screen with location', () => {
    throw new Error('test not implemented')
  })
})