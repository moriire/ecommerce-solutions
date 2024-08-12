import multiprocessing

workers = multiprocessing.cpu_count() * 2 + 1
#worker_class = "uvicorn.workers.UvicornWorker"
worker_class = "gthread"
threads = 4
log_level = "info"
max_requests = 2000
timeout = 60
bind = "0.0.0.0:8000"
preload_app = True
accesslog = "./logs/access.log"
errorlog = "./logs/error.log"