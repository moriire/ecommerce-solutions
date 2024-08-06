workers = 4
#worker_class = "uvicorn.workers.UvicornWorker"
threads = 4
log_level = "debug"
max_requests = 2000
timeout = 30
bind = "0.0.0.0:8000"
preload_app = True
accesslog = "./logs/access.log"
errorlog = "./logs/error.log"