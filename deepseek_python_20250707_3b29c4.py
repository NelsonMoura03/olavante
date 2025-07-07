from transformers import pipeline

classifier = pipeline("text-classification", model="neuralmind/bert-base-portuguese-cased")

def analyze_sentiment(text):
    return classifier(text)[0]['label']