import { render, screen, useLocation } from '@testing-library/react'
// import { useLocation } from '@testing-library/react-router-dom'
import App from './App'
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  useLocation: ({ children }) =>  state: {} 
}))

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
