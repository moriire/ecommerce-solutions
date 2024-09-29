from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from profile.models import Profile
from .models import ProfileSerializer, ProfileExpandSerializer
from rest_framework import filters

class ProfileView(ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all().select_related()

    def list(self, request):
        items = self.get_queryset()
        params = request.query_params
        pp = params.dict()
        if params:
            items = items.filter(**pp)
        catser = ProfileExpandSerializer(items, many=True)
        return Response({"data": catser.data})
    
    def partial_update(self, request, *args, **kwargs):
        partial = True
        data=request.data
        data.pop("user")
        print(data)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    """
    def retrieve(self, request, pk):
        #item = self.get_queryset().get(store_slug = pk)
        item = self.get_queryset().get(pk = pk)
        #print(dir(item.user))
        catser = ProfileExpandSerializer(item)
        return Response({"data": catser.data,})
    """
    #filter_backends = [filters.SearchFilter]
    #search_fields = ['email', 'company_name']
