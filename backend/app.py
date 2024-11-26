from flask import Flask, request, jsonify
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient
from azure.cosmos import CosmosClient
import os

app = Flask(__name__)

# Azure konfigurasjon
credential = DefaultAzureCredential()
blob_service = BlobServiceClient(
    account_url=f"https://{os.getenv('AZURE_STORAGE_ACCOUNT')}.blob.core.windows.net",
    credential=credential
)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"}), 200

if __name__ == '__main__':
    app.run(debug=True)
