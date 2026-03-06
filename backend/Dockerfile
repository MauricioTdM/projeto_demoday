# 1. Escolhe a imagem do Python na versão exata que você usa, na versão enxuta (slim) 
FROM python:3.10-slim
# 2. Define a pasta de trabalho dentro do container 
WORKDIR /app  
# 3. Copia APENAS o arquivo de dependências primeiro (O Segredo do Cache) 
COPY requirements.txt .  
# 4. Instala as bibliotecas (o --no-cache-dir evita guardar lixo de instalação) 
RUN pip install --no-cache-dir -r requirements.txt  
# 5. Copia o restante do seu código para dentro do container 
COPY . .  
# 6. Expõe a porta que a aplicação vai rodar 
EXPOSE 5000  
# 7. O comando para ligar o servidor. 
# O 'app:app' significa: no arquivo app.py, rode a variável app. 
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]