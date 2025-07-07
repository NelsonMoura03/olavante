import pandas as pd
from sqlalchemy import create_engine

# Extração
df = pd.read_csv('dados_governo.csv')

# Transformação
df['valor'] = df['valor'].apply(lambda x: float(x.replace('R$', '').replace('.', '').replace(',', '.')))

# Carga
engine = create_engine('postgresql://user:pass@localhost:5432/olevante')
df.to_sql('dados_publicos', engine, if_exists='replace')