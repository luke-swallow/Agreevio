from transformers import pipeline


def summarize_text(input_text: list, min_length=6, max_length=40) -> list:
    summarizer = pipeline("summarization", model="./models/t5-small", tokenizer="./models/t5-small", framework="pt")
    # TODO: Don't include min and maxlength for now
    results = summarizer(input_text)
    return [result['summary_text'] for result in results]

