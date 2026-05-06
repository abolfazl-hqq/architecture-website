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
        ("اطلاعات تماس", {
            'fields': ('address', 'phone', 'mobile', 'email')
        }),
        ("ساعات کاری", {
            'fields': ('working_days', 'working_hours')
        }),
        ("شبکه‌های اجتماعی", {
            'fields': ('instagram', 'linkedin', 'telegram')
        }),
        ("متن‌ها", {
            'fields': ('newsletter_text', 'copyright_text', 'designer_name', 'designer_link')
        }),
    )
    verbose_name = "تنظیمات سایت"
    verbose_name_plural = "تنظیمات سایت"