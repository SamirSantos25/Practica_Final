# Dockerfile
FROM python:3.11-slim

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación
COPY . /app

# Actualizar pip y luego instalar dependencias
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Exponer el puerto donde corre la aplicación
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["python", "app.py"]
