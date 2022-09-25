from django.db import models
from users.models import CustomUsers
from rest_framework import serializers
from utils import delete_img, image_resize

class Thumbs(models.Model):
    user = models.ForeignKey(CustomUsers, on_delete=models.CASCADE, related_name="product_thumb")
    img = models.ImageField(upload_to="products", null=True)
    uploaded_on = models.DateTimeField(auto_now_add=True)
    level = models.IntegerField(default=0)
    caption=models.CharField(max_length=100)

    def __str__(self):
        return self.caption

    def absolute_url(self):
        return reverse('thumbs-detail', args=(self.id,))

    def save(self, *args, **kwargs):
        if self.img.file is not None:
            image_resize(self.img, 300, 300)
            super().save(*args, **kwargs)
        else:
            super(Thumbs, self).delete(*args, **kwargs)

    def delete(self):
        if self.img:
            self.img.delete(save=True)
        super(Thumbs, self).delete(*args, **kwargs)



class ThumbSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thumbs
        fields = "__all__"

