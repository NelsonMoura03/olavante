test('fetch government data', async () => {
  const data = await fetchGovernmentData('Salvador');
  expect(data).toHaveProperty('length');
  expect(data[0]).toHaveProperty('valor');
});