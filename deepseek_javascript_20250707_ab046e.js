test('renders data card', () => {
  render(<DataCard title="Test" value="100" source="IBGE" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});