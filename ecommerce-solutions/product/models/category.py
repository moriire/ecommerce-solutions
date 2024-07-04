from django.db import models
from django.urls import reverse
from django.template.defaultfilters import slugify

class Category(models.Model):
    name = models.CharField(max_length=40)
    slug = models.SlugField(unique=True, editable=False, db_index=True)
    description = models.TextField()

    def  __str__(self):
        return self.name

    def absolute_url(self):
        return reverse('category-detail', args=[str(self.id)])

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super().save(*args, **kwargs)

    class Meta:
        verbose_name =("Category")
        verbose_name_plural = ("Product Categories")