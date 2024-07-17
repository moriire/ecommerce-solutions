from django.db import models
from django.urls import reverse
from django.template.defaultfilters import slugify
from utils import delete_img, image_resize

def category_image_path(instance, filename):
    return '/'.join([instance.slug, filename])

class Category(models.Model):
    name = models.CharField(max_length=40)
    img = models.ImageField(upload_to=category_image_path, blank=True, null=True)
    slug = models.SlugField(unique=True, editable=False, db_index=True)
    description = models.TextField()

    def  __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        if self.img.file:
            image_resize(self.img, 500, 600)
        super().save(*args, **kwargs)

        return super().save(*args, **kwargs)
    
    def delete(self, *args, **kwargs):
        if self.img:
            self.img.delete(save=True)
        super(Category, self).delete(*args, **kwargs)

    class Meta:
        verbose_name =("Category")
        verbose_name_plural = ("Product Categories")