import openai

def handle_user_input(user_input: str) -> str:
    openai.api_key = "YOUR_OPENAI_API_KEY"
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": user_input}],
    )
    return response.choices[0].message.content