<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "next_page_uri": null,
  "tls_edges": [
    {
      "backend": null,
      "created_at": "2025-06-17T10:07:23Z",
      "description": "acme tls edge",
      "hostports": [
        "example.com:443"
      ],
      "id": "edgtls_2ydC0zgCDlCspxImbhREYFHb52S",
      "ip_restriction": null,
      "metadata": "{\"environment\": \"staging\"}",
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2ydC0zgCDlCspxImbhREYFHb52S"
    },
    {
      "backend": {
        "backend": {
          "id": "bkdhr_2ydBzZTPcQozIGOeyunu451LJXn",
          "uri": "https://api.ngrok.com/backends/http_response/bkdhr_2ydBzZTPcQozIGOeyunu451LJXn"
        },
        "enabled": true
      },
      "created_at": "2025-06-17T10:07:12Z",
      "description": "acme tls edge",
      "hostports": [
        "endpoint-example2.com:443"
      ],
      "id": "edgtls_2ydBzWtXXfspisdTd9Zmm1Mz1Fm",
      "ip_restriction": null,
      "mutual_tls": null,
      "policy": null,
      "tls_termination": null,
      "traffic_policy": null,
      "uri": "https://api.ngrok.com/edges/tls/edgtls_2ydBzWtXXfspisdTd9Zmm1Mz1Fm"
    }
  ],
  "uri": "https://api.ngrok.com/edges/tls"
}
```
