# sha256-first-36-characters-colision-analysis
Análise de colisão de hashes sha256 (string de 64 caracteres) quando olhamos somente para os primeiros 36 caracteres.

# Resultado
Gerei alguns bilhões de hashes sha256 e nenhum deles colidiu quando olhei somente para os primeiros 36 caracteres dos 64 gerados pelo hash.
Conclusão: é bastante seguro utilizar somente os primeiros 36 caracteres do hash em User Properties de GA4. A probabilidade de causar colisão em uma população de usuários é virtualmente nula.