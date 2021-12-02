from flask_cors import CORS
from flask import Flask, request, jsonify
from model import summarize_text

app = Flask(__name__)
CORS(app)

@app.route('/')
def main_page():
    return "<h1> Welcome to the Agreevio Deep Learning Summarizer! </h1>"


@app.route('/admin')
def admin_page():
    return "<h1>This is the Agreevio admin page. </h1> <h2>Access is restricted!</h2>"


@app.route('/summarizer/string/<input_string>')
def summarize_string(input_string):
    results = summarize_text(input_string)

    results_obj = {
        "input_text": [input_string],
        "summarized_text": results
    }
    json_result = jsonify(results_obj)
    return json_result


@app.route('/summarizer/json', methods=["GET", "POST"])
def summarize_json():
    input_text = request.json["input_text"]  # Should be a list
    min_summ_length = request.json["min_summ_length"] if "min_summ_length" in request.json else 6
    max_summ_length = request.json["max_summ_length"] if "max_summ_length" in request.json else 40
    results = summarize_text(input_text, min_summ_length, max_summ_length)

    results_obj = {
        "input_text": input_text,
        "summarized_text": results
    }
    json_result = jsonify(results_obj)
    return json_result


if __name__ == "__main__":
    app.run()
