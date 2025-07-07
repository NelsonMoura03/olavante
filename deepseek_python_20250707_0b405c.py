from sklearn.ensemble import IsolationForest
import pandas as pd

def detect_anomalies(data):
    model = IsolationForest(contamination=0.1)
    data['anomaly'] = model.fit_predict(data[['valor']])
    return data[data['anomaly'] == -1]