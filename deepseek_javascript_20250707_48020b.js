const axios = require('axios');

const fetchGovernmentData = async (municipio) => {
  const response = await axios.get(
    `https://api.portaldatransparencia.gov.br/api/despesas?municipio=${municipio}`
  );
  return response.data;
};