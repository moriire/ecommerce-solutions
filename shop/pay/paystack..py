#import requests
import uuid
import inspect
class Paystack:
	base = "https://api.paystack.co"

	def new_base(self, *path):
			return "{}/{}".format(self.base, *path)
	
	class Transaction:
		def __init__(self, email, amount, **metadata):
			self.reference = str(uuid.uuid4())
			self.email = email
			self.amount = amount

		def __dict__(self):
			return dict(
					email=self.email,
					amount = self.amount,
					**metadata
					)

		def initialize(self):
			first = self.__class__.__name__.lower()
			sec = inspect.stack()[0].function
			resp = requests.post(Paystack.new_base(first, sec), self.__dict__())
			return resp["data"]["authorization_url"]

p=Paystack()
t = p.Transaction('a.bbb', 12222)
print (t.initialize())
