from groq import Groq
import json

client = Groq(api_key="YOUR_API_KEY")

def extract_entities(text):
    prompt = f"""
    Extract:
    hcp_name, specialty, interaction_type, notes, follow_up_date
    from: {text}
    Return JSON only.
    """

    response = client.chat.completions.create(
        model="gemma2-9b-it",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content


def run_graph(message):
    data = extract_entities(message)

    return {
        "reply": "Interaction logged successfully",
        "data": json.loads(data)
    }
