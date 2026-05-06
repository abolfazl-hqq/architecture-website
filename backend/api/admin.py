from django.contrib import admin
from .models import Project, Category, SiteSetting

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    search_fields = ('name',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'created_at')
    list_filter = ('category',)
    search_fields = ('title',)

@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
    fieldsets = (
        ("اطلاعات تماس (شماره، آدرس، ایمیل)", {
            'fields': ('address', 'phone', 'mobile', 'email')
        }),
        ("ساعات کاری", {
            'fields': ('working_days', 'working_hours')
        }),
        ("شبکه‌های اجتماعی (اینستاگرام، لینکدین، تلگرام)", {
            'fields': ('instagram', 'linkedin', 'telegram')
        }),
        ("متن‌های فوتر", {
            'fields': ('newsletter_text', 'copyright_text', 'designer_name', 'designer_link')
        }),
        ("متن درباره ما", {
            'fields': ('about_text',)
        }),
    )
    verbose_name = "اطلاعات تماس و فوتر"
    verbose_name_plural = "اطلاعات تماس و فوتر"

    def has_add_permission(self, request):
        """فقط اجازه اضافه کردن بده اگر هیچ رکوردی وجود نداشته باشد"""
        return not SiteSetting.objects.exists()