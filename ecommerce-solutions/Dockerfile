FROM python:3.12.6-slim-bullseye

ENV APP_HOME=/home/backend
RUN mkdir $APP_HOME
RUN mkdir $APP_HOME/staticfiles
RUN mkdir $APP_HOME/mediafiles
WORKDIR $APP_HOME
COPY ./server-entry.sh .
RUN apt-get update \
  # dependencies for building Python packages
  && apt-get install -y build-essential \
  #&& apt-get install psycopg2 \
  && apt-get install -y libpq-dev \
  # Translations dependencies
  && apt-get install -y gettext \
  # Additional dependencies
  && apt-get install -y git \
  # cleaning up unused files
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
  && rm -rf /var/lib/apt/lists/*


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PYTHONFAULTHANDLER 1
RUN apt update -y
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
RUN ls $APP_HOME
RUN chmod -x server-entry.sh