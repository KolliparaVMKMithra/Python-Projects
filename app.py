from flask import Flask, request, jsonify
from Mental_Health_Chatbot_GEN_AI import chatbot_response  # Import your chatbot logic

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_input = data.get('message', '')
    if not user_input:
        return jsonify({"response": "Please enter a message."})
    
    response = chatbot_response(user_input)  # Your existing chatbot logic
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
