from transformers import pipeline


def summarize_text(input_text: list) -> list:
    summarizer = pipeline("summarization")
    results = summarizer(input_text)
    return [result['summary_text'] for result in results]

