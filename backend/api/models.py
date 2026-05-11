from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True, verbose_name="نام دسته‌بندی")
    slug = models.SlugField(max_length=100, blank=True, editable=False, verbose_name="نامک (خودکار)")

    class Meta:
        verbose_name = "دسته‌بندی"
        verbose_name_plural = "دسته‌بندی‌ها"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)


class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name="عنوان پروژه")
    description = models.TextField(verbose_name="توضیحات")
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name="دسته‌بندی",
        related_name="projects"
    )
    image = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="تصویر پروژه")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ایجاد")

    class Meta:
        verbose_name = "پروژه"
        verbose_name_plural = "پروژه‌ها"

    def __str__(self):
        return self.title