<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "endpoints": [
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-17T10:07:17Z",
      "description": "sample cloud endpoint",
      "domain": {
        "id": "rd_2ydBzVBcc0gbFPMmKAi1gAMNIuv",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2ydBzVBcc0gbFPMmKAi1gAMNIuv"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2ydC0E8qoDGXmpL9HsCN29atlV6",
      "metadata": "{\"environment\": \"staging\"}",
      "pooling_enabled": false,
      "proto": "https",
      "public_url": "https://endpoint-example2.com",
      "traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
      "type": "cloud",
      "updated_at": "2025-06-17T10:07:17Z",
      "uri": "https://api.ngrok.com/endpoints/ep_2ydC0E8qoDGXmpL9HsCN29atlV6",
      "url": "https://endpoint-example2.com"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-17T10:07:15Z",
      "hostport": "fc76324ddc32.ngrok.paid:443",
      "id": "ep_2ydBzsTSBnoRXfI9oRrcFXwPjmU",
      "name": "command_line",
      "pooling_enabled": false,
      "principal": {
        "id": "usr_2ydBxb2cL3pClH9aRwDuT9TqYX4",
        "uri": ""
      },
      "proto": "https",
      "public_url": "https://fc76324ddc32.ngrok.paid",
      "tunnel": {
        "id": "tn_2ydBzsTSBnoRXfI9oRrcFXwPjmU",
        "uri": "https://api.ngrok.com/tunnels/tn_2ydBzsTSBnoRXfI9oRrcFXwPjmU"
      },
      "tunnel_session": {
        "id": "ts_2ydBzsnoVDcdKzB7gnkj6nOuBxw",
        "uri": "https://api.ngrok.com/tunnel_sessions/ts_2ydBzsnoVDcdKzB7gnkj6nOuBxw"
      },
      "type": "ephemeral",
      "updated_at": "2025-06-17T10:07:15Z",
      "upstream_url": "http://localhost:80",
      "url": "https://fc76324ddc32.ngrok.paid"
    },
    {
      "bindings": [
        "public"
      ],
      "created_at": "2025-06-17T10:07:13Z",
      "domain": {
        "id": "rd_2ydBzVBcc0gbFPMmKAi1gAMNIuv",
        "uri": "https://api.ngrok.com/reserved_domains/rd_2ydBzVBcc0gbFPMmKAi1gAMNIuv"
      },
      "edge": {
        "id": "edgtls_2ydBzWtXXfspisdTd9Zmm1Mz1Fm",
        "uri": "https://api.ngrok.com/edges/tls/edgtls_2ydBzWtXXfspisdTd9Zmm1Mz1Fm"
      },
      "hostport": "endpoint-example2.com:443",
      "id": "ep_2ydBzXPUXS4pGWxIisEZ9VNjyxD",
      "pooling_enabled": false,
      "proto": "tls",
      "public_url": "tls://endpoint-example2.com",
      "type": "edge",
      "updated_at": "2025-06-17T10:07:13Z"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/endpoints"
}
```
