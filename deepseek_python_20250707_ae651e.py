import requests

def get_ibge_data(codigo_municipio):
    url = f"https://servicodados.ibge.gov.br/api/v1/localidades/municipios/{codigo_municipio}"
    response = requests.get(url)
    return response.json()