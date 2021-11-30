import requests

def query(payload, model_id, api_token):
    headers = {"Authorization": f"Bearer {api_token}"}
    API_URL = f"https://api-inference.huggingface.co/models/{model_id}"
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

model_id = "sshleifer/distilbart-cnn-12-6"
api_token = "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"

def summarize_text(input_text: list) -> list:
    return [query(text, model_id, api_token) for text in input_text]


# from transformers import pipeline


# def summarize_text(input_text: list) -> list:
#     summarizer = pipeline("summarization")
#     results = summarizer(input_text)
#     return [result['summary_text'] for result in results]