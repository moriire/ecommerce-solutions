import requests
import uuid
import inspect
class Paystack:
    base = "https://api.paystack.co"
    PUBLIC_KEY = "pk_test_954e2cb667ed31cf01228aeea8e063a9e7d1ec40"
    SECRET_KEY = "sk_test_e4e73202952f186dde677ddf47d7df5a780da525"
    header = {"Authorization": f"Bearer {SECRET_KEY}", "Content-Type": "application/json"}

    def __init__(self, **kwargs):
        self.kwargs = kwargs

    @staticmethod
    def new_base(*path):
            return "{}/{}".format(Paystack.base, "/".join(path))

class Transaction(Paystack):
    def __init__(self, **kwargs):
        self.kwargs = kwargs
        self.reference = str(uuid.uuid4())
        self.email = kwargs['email']
        self.amount = kwargs['amount']
        self.metadata = kwargs.get('metadata', None)
        super(Transaction, self).__init__(self, kwargs)

    def initialize(self):
        first = self.__class__.__name__.lower()
        sec = inspect.stack()[0].function
        resp = requests.post(
                                self.new_base(first, sec),
                                json = self.kwargs,
                                headers = self.header
                            )
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
            return resp.json()['message']

class Plan(Paystack):
    def _url(self, *others) -> str:
         first = self.__class__.__name__.lower()
         url = self.new_base(first, *others)
         return url

    def __init__(self, **kwargs):
        self.kwargs = kwargs
        super(Plan, self).__init__(**self.kwargs)

    def create(self):
        resp = requests.post(self._url(), json = self.kwargs, headers=self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
            raise Exception(resp.json()["message"])


    def list(self):
        resp =  requests.get(self._url(), headers=self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
            return resp.json()['message']

    def fetch(self, id_or_code:str):
        resp =  requests.get(self._url(str(id_or_code)), headers=self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
            return resp.json()['message']

    def update(self, id_or_code:str, **kw):
        resp =  requests.put(self._url(str(id_or_code)), json=kw, headers = self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
            return resp.json()['message']

    def delete(self, id_or_code:str):
        resp =  requests.delete(self._url(str(id_or_code)), headers = self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["message"]
        else:
            return resp.json()['message']


class Subscription(Paystack):
    def _url(self, *others)->str:
        first = self.__class__.__name__.lower()
        url = self.new_base(first, *others)
        return url

    def __init__(self, **kwargs):
        self.kwargs = kwargs
        super(Subscription, self).__init__(**kwargs)

    def create(self):
        email = self.kwargs["email"]
        plan_code = self.kwargs["plan_code"]
        data = dict(customer=email, plan=plan_code)
        resp = requests.post(self._url(), json = data, headers = self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
            raise Exception(resp.json()['message'])

    def list(self):
        resp =  requests.get(self._url(), headers = self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
            return resp.json()['message']

    def fetch(self, id_or_code:str):
        resp =  requests.get(self._url(str(id_or_code)), headers = self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
            return resp.json()['message']

    def delete(self, id_or_code:str):
        resp =  requests.delete(self._url(str(id_or_code)), headers = self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
            return resp.json()['message']

    def enable(self, code, token):
        resp =  requests.post(self._url('enable'), headers = self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
            return resp.json()['message']

    def disable(self, code, token):
        resp =  requests.post(self._url('enable'), headers = self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]
        else:
           return resp.json()['message']

    def gen_sub_link(self, sub_code):
        resp =  requests.get(self._url(sub_code, 'manage', 'link'), headers = self.header)
        success = resp.json()['status']
        if success:
            return resp.json()["data"]['link']
        else:
            return resp.json()['message']

    def update_sub_link(self, sub_code):
        resp =  requests.post(self._url(sub_code, 'manage','email'), headers = self.header)
        success = resp.json()['status']
        if success:
            return resp.json()['message']
        else:
            return resp.json()['message']

#p=Paystack()
#t=Plan(name="Jumbo", amount="80000", interval="weekly")
#t = p.Transaction('ibmabdulsalam@gmail.com', "12222")
#t=p.Subscription()#('ibmabdulsalam@gmail.com', 'PLN_pcmvjqb1ottjv86')
#print(t.create())#update(id_or_code="361076", names="pratata", amount="43210"))
#list())#.update_sub_link('SUB_2ks9hegimpgk9c3'))#.initialize())
