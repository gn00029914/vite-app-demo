```
#!/usr/bin/env pwsh
mkcert-v1.4.4-windows-amd64.exe -install -cert-file .\server\https\fastify.cert -key-file .\server\https\fastify.key localhost
```
```
#!/usr/bin/env zsh
brew install nss
mkcert-v1.4.4-darwin-arm64 -install -cert-file ./server/https/fastify.cert -key-file ./server/https/fastify.key localhost
```
由mkcert產生測試用憑證
以localhost簽發憑證就要以localhost訪問
不能用127.0.0.1訪問
不然會影響PWA的Service Works導致連線不匹配
