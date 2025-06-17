<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "reserved_domains": [
    {
      "acme_challenge_cname_target": null,
      "certificate": null,
      "certificate_management_policy": {
        "authority": "letsencrypt",
        "private_key_type": "ecdsa"
      },
      "certificate_management_status": {
        "provisioning_job": {
          "error_code": null,
          "msg": "Managed certificate provisioning in progress.",
          "retries_at": null,
          "started_at": "2025-06-17T10:06:57Z"
        },
        "renews_at": null
      },
      "cname_target": "4knqktdwka2umyjjc.3cegrqmgfgucw79fa.local-ngrok-cname.com",
      "created_at": "2025-06-17T10:06:57Z",
      "description": "Device 0001 Dashboard",
      "domain": "manage-0002.app.example.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2ydBxecWq5YAGPPutSxPhNQvIWI",
      "metadata": "{\"service\": \"dashboard\"}",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2ydBxecWq5YAGPPutSxPhNQvIWI"
    },
    {
      "acme_challenge_cname_target": null,
      "certificate": {
        "id": "cert_2ydBxaU3z7cFBjdKjV7hsa2s8Gg",
        "uri": "https://api.ngrok.com/tls_certificates/cert_2ydBxaU3z7cFBjdKjV7hsa2s8Gg"
      },
      "certificate_management_policy": null,
      "certificate_management_status": null,
      "cname_target": "2udamkamcl8pjmrff.3cegrqmgfgucw79fa.local-ngrok-cname.com",
      "created_at": "2025-06-17T10:06:56Z",
      "domain": "myapp.mydomain.com",
      "error_redirect_url": null,
      "http_endpoint_configuration": null,
      "https_endpoint_configuration": null,
      "id": "rd_2ydBxbZofD2F5H3QUJtzujoj5fw",
      "region": "",
      "uri": "https://api.ngrok.com/reserved_domains/rd_2ydBxbZofD2F5H3QUJtzujoj5fw"
    }
  ],
  "uri": "https://api.ngrok.com/reserved_domains"
}
```
