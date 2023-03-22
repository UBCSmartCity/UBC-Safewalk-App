FROM python:3.9-slim-buster

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install -r requirements.txt

# Set the working directory to /myapi
WORKDIR /myapi

# Copy the current directory contents into the container at /myapi
COPY . .

# Expose port 5000
EXPOSE 5000

# Run the command to start the Flask app
CMD ["python", "app.py"]
