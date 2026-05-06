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


class SiteSetting(models.Model):
    """تنظیمات سایت برای فوتر و اطلاعات تماس"""
    address = models.CharField(max_length=500, blank=True, null=True, verbose_name="آدرس")
    phone = models.CharField(max_length=50, blank=True, null=True, verbose_name="شماره تلفن")
    mobile = models.CharField(max_length=50, blank=True, null=True, verbose_name="شماره موبایل")
    email = models.EmailField(blank=True, null=True, verbose_name="ایمیل")

    working_days = models.CharField(max_length=200, blank=True, null=True, verbose_name="روزهای کاری")
    working_hours = models.CharField(max_length=100, blank=True, null=True, verbose_name="ساعت کاری")

    instagram = models.URLField(blank=True, null=True, verbose_name="اینستاگرام")
    linkedin = models.URLField(blank=True, null=True, verbose_name="لینکدین")
    telegram = models.URLField(blank=True, null=True, verbose_name="تلگرام")

    newsletter_text = models.CharField(max_length=300, blank=True, null=True, verbose_name="متن خبرنامه")

    copyright_text = models.CharField(max_length=200, blank=True, null=True, verbose_name="متن کپی رایت")
    designer_name = models.CharField(max_length=100, blank=True, null=True, verbose_name="نام طراح")
    designer_link = models.URLField(blank=True, null=True, verbose_name="لینک طراح")

    class Meta:
        verbose_name = "تنظیمات سایت"
        verbose_name_plural = "تنظیمات سایت"

    def __str__(self):
        return "تنظیمات اصلی سایت"