# sha256-first-36-characters-colision-analysis
Análise de colisão de hashes sha256 (string de 64 caracteres) quando olhamos somente para os primeiros 36 caracteres.

# Resultado
Gerei alguns bilhões de hashes sha256 e nenhum deles colidiu quando olhei somente para os primeiros 36 caracteres dos 64 gerados pelo hash.
Conclusão: é bastante seguro utilizar somente os primeiros 36 caracteres do hash em User Properties de GA4. A probabilidade de causar colisão em uma população de usuários é virtualmente nula.

# Como reproduzir o teste

O teste já está configurado para rodar 1 bilhão de hashes aleatórios, e dá como output um número que corresponde à quantidade de colisões. O ideal é que o resultado seja 0 (zero).
Para aumentar/diminuir o número de hashes do teste, altere o arquivo index.js, nas linhas 10 e 17.

Para executar, primeiro instale as dependências (`npm install`), e depois rode o teste (`npm run test`). Nas configurações default ele pode demorar ~30min (em hardware de última geração).
