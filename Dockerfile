FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /ecommerce-solutions
WORKDIR /ecommerce-solutions
COPY requirements.txt
RUN pip install -r requirements.txt
COPY . /ecommerce-solutions

