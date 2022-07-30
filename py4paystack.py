import requests
import uuid
import inspect
class Paystack:
    base = "https://api.paystack.co"
    PUBLIC_KEY = "pk_test_954e2cb667ed31cf01228aeea8e063a9e7d1ec40"
    SECRET_KEY = "sk_test_e4e73202952f186dde677ddf47d7df5a780da525"
    header = {"Authorization": f"Bearer {SECRET_KEY}", "Content-Type": "application/json"}

    @staticmethod
    def new_base(*path):
            return "{}/{}".format(Paystack.base, "/".join(path))

    class Transaction:
        def __init__(self, email, amount, **metadata):
            self.reference = str(uuid.uuid4())
            self.email = email
            self.amount = amount
            self.metadata = metadata

        def __dict__(self):
            return dict(
                    email=self.email,
                    amount = self.amount,
                    **self.metadata
                    )

        def initialize(self):
            first = self.__class__.__name__.lower()
            sec = inspect.stack()[0].function
            resp = requests.post(
                                    Paystack.new_base(first, sec),
                                    json = self.__dict__(),
                                    headers=Paystack.header
                                    )
            success = resp.json()['status']
            if success:
                return resp.json()["data"]["authorization_url"]
            else:
                return resp.json()['message']

    class Plan:
        def _url(self, *others) -> str:
            first = self.__class__.__name__.lower()
            url = Paystack.new_base(first, *others)
            return url

        def __call__(self, name, amount, interval):
            data = dict(name=name, interval = interval, amount = amount)
            resp = requests.post(self._url(), json = data, headers=Paystack.header)
            success = resp.json()['status']
            if success:
                return resp.json()["data"]
            else:
                return resp.json()['message']

        def list(self):
            resp =  requests.get(self._url(), headers=Paystack.header)
            success = resp.json()['status']
            if success:
                return resp.json()["data"]
            else:
                return resp.json()['message']

        def fetch(self, id_or_code:str):
            resp =  requests.get(self._url(str(id_or_code)), headers=Paystack.header)
            success = resp.json()['status']
            if success:
                return resp.json()["data"]
            else:
                return resp.json()['message']

    class Subscription:
        def _url(self, *others)->str:
            first = self.__class__.__name__.lower()
            url = Paystack.new_base(first, *others)
            return url

        def __call__(self, email:str, plan_code:str):
            data = dict(customer=email, plan=plan_code)
            resp = requests.post(self._url(), json = data, headers=Paystack.header)
            success = resp.json()['status']
            if success:
                return resp.json()["data"]
            else:
                return resp.json()['message']

        def list(self):
            resp =  requests.get(self._url(), headers=Paystack.header)
            success = resp.json()['status']
            if success:
                return resp.json()["data"]
            else:
                return resp.json()['message']

        def fetch(self, id_or_code:str):
            resp =  requests.get(self._url(str(id_or_code)), headers=Paystack.header)
            success = resp.json()['status']
            if success:
                return resp.json()["data"]
            else:
                return resp.json()['message']

        def enable(self, code, token):
            resp =  requests.post(self._url('enable'), headers=Paystack.header)
            success = resp.json()['status']
            if success:
                return resp.json()["data"]
            else:
                return resp.json()['message']

        def disable(self, code, token):
            resp =  requests.post(self._url('enable'), headers=Paystack.header)
            success = resp.json()['status']
            if success:
                return resp.json()["data"]
            else:
                return resp.json()['message']

        def gen_sub_link(self, sub_code):
            resp =  requests.get(self._url(sub_code, 'manage', 'link'), headers=Paystack.header)
            success = resp.json()['status']
            if success:
                return resp.json()["data"]['link']
            else:
                return resp.json()['message']

        def update_sub_link(self, sub_code):
            resp =  requests.post(self._url(sub_code, 'manage','email'), headers=Paystack.header)
            success = resp.json()['status']
            if success:
                return resp.json()['message']
            else:
                return resp.json()['message']




p=Paystack()
#t=p.Plan().fetch('PLN_pcmvjqb1ottjv86')#("Jumbo", 80000, "monthly")
#t = p.Transaction('ibmabdulsalam@gmail.com', "12222")
t=p.Subscription()#('ibmabdulsalam@gmail.com', 'PLN_pcmvjqb1ottjv86')
print (t.update_sub_link('SUB_2ks9hegimpgk9c3'))#.initialize())
